import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function BannerSection() {
  return (
    <section className="banner-section pt-[215px] overflow-hidden w-full relative ">
      <div className="container-section max-w-[1320px] relative mx-auto w-full flex flex-col pxl:flex-row items-center px-6.25 z-10">
        <div className="data-left w-full max-w-[800px] xl:max-w-[526px]">
          <div className="data-content">
            <h6 className="subtitle text-uppercase font-semibold text-primary">
             Blended-learning education
            </h6>
            <h2 className="title text-black font-bold">
              <span className="block">Learn The</span> Skills You Need{" "}
              <span className="block">To Succeed</span>
            </h2>
            <p className="desc mb-[25px] text-xl text-grey">
              Free online courses and Blended-learning from the world’s Leading experts. join 18+
              million Learners today.
            </p>
            <form action="/" className="relative">
              <div className="banner-icon text-grey">
                <BsSearch size={16} />
              </div>
              <input type="text" placeholder="Keywords of your course" />
              <button type="submit" className="bg-primary text-white">
                Search Course
              </button>
            </form>
            <div className="banner-catagory flex flex-wrap mt-[25px]">
              <p className="text-grey">Most Popular : </p>
              <ul className="flex flex-wrap">
                <li>
                  <Link to="#" className="px-[10px] text-black underline font-medium ">
                    Figma
                  </Link>
                </li>
                <li>
                  <Link to="#" className="px-[10px] text-black underline font-medium ">
                    Adobe XD
                  </Link>
                </li>
                <li>
                  <Link to="#" className="px-[10px] text-black underline font-medium ">
                    illustration
                  </Link>
                </li>
                <li>
                  <Link to="#" className="px-[10px] text-black underline font-medium ">
                    Photoshop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="data-right w-full flex justify-center mt-[30px] pxl:mt-0 xl:block xl:w-[58%]">
          <div className="data-content-right">
            <img src="/assets/image/student.png" alt="student" />
          </div>
        </div>
      </div>
      <div className="all-shapes"></div>
      <div className="cbs-content-list hidden 2xl:block absolute top-0 w-full h-full z-0">
        <ul className="lab-ul">
          <li className="ccl-shape shape-1">
            <Link to="#">16M Students Happy</Link>
          </li>
          <li className="ccl-shape shape-2">
            <Link to="#">130K+ Total Courses</Link>
          </li>
          <li className="ccl-shape shape-3">
            <Link to="#">89% Successful Students</Link>
          </li>
          <li className="ccl-shape shape-4">
            <Link to="#">23M+ Learners</Link>
          </li>
          <li className="ccl-shape shape-5">
            <Link to="#">36+ Languages</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
