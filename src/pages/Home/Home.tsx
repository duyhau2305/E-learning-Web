import About from "./About";
import BannerSection from "./BannerSection";
import BrandComponent from "./Brand";
import FeatureCourses from "./FeatureCourses";
import Feedback from "./Feedback";
import Instructors from "./Instructors";
import Blog from "./Blog";
import PopularCategory from "./PopularCategory";

export default function HomePage() {
  return (
    <section className="w-full">
      <BannerSection />
      <BrandComponent/>
      <PopularCategory/>
      <FeatureCourses/>
      <About/>
      <Instructors/>
      <Feedback/>
      <Blog/>
    </section>
  );
}
