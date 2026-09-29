import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/lib/data/partners";

export function PartnerLogos() {
  return (
    <section aria-label="Our partners" className="bg-neutral-50 py-12 xl:py-20">
      <Container>
        <ul className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 md:gap-x-12 xl:gap-x-18">
          {partners.map((partner) => (
            <li key={partner.src}>
              <Image
                src={partner.src}
                alt={`${partner.name} partner logo`}
                width={partner.width}
                height={partner.height}
                unoptimized
                className="h-7 w-auto md:h-auto"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
