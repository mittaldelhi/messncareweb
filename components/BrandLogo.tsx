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
        width={400}
        height={102}
        className="h-16 w-auto max-w-[280px] object-contain sm:h-20 sm:max-w-[320px] lg:h-24 lg:max-w-[380px]"
        priority
      />
    </Link>
  );
}
