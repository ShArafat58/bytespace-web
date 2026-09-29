import type { Avatar } from "@/components/ui/AvatarGroup";

export const heroAvatars: Avatar[] = Array.from({ length: 7 }, (_, index) => ({
  src: `/images/avatars/avatar-${index + 1}.png`,
  alt: "",
}));

export const heroHighlight = {
  title: "UI/UX Design",
  courses: "200 Courses",
  students: "1000+ Students",
};

export const heroLearningProgress = 55;

export const heroHappyStudents = {
  rating: "4.5",
  reviews: "(240)",
  total: "2K+",
};
