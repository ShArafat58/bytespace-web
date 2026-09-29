import { CreatorRow } from "@/components/sections/career/CreatorRow";
import { GrowthRow } from "@/components/sections/career/GrowthRow";
import { Container } from "@/components/ui/Container";
import { Glow } from "@/components/ui/Glow";

// Positions are offsets from the center of the 1440px design frame
const glows = [
  {
    id: "blue-bottom-right",
    color: "primary",
    intensity: 24,
    className: "left-1/2 top-197 ml-0.5 size-284.25",
  },
  {
    id: "lime-top-left",
    color: "secondary",
    intensity: 40,
    className: "left-1/2 -top-116.5 -ml-218 size-284.25",
  },
  {
    id: "blue-middle-left",
    color: "primary",
    intensity: 16,
    className: "left-1/2 top-45.75 -ml-307 size-284.25",
  },
  {
    id: "blue-top-right",
    color: "primary",
    intensity: 8,
    className: "left-1/2 -top-114.5 ml-22.75 size-284.25",
  },
  {
    id: "lime-bottom-left",
    color: "secondary",
    intensity: 60,
    className: "left-1/2 top-236.5 -ml-251.75 size-168",
  },
] as const;

export function CareerAndCreator() {
  return (
    <div className="relative overflow-hidden bg-surface">
      {glows.map((glow) => (
        <Glow
          key={glow.id}
          color={glow.color}
          intensity={glow.intensity}
          className={glow.className}
        />
      ))}
      <Container className="relative flex flex-col gap-16 py-16 xl:gap-18 xl:py-30">
        <GrowthRow />
        <CreatorRow />
      </Container>
    </div>
  );
}
