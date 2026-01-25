// src/components/icons/MedicalIcon.tsx

type Props = {
    className?: string;
};

export function MedicalIcon({ className }: Props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={className}
        >
            <path d="M12 6v12M6 12h12" />
            <circle cx="12" cy="12" r="9" />
        </svg>
    );
}
