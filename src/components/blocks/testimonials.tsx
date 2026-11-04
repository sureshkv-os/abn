import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";

/**
 * Featured reviews (adapts Tailark mist-testimonials-3). Reads content/reviews.
 * TODO(client, Q19): optionally swap for a live Google reviews widget.
 */
export function Testimonials({
  heading = "What our clients say",
}: {
  heading?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          {heading}
        </h2>
        <p className="text-sm text-muted-foreground">
          Rated {site.credibility.googleRating} from{" "}
          {site.credibility.googleReviewCount} Google reviews
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {reviews.map((review, index) => (
          <figure key={index}>
            <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  aria-hidden
                  className={cn(
                    "size-4",
                    i < review.rating
                      ? "fill-primary stroke-primary"
                      : "fill-foreground/15 stroke-transparent",
                  )}
                />
              ))}
            </div>
            <blockquote className="mt-4 text-foreground">
              {review.quote}
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium text-muted-foreground">
              {review.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
