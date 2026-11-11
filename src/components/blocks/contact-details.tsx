import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { IconTile } from "@/components/ui/icon-tile";
import { houseAccent } from "@/lib/palette";
import { site } from "@/content/site";

/** Contact page: NAP, click-to-call, hours and Google Business Profile link. */
export function ContactDetails() {
  const { contact, credibility } = site;
  const addressLine = [
    contact.address.street,
    contact.address.suburb,
    contact.address.state,
    contact.address.postcode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Get in touch</h2>

      <ul className="space-y-4 text-sm">
        <li className="flex items-center gap-3">
          <IconTile accent={houseAccent} size={9}>
            <Phone className="size-5" aria-hidden />
          </IconTile>
          <a href={contact.phone.href} className="hover:underline">
            {contact.phone.display}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <IconTile accent={houseAccent} size={9}>
            <Mail className="size-5" aria-hidden />
          </IconTile>
          <a href={`mailto:${contact.email}`} className="hover:underline">
            {contact.email}
          </a>
        </li>
        {addressLine && (
          <li className="flex items-center gap-3">
            <IconTile accent={houseAccent} size={9}>
              <MapPin className="size-5" aria-hidden />
            </IconTile>
            <span>{addressLine}</span>
          </li>
        )}
        <li className="flex items-center gap-3">
          <IconTile accent={houseAccent} size={9}>
            <Clock className="size-5" aria-hidden />
          </IconTile>
          <span>{contact.hours}</span>
        </li>
      </ul>

      {contact.googleBusinessProfileUrl && (
        <a
          href={contact.googleBusinessProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Star className="size-4 fill-primary stroke-primary" aria-hidden />
          Read our {credibility.googleReviewCount} Google reviews
        </a>
      )}
    </div>
  );
}
