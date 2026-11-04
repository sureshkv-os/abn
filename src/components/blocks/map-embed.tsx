import { site } from "@/content/site";

/**
 * Lazy-loaded map for the Contact page. Uses a keyless Google Maps embed built
 * from the address, unless a specific embed URL is provided in content/site.
 * TODO(client, Q18): confirm the public address / pin location.
 */
export function MapEmbed() {
  const { address, mapsEmbedUrl } = site.contact;
  const query = [address.street, address.suburb, address.state, address.postcode]
    .filter(Boolean)
    .join(", ");

  const src =
    mapsEmbedUrl ||
    (query
      ? `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
      : "");

  if (!src) return null;

  return (
    <section aria-label="Map" className="border-t border-border/60">
      <iframe
        title={`Map to ${site.name}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[360px] w-full border-0"
      />
    </section>
  );
}
