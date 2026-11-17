import Image from "next/image";
import { asset } from "@/lib/base-path";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Branded "Review us on Google" button (public/review-us-on-google.png) linking
 * to the Google Business Profile's write-a-review deep link. Renders nothing if
 * no review URL is configured.
 */
export function ReviewOnGoogleButton({ className }: { className?: string }) {
  const { googleReviewUrl } = site.contact;
  if (!googleReviewUrl) return null;

  return (
    <a
      href={googleReviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Review us on Google"
      className={cn(
        "inline-block overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border/60 transition hover:opacity-90 hover:shadow-md",
        className,
      )}
    >
      <Image
        src={asset("/review-us-on-google.png")}
        alt="Review us on Google"
        width={1629}
        height={804}
        className="h-auto w-[200px]"
      />
    </a>
  );
}
