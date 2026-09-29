import Image from "next/image";
import type { Testimonial } from "@/lib/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col gap-6 rounded-3xl bg-white p-6">
      <Image
        src={testimonial.avatar}
        alt={`Portrait of ${testimonial.name}`}
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />
      <figcaption>
        <p className="font-heading text-heading-xs text-black-950">
          {testimonial.name}
        </p>
        <p className="text-body-l text-primary-800">{testimonial.role}</p>
      </figcaption>
      <blockquote className="text-body-l text-black-700">
        {testimonial.quote}
      </blockquote>
    </figure>
  );
}
