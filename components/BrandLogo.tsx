import Link from "next/link";
import { site } from "../lib/site";

export function BrandLogo() {
  return (
    <Link
      href="/"
      className="focus-ring inline-flex shrink-0 items-center rounded-md"
      aria-label="Mess N Care home"
    >
      <span className="text-2xl font-black tracking-tight text-brand-green">
        Mess <span className="text-brand-orange">N</span> Care
      </span>
    </Link>
  );
}
