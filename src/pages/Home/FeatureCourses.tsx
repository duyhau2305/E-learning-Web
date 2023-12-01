import ListCourses from "../../components/ListCourses";
import { courses } from "../../configs/fakeData";

export default function FeatureCourses() {
  return (
    <section className="featured-courses bg-secondary py-[110px]">
      <div className="text-header mb-[50px]">
        <h3 className="text-primary font-medium tracking-[5px] uppercase -translate-y-2 textr-base text-center">
          FEATURED COURSES
        </h3>
        <h2 className="font-bold text-black text-center text-[40px]">
          Pick A Course To Get Started
        </h2>
      </div>
      <div className="row-data w-full">
      <div className='container max-w-[1340px] mx-auto px-4'>
      <ListCourses courses={courses}/>
    </div>
      </div>
    </section>
  );
}
