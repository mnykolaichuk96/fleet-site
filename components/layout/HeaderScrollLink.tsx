import { useHeaderNavigation, HeaderTarget } from "@/hooks/useHeaderNavigation";

type Props = {
    target: HeaderTarget;
    children: React.ReactNode;
    variant?: "primary" | "link";
};

export default function HeaderScrollLink({
                                      target,
                                      children,
                                      variant = "link",
                                  }: Props) {
    const { navigate } = useHeaderNavigation();
    // "text-sm font-medium text-[#0A1A2F]/80 hover:text-[#0A1A2F] transition-colors"
    const baseClass =
        variant === "primary"
            ? "rounded-lg bg-[#D97706] px-4 py-2 text-sm text-white font-medium hover:bg-[#B45309]"
            : "text-sm font-medium text-[#0A1A2F]/80 hover:text-[#0A1A2F] transition-colors";

    return (
        <button
            onClick={() => navigate(target)}
            className={baseClass}
        >
            {children}
        </button>
    );
}
