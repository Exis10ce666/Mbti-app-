interface BackgroundPatternProps {
  pattern: string;
  colorPrimary: string;
  colorSecondary: string;
}

export function BackgroundPattern({ pattern, colorPrimary, colorSecondary }: BackgroundPatternProps) {
  const patterns: Record<string, JSX.Element> = {
    network: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill={colorSecondary} />
            <circle cx="50" cy="30" r="2" fill={colorSecondary} />
            <circle cx="80" cy="20" r="2" fill={colorSecondary} />
            <circle cx="30" cy="60" r="2" fill={colorSecondary} />
            <circle cx="70" cy="70" r="2" fill={colorSecondary} />
            <line x1="10" y1="10" x2="50" y2="30" stroke={colorSecondary} strokeWidth="1" />
            <line x1="50" y1="30" x2="80" y2="20" stroke={colorSecondary} strokeWidth="1" />
            <line x1="10" y1="10" x2="30" y2="60" stroke={colorSecondary} strokeWidth="1" />
            <line x1="30" y1="60" x2="70" y2="70" stroke={colorSecondary} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>
    ),
    geometric: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="geometric" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect x="10" y="10" width="30" height="30" fill="none" stroke={colorSecondary} strokeWidth="2" />
            <polygon points="60,10 75,35 60,60 45,35" fill="none" stroke={colorSecondary} strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric)" />
      </svg>
    ),
    arrows: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="arrows" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M10,30 L40,30 M40,30 L35,25 M40,30 L35,35" stroke={colorSecondary} strokeWidth="2" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arrows)" />
      </svg>
    ),
    sparks: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sparks" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20,50 L25,40 L30,50 L40,45 L50,55 L60,50" stroke={colorSecondary} strokeWidth="2" fill="none" />
            <circle cx="25" cy="40" r="3" fill={colorSecondary} />
            <circle cx="50" cy="55" r="3" fill={colorSecondary} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sparks)" />
      </svg>
    ),
    waves: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="waves" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
            <path d="M0,20 Q25,5 50,20 T100,20" stroke={colorSecondary} strokeWidth="2" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
    ),
    clouds: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="clouds" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
            <ellipse cx="30" cy="40" rx="20" ry="10" fill={colorSecondary} />
            <ellipse cx="45" cy="35" rx="15" ry="12" fill={colorSecondary} />
            <ellipse cx="80" cy="50" rx="25" ry="12" fill={colorSecondary} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clouds)" />
      </svg>
    ),
    radial: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="radial" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="5" fill={colorSecondary} />
            <circle cx="50" cy="50" r="15" fill="none" stroke={colorSecondary} strokeWidth="1" />
            <circle cx="50" cy="50" r="25" fill="none" stroke={colorSecondary} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#radial)" />
      </svg>
    ),
    confetti: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="confetti" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="10" y="15" width="8" height="8" fill={colorSecondary} transform="rotate(20 14 19)" />
            <circle cx="50" cy="30" r="4" fill={colorSecondary} />
            <rect x="70" y="50" width="6" height="6" fill={colorSecondary} transform="rotate(45 73 53)" />
            <circle cx="25" cy="70" r="3" fill={colorSecondary} />
            <rect x="85" y="20" width="7" height="7" fill={colorSecondary} transform="rotate(60 88.5 23.5)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#confetti)" />
      </svg>
    ),
    grid: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke={colorSecondary} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    ),
    hearts: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hearts" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40,60 C40,60 20,45 20,35 C20,28 25,25 30,25 C35,25 40,30 40,30 C40,30 45,25 50,25 C55,25 60,28 60,35 C60,45 40,60 40,60 Z" fill={colorSecondary} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hearts)" />
      </svg>
    ),
    columns: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="columns" x="0" y="0" width="60" height="100" patternUnits="userSpaceOnUse">
            <rect x="10" y="0" width="15" height="100" fill={colorSecondary} />
            <rect x="35" y="0" width="15" height="100" fill={colorSecondary} opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#columns)" />
      </svg>
    ),
    circles: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circles" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="15" fill="none" stroke={colorSecondary} strokeWidth="2" />
            <circle cx="60" cy="60" r="12" fill="none" stroke={colorSecondary} strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circles)" />
      </svg>
    ),
    tools: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tools" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M20,30 L20,70" stroke={colorSecondary} strokeWidth="3" />
            <circle cx="20" cy="25" r="5" fill={colorSecondary} />
            <rect x="50" y="40" width="30" height="20" fill="none" stroke={colorSecondary} strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tools)" />
      </svg>
    ),
    paint: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="paint" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="8" fill={colorSecondary} opacity="0.6" />
            <circle cx="70" cy="50" r="12" fill={colorSecondary} opacity="0.4" />
            <circle cx="50" cy="80" r="10" fill={colorSecondary} opacity="0.5" />
            <circle cx="90" cy="20" r="6" fill={colorSecondary} opacity="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#paint)" />
      </svg>
    ),
    lightning: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="lightning" x="0" y="0" width="80" height="100" patternUnits="userSpaceOnUse">
            <path d="M40,10 L30,50 L45,50 L35,90" stroke={colorSecondary} strokeWidth="3" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lightning)" />
      </svg>
    ),
    stars: (
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M25,15 L28,23 L36,23 L30,28 L32,36 L25,31 L18,36 L20,28 L14,23 L22,23 Z" fill={colorSecondary} />
            <path d="M70,60 L72,66 L78,66 L73,70 L75,76 L70,72 L65,76 L67,70 L62,66 L68,66 Z" fill={colorSecondary} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stars)" />
      </svg>
    )
  };

  return patterns[pattern] || patterns.network;
}
