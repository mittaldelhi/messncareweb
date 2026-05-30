import Image from "next/image";
import Link from "next/link";
import { site, siteImages } from "../lib/site";

export function DownloadBadges({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={site.googlePlayUrl}
        aria-label="Download Mess N Care on Google Play"
        className="focus-ring rounded-md"
      >
        <Image
          src={siteImages.googlePlayBadge}
          alt="Get it on Google Play"
          width={compact ? 145 : 170}
          height={compact ? 43 : 50}
          className="h-auto w-[145px] sm:w-[170px]"
        />
      </Link>
      <div className="flex flex-col gap-1">
        <span
          aria-disabled="true"
          className="cursor-not-allowed rounded-md opacity-75"
        >
          <Image
            src={siteImages.appStoreBadge}
            alt="Download on the App Store"
            width={compact ? 145 : 170}
            height={compact ? 43 : 50}
            className="h-auto w-[145px] sm:w-[170px]"
          />
        </span>
        <span className="text-xs font-semibold text-brand-orange">
          Coming soon on iOS
        </span>
      </div>
    </div>
  );
}
