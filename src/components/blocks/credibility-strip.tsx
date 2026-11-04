import { Award, Star } from "lucide-react";
import { site } from "@/content/site";

/**
 * Surfaces the under-used credibility the proposal calls out (§1): Google
 * rating, Xero partnership and award recognition.
 */
export function CredibilityStrip() {
  const { credibility } = site;

  return (
    <section
      aria-label="Our credentials"
      className="border-y border-border/60 bg-secondary/40"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6 text-sm font-medium text-foreground/80">
        <span className="inline-flex items-center gap-2">
          <Star className="size-4 fill-primary stroke-primary" aria-hidden />
          {credibility.googleRating} stars · {credibility.googleReviewCount} Google
          reviews
        </span>
        {credibility.isXeroPartner && (
          <span className="inline-flex items-center gap-2">
            <span className="grid size-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              X
            </span>
            Xero certified partner
          </span>
        )}
        <span className="inline-flex items-center gap-2">
          <Award className="size-4 text-primary" aria-hidden />
          {credibility.awardsNote}
        </span>
      </div>
    </section>
  );
}
