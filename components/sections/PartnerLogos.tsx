import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/lib/data/partners";

export function PartnerLogos() {
  return (
    <section aria-label="Our partners" className="bg-neutral-50 py-20">
      <Container>
        <ul className="flex items-end justify-center gap-18">
          {partners.map((partner) => (
            <li key={partner.src}>
              <Image
                src={partner.src}
                alt={`${partner.name} partner logo`}
                width={partner.width}
                height={partner.height}
                unoptimized
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
