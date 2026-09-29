import { Container } from "@/components/ui/Container";

export default function HomePage() {
  return (
    <main>
      <Container className="flex flex-col gap-6 py-20">
        <h1 className="font-heading text-heading-l">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="text-body-l text-neutral-600">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <p className="text-label-m text-primary-800">
          Satoshi Medium label check
        </p>
        <div className="flex gap-4">
          <span className="size-16 rounded-full bg-primary-800" />
          <span className="size-16 rounded-full bg-secondary-400" />
          <span className="size-16 rounded-full bg-surface" />
          <span className="size-16 rounded-full bg-neutral-950" />
        </div>
      </Container>
    </main>
  );
}
