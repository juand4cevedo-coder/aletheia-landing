import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const IconShield = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
export const IconHash = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 9h14M5 15h14M10 4l-2 16M16 4l-2 16" />
  </svg>
);
export const IconFingerprint = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 11a2 2 0 0 1 2 2c0 2 .3 3.5-.6 5.5" />
    <path d="M8.5 6.8A6 6 0 0 1 18 12c0 1.5.1 3-.5 4.6" />
    <path d="M6 12a6 6 0 0 1 1.6-4" />
    <path d="M6.2 16c.6-1.2.8-2.5.8-4a5 5 0 0 1 .3-1.7" />
    <path d="M10 20.5c.6-1.4.9-3 .9-4.5a1 1 0 0 1 2 0" />
  </svg>
);
export const IconClock = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>
);
export const IconKey = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="8" cy="15" r="3.5" />
    <path d="M10.5 12.5L20 3M16 7l2 2M14 9l2 2" />
  </svg>
);
export const IconLink = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M9.5 14.5l5-5" />
    <path d="M7 12l-1.5 1.5a3.5 3.5 0 0 0 5 5L12 17" />
    <path d="M17 12l1.5-1.5a3.5 3.5 0 0 0-5-5L12 7" />
  </svg>
);
export const IconScale = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3v18M7 21h10M5 7h14l-7-2z" />
    <path d="M5 7l-2.5 5a3 3 0 0 0 5 0L5 7M19 7l-2.5 5a3 3 0 0 0 5 0L19 7" />
  </svg>
);
export const IconDoc = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M14 3v5h5M10 13h6M10 17h6" />
  </svg>
);
export const IconUpload = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 16V5M8 9l4-4 4 4" />
    <path d="M5 18v1h14v-1" />
  </svg>
);
export const IconLock = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <path d="M12 15v2" />
  </svg>
);
export const IconAlert = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 4l9 16H3z" />
    <path d="M12 10v4M12 17.5v.5" />
  </svg>
);
export const IconCheck = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
);
export const IconArrow = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const IconMenu = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const IconClose = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const IconEye = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);
export const IconServer = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="4" y="4" width="16" height="7" rx="1.5" />
    <rect x="4" y="13" width="16" height="7" rx="1.5" />
    <path d="M8 7.5h.01M8 16.5h.01" />
  </svg>
);
