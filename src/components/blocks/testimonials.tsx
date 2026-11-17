import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ReadReviewsOnGoogleBadge,
  ReviewOnGoogleButton,
} from "@/components/google-review-ctas";
import { houseAccent } from "@/lib/palette";
import { asset } from "@/lib/base-path";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

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
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            {heading}
          </h2>
          <p className="text-sm text-muted-foreground">
            Rated {site.credibility.googleRating} on Google
          </p>
        </div>
        <ReadReviewsOnGoogleBadge />
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {reviews.map((review, index) => (
          <figure
            key={index}
            className={cn("border-l-2 pl-5", houseAccent.border)}
          >
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
            <figcaption className="mt-4 flex items-center gap-3">
              <Avatar>
                {review.avatar && (
                  <AvatarImage src={asset(review.avatar)} alt={review.author} />
                )}
                <AvatarFallback className="bg-primary/10 font-medium text-primary">
                  {initials(review.author)}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-foreground">
                {review.author}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-14 flex flex-col items-center gap-3 border-t border-border/60 pt-10">
        <p className="text-sm text-muted-foreground">
          Worked with us? We’d love to hear how it went.
        </p>
        <ReviewOnGoogleButton />
      </div>
    </section>
  );
}
