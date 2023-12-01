import React from "react";

export default function About() {
  const dataList = [
    {
      title: "Skilled Instructors",
      image: "/assets/image/about/1.jpg",
      decription: "Distinctively provide acces mutfuncto users whereas communicate leveraged services"
    },
    {
      title: "Get Certificate",
      image: "/assets/image/about/2.jpg",
      decription: "Distinctively provide acces mutfuncto users whereas communicate leveraged services"
    },
    {
      title: "Online Classes",
      image: "/assets/image/about/3.jpg",
      decription: "Distinctively provide acces mutfuncto users whereas communicate leveraged services"
    },
  ]
  return (
    <section className="bg-white about-container relative">
      <div className="wrapper-info flex items-end mx-auto xl:max-w-[1140px] 2xl:max-w-[1320px] gap-[30px] px-[20px]">
        <div className="content-left relative w-1/2">
          <div className="img-thumb w-full max-w-[636px]">
            <img src="/assets/image/about/person.png" />
          </div>
        </div>
        <div className="content-right relative py-[110px] w-1/2">
          <div className="section-header mb-[30px]">
            <p className="top-header-text text-primary font-medium -translate-y-2 uppercase tracking-[5px]">
              ABOUT OUR EDUKON
            </p>
            <h2 className="big-header-text text-black text-2xl font-bold sm:text-[40px] leading-[52px] mb-2">
              Good Qualification Services And Better Skills
            </h2>
            <p className="section-description-text text-lg">
              Distinctively provide acces mutfuncto users whereas transparent
              proceses somes ncentivize eficient functionalities rather than
              extensible archtectur communicate leveraged services and
              cross-platform.
            </p>
          </div>
          <div className="section-wrapper-content">
            {dataList.map((e) =>(
              <div className="data-cotent-item flex items-center gap-[15px] py-[15px]">
                <div className="w-full max-w-[70px] img-left rounded-full">
                  <img src={e.image} alt={e.title}/>
                </div>
                <div className="text-content-right">
                  <p className="title text-black font-semibold text-xl mb-2">{e.title}</p>
                  <p className="">{e.decription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
