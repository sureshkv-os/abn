import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";
import logoMark from "../../public/logo.png";

/**
 * Brand wordmark (client-supplied ASHOK Business Consulting Group logo, trimmed
 * of transparent padding into public/logo-mark.png).
 */
export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={logoMark}
      alt={`${site.legalName} logo`}
      priority
      className={cn("h-10 w-auto object-contain", className)}
      sizes="220px"
    />
  );
};
