import { CategoryTags } from "@/components/sections/discover/CategoryTags";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/lib/data/courses";

export function DiscoverCourses() {
  return (
    <section
      id="courses"
      aria-labelledby="discover-heading"
      className="py-12 md:py-16 xl:py-18"
    >
      <Container className="flex flex-col items-center">
        <SectionHeading
          id="discover-heading"
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          titleClassName="max-w-147"
        />
        <CategoryTags className="mt-8 xl:mt-10.5" />
        <div className="mt-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:mt-19.25 xl:grid-cols-3 xl:gap-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
