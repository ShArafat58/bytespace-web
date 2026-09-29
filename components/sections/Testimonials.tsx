import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

// Positions are offsets from the center of the 1440px design frame
const glows = [
  {
    id: "lime-right",
    color: "secondary",
    intensity: 40,
    className: "left-1/2 -top-60.25 ml-30.5 size-284.25",
  },
  {
    id: "lime-center",
    color: "secondary",
    intensity: 60,
    className: "left-1/2 -top-34.5 -ml-81.25 size-168",
  },
  {
    id: "blue-left",
    color: "primary",
    intensity: 24,
    className: "left-1/2 top-37.25 -ml-290.5 size-284.25",
  },
] as const;

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-surface"
    >
      {glows.map((glow) => (
        <Glow
          key={glow.id}
          color={glow.color}
          intensity={glow.intensity}
          className={glow.className}
        />
      ))}

      <Container className="relative flex flex-col gap-18 pb-14.25 pt-18.5">
        <div className="flex items-end gap-10.75">
          <h2
            id="testimonials-heading"
            className="w-144.25 shrink-0 font-heading text-heading-m text-black-950"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-body-l text-black-700">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="grid grid-cols-3 items-start gap-10.25">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
