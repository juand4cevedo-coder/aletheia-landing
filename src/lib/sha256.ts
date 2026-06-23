/**
 * Cálculo de SHA-256 100% en el navegador con la Web Crypto API nativa.
 *
 * Decisión de seguridad (pilar del proyecto): el archivo o el texto NUNCA
 * se envían a ningún servidor. El hash se calcula localmente en la máquina
 * del usuario. Esto preserva la confidencialidad (la "C" de la tríada CIA)
 * incluso en la demo pública de la landing.
 *
 * SHA-256 produce una huella de 256 bits (64 caracteres hexadecimales).
 * Si un solo bit del contenido cambia, ~la mitad de los bits del hash
 * cambian (efecto avalancha): por eso sirve para detectar alteraciones.
 */

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Hash de una cadena de texto. */
export async function hashText(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return bufferToHex(digest);
}

/** Hash de un archivo (lee los bytes binarios, no el nombre). */
export async function hashFile(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return bufferToHex(digest);
}
