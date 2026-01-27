export default function RentCarIllustration() {
    return (
        <svg
            viewBox="0 0 520 420"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
        >
            <defs>
                {/* soft background blob */}
                <radialGradient id="blob" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFF3E0" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                </radialGradient>

                <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow
                        dx="0"
                        dy="18"
                        stdDeviation="24"
                        floodColor="#000"
                        floodOpacity="0.15"
                    />
                </filter>
            </defs>

            {/* background blob */}
            <ellipse
                cx="300"
                cy="220"
                rx="200"
                ry="170"
                fill="url(#blob)"
            />

            {/* phone */}
            <g transform="translate(320 40)" filter="url(#softShadow)">
                <rect
                    x="0"
                    y="0"
                    width="110"
                    height="200"
                    rx="20"
                    fill="#111827"
                />
                <rect
                    x="8"
                    y="18"
                    width="94"
                    height="164"
                    rx="14"
                    fill="#FFFFFF"
                />
                <text
                    x="55"
                    y="105"
                    textAnchor="middle"
                    fontSize="22"
                    fontWeight="700"
                    fill="#2DBE60"
                    fontFamily="Inter, system-ui"
                >
                    Bolt
                </text>
            </g>

            {/* car */}
            <g transform="translate(140 210)" filter="url(#softShadow)">
                {/* body */}
                <rect
                    x="0"
                    y="40"
                    width="220"
                    height="60"
                    rx="18"
                    fill="#F9FAFB"
                    stroke="#E5E7EB"
                />

                {/* roof */}
                <rect
                    x="40"
                    y="10"
                    width="140"
                    height="45"
                    rx="16"
                    fill="#FFFFFF"
                    stroke="#E5E7EB"
                />

                {/* taxi sign */}
                <rect
                    x="95"
                    y="0"
                    width="40"
                    height="18"
                    rx="6"
                    fill="#FFFFFF"
                    stroke="#D1D5DB"
                />
                <text
                    x="115"
                    y="13"
                    textAnchor="middle"
                    fontSize="9"
                    fontWeight="600"
                    fill="#111827"
                >
                    TAXI
                </text>

                {/* wheels */}
                <circle cx="50" cy="105" r="14" fill="#111827" />
                <circle cx="180" cy="105" r="14" fill="#111827" />
            </g>

            {/* key */}
            <g transform="translate(300 160)">
                <circle cx="0" cy="0" r="14" fill="#FBBF24" />
                <rect x="14" y="-3" width="34" height="6" rx="3" fill="#F59E0B" />
                <rect x="40" y="-3" width="6" height="12" rx="2" fill="#F59E0B" />
            </g>

            {/* decorative sparkles */}
            <circle cx="330" cy="130" r="2" fill="#FBBF24" />
            <circle cx="350" cy="150" r="1.5" fill="#FBBF24" />
            <circle cx="310" cy="140" r="1.5" fill="#FBBF24" />
        </svg>
    );
}
