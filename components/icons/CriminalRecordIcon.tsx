// src/components/icons/CriminalRecordIcon.tsx

type Props = {
    className?: string;
};

export function CriminalRecordIcon({ className }: Props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={className}
        >
            <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
            <path d="M14 2v6h6" />
            <path d="M8 12h8M8 16h8" />
        </svg>
    );
}
