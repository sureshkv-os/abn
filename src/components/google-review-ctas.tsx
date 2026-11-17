import Image from "next/image";
import { asset } from "@/lib/base-path";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * The two Google-review calls to action, kept together so their sizing and
 * behaviour stay consistent wherever they appear. Width is controlled by the
 * `className` on the wrapper (the images scale to it), so each placement can
 * pick its own scale.
 *
 * - ReadReviewsOnGoogleBadge → the Google Business Profile (read existing reviews).
 * - ReviewOnGoogleButton     → the write-a-review deep link (leave a review).
 */

/** Circular "Read our reviews" seal (transparent PNG). */
export function ReadReviewsOnGoogleBadge({
  className,
}: {
  className?: string;
}) {
  const { googleBusinessProfileUrl } = site.contact;
  if (!googleBusinessProfileUrl) return null;

  return (
    <a
      href={googleBusinessProfileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Read our reviews on Google"
      className={cn(
        "inline-block w-28 shrink-0 transition hover:scale-[1.03] hover:drop-shadow-md",
        className,
      )}
    >
      <Image
        src={asset("/read-our-reviews-on-google.png")}
        alt="Read our reviews on Google"
        width={357}
        height={271}
        className="h-auto w-full"
      />
    </a>
  );
}

/** Wide "Review us on Google" button (opaque PNG on a white card). */
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
        "inline-block w-[200px] shrink-0 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border/60 transition hover:opacity-90 hover:shadow-md",
        className,
      )}
    >
      <Image
        src={asset("/review-us-on-google.png")}
        alt="Review us on Google"
        width={1629}
        height={804}
        className="h-auto w-full"
      />
    </a>
  );
}
