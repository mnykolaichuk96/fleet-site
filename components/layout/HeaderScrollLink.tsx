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

    const baseClass =
        variant === "primary"
            ? "rounded-lg bg-[#D97706] px-4 py-2 text-sm text-white font-medium hover:bg-[#B45309]"
            : "text-sm text-[#0B1C2D]/85 hover:text-[#0B1C2D]";

    return (
        <button
            onClick={() => navigate(target)}
            className={baseClass}
        >
            {children}
        </button>
    );
}
