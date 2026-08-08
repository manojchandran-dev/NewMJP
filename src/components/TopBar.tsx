import { PhoneIcon, MapPinIcon, ClockIcon } from "./icons";
import { BUSINESS } from "@/lib/site";

export function TopBar() {
  return (
    <div className="hidden bg-blue-950 text-white/80 sm:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <a href={BUSINESS.telephoneHref} className="flex items-center gap-1.5 transition hover:text-white">
            <PhoneIcon className="h-3.5 w-3.5" />
            {BUSINESS.telephone}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5" />
            {BUSINESS.addressLocality}, {BUSINESS.addressRegion}
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <ClockIcon className="h-3.5 w-3.5" />
          {BUSINESS.hoursLabel}
        </span>
      </div>
    </div>
  );
}
