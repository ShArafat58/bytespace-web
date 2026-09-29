import type { ComponentProps, ComponentType } from "react";
import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  MarketingIcon,
  PhotographyIcon,
  SoftwareIcon,
} from "@/components/icons/CategoryIcons";

export type LearningPath = {
  label: string;
  Icon: ComponentType<ComponentProps<"svg">>;
};

export const learningPaths: LearningPath[] = [
  { label: "Design", Icon: DesignIcon },
  { label: "Development", Icon: DevelopmentIcon },
  { label: "IT & Software", Icon: SoftwareIcon },
  { label: "Business", Icon: BusinessIcon },
  { label: "Marketing", Icon: MarketingIcon },
  { label: "Photography", Icon: PhotographyIcon },
];
