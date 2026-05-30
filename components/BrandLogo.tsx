import Image from "next/image";
import Link from "next/link";
import { siteImages } from "../lib/site";

export function BrandLogo() {
  return (
    <Link
      href="/"
      className="focus-ring inline-flex shrink-0 items-center rounded-md"
      aria-label="Mess N Care home"
    >
      <Image
        src={siteImages.logoWordmark}
        alt="Mess N Care - Your Home Our Care"
        width={360}
        height={92}
        className="h-11 w-auto max-w-[210px] object-contain sm:h-12 sm:max-w-[235px] lg:max-w-[255px]"
        priority
      />
    </Link>
  );
}
