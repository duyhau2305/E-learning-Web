import { Link } from "react-router-dom";

export default function PopularCategory() {
  const dataList = [
    {
      name: "Computer Science",
      count: "24 Course",
      color: "#00a556",
    },
    {
      name: "Civil Engineering",
      count: "04 Course",
      color: "#31aabd",
    },
    {
      name: "Business Analysis",
      count: "27 Course",
      color: "#eec93d",
    },
    {
      name: "Data Science Analytics",
      count: "28 Course",
      color: "#cf9fb7",
    },
    {
      name: "Learning Management",
      count: "78 Course",
      color: "#fe6225",
    },
    {
      name: "Computer Engineering",
      count: "38 Course",
      color: "#f79a3d",
    },
  ];
  return (
    <section className="popular-container plg:py-[110px] bg-white">
      <div className="text-header mb-[50px]">
        <h3 className="text-primary font-medium tracking-[5px] uppercase -translate-y-2 textr-base text-center">
          POPULAR CATEGORY
        </h3>
        <h2 className="font-bold text-black text-center text-[40px]">
          Popular Category For Learn
        </h2>
      </div>
      <div className="row-data">
        <div className="wrapper-row-data grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pxl:grid-cols-6 pxl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto">
          {dataList.map((e, i) => (
            <div
              className="w-full hover:text-primary text-center rounded-[4px] py-10 px-[30px] transition-all duration-300 shadow-custom hover:-translate-y-[10px]"
              style={{ "--custom": e.color }}
            >
              <img
                src={`/assets/image/popular_category/${i + 1}.jpg`}
                className="mx-auto mb-[15px] font-semibold"
              />
              <Link to="#" className="text-black line-clamp-2">
                {e.name}
              </Link>
              <p className="text-[var(--custom)] font-semibold">{e.count}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[50px] mx-auto w-fit">
        <Link
          className="mx-auto bg-primary py-[10px] px-[30px] w-fit text-base text-white font-bold transition-all duration-300 inline-block rounded-[4px] text-center hover:shadow-orange hover:-translate-y-[5px]"
          type="button"
          role="button"
          tabIndex={0}
          to={"/courses"}
        >
          Browse All Categories
        </Link>
      </div>
    </section>
  );
}
