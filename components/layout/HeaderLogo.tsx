import { useHeaderNavigation } from "@/hooks/useHeaderNavigation";
import Logo from "@/components/icons/Logo";

export default function HeaderLogo() {
  const { navigate } = useHeaderNavigation();

  return (
    <button
      onClick={() => navigate("hero", { offset: 0, retries: 5 })}
      className="flex items-center h-full shrink-0"
      aria-label="Go to top"
    >
      <Logo className="h-[100%] aspect-[4/1]"/>
    </button>
  );
}