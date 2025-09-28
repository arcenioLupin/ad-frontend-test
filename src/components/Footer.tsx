import { LogoApplyDigital } from "./icons/LogoApplyDigital";
import { LogoApply } from "./icons/LogoApply";
import { LogoDigital } from "./icons/LogoDigital";

export const Footer = () => {
  return (
    <footer className="w-full h-[172.09px] bg-[#404040] border-b border-[#8F8F8F] px-6 md:px-20 flex items-center justify-center">
      <a href="/" aria-label="Go to Home" className="flex items-center gap-3">
        <LogoApplyDigital size={52} />
        <div className="flex flex-col leading-none">
          <LogoApply size={101} />
          <LogoDigital size={101} />
        </div>
      </a>
    </footer>
  );
};
