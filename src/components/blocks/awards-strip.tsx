import Image from "next/image";
import { awards } from "@/content/team";
import { asset } from "@/lib/base-path";
import { houseAccent } from "@/lib/palette";
import { cn } from "@/lib/utils";

/**
 * Award badges (client-supplied images). Used on the About page and reusable
 * elsewhere. Reads content/team `awards`.
 */
export function AwardsStrip({
  heading = "Awards & recognition",
}: {
  heading?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {heading && (
        <h2 className="text-balance text-3xl font-semibold">{heading}</h2>
      )}
      <ul className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
        {awards.map((award) => (
          <li
            key={award.image}
            className={cn(
              "flex flex-col items-center gap-4 rounded-2xl p-6 text-center",
              houseAccent.bg,
            )}
          >
            <Image
              src={asset(award.image)}
              alt={award.name}
              width={award.width}
              height={award.height}
              className="h-28 w-auto object-contain sm:h-32"
              sizes="180px"
            />
            <span className="text-sm text-muted-foreground">{award.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
