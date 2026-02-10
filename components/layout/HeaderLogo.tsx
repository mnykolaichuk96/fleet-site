import { useHeaderNavigation } from "@/hooks/useHeaderNavigation";
import {LogoV2} from "@/components/icons/LogoV2";
import Logo from "@/components/icons/Logo";


export default function HeaderLogo() {
  const { navigate } = useHeaderNavigation();

  return (
    <button
      onClick={() => navigate("hero", { offset: 0, retries: 5 })}
      className="flex items-center h-full shrink-0"
      aria-label="Go to top"
    >
      <Logo className="lg:h-[95%] h-12 w-auto"/>
    </button>
  );
}