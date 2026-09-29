import type { Avatar } from "@/components/ui/AvatarGroup";

export type Course = {
  id: string;
  title: string;
  image: string;
  creator: string;
  lessons: string;
  duration: string;
  comments: string;
  rating: string;
  level: string;
  price: string;
  enrolledLabel: string;
};

export const courseAvatars: Avatar[] = Array.from(
  { length: 4 },
  (_, index) => ({
    src: `/images/avatars/course-avatar-${index + 1}.png`,
    alt: "",
  }),
);

const sharedDetails = {
  creator: "purepearl studio",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  rating: "4.5",
  level: "Beginner",
  price: "$25",
  enrolledLabel: "26+",
};

export const courses: Course[] = [
  {
    id: "learn-figma",
    title: "Learn Figma from Basic",
    image: "/images/courses/course-1.png",
    ...sharedDetails,
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/course-2.png",
    ...sharedDetails,
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    image: "/images/courses/course-3.png",
    ...sharedDetails,
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Self-Care",
    image: "/images/courses/course-4.png",
    ...sharedDetails,
  },
  {
    id: "money",
    title: "Mastering Money Management",
    image: "/images/courses/course-5.png",
    ...sharedDetails,
  },
  {
    id: "startup",
    title: "From Idea to Startup Success",
    image: "/images/courses/course-6.png",
    ...sharedDetails,
  },
];
