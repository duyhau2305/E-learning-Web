import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  const dataList = [
    {
      name: "Site Map",
      subname: [
        "Documentation",
        "Feedback",
        "Plugins",
        "Support Forums",
        "Themes",
      ],
    },
    {
      name: "Useful Links",
      subname: [
        "About Us",
        "Help Link",
        "Terms & Conditions",
        "Contact Us",
        "Privacy Policy",
      ],
    },
    {
      name: "Social Contact",
      subname: ["Facebook", "Twitter", "Instagram", "YouTube", "Github"],
    },
    {
      name: "Our Support",
      subname: [
        "Help Center",
        "Paid with Mollie",
        "Status",
        "Changelog",
        "Contact Support",
      ],
    },
  ];
  return (
    <>
      <footer className="footer bg-[#1f1f33] relative">
        <div className="footer-shape">
          <img
            src={"/assets/image/logo.png"}
            className="absolute left-[100px] mt-14 w-40"
          />
          <img
            src={"/assets/image/footer/04.png"}
            className="absolute right-0 bottom-0"
          />
        </div>
        <div className="news-letter relative z-10 mx-auto py-[60px] sm:max-w-[540px] md:max-w-[720px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="section-wrapper max-w-[720px] 2xl:max-w-none mx-auto flex-col gap-4 2xl:gap-8 2xl:flex-row flex items-center pb-4 border-b border-[#363648]">
            <div className="news-title text-center 2xl:text-left w-full 2xl:w-3/5">
              <h3 className="text-white text-[30px] font-bold">
                Want Us To Email You About Special Offers And Updates?
              </h3>
            </div>
            <div className="news-form relative w-full 2xl:w-2/5">
              <form className="form relative h-16 flex items-center">
                <div className="absolute flex items-center justify-center w-[30px] h-[30px] left-[10px] text-2xl top-1/2 -translate-y-1/2 text-[#26c976]">
                  <IoIosSend className="w-full" />
                </div>

                <button
                  className="absolute h-[54px] bg-[#26c976] text-white font-bold right-[5px] p-[5px] w-[162px]"
                  type="submit"
                >
                  Subcribe Now
                </button>
                <input
                  className="py-5 pl-[50px] bg-white w-full sm:pr-[175px] h-16"
                  placeholder="Enter Your Email"
                  type="text"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="link-footer-bottom relative z-10 pb-[70px] mx-auto sm:max-w-[540px] md:max-w-[720px] xl:max-w-[1140px] 2xl:max-w-[1320px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {dataList.map((e) => (
            <div className="item-link-bottom text-white mt-8" key={e.name}>
              <h4 className="parent-link text-2xl font-bold text-white relative -mt-2 mb-[30px] after:bottom-[-15px] after:absolute after:w-[50px] after:block after:h-0.5 after:bg-[#26c976]">
                {e.name}
              </h4>
              <ul className="sublink-content">
                {e.subname.map((v) => (
                  <li className="link py-2 text-base" key={v}>
                    <Link to="#">{v}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="bottom-info-license py-[35px] mx-auto sm:max-w-[540px] md:max-w-[720px] xl:max-w-[1140px] 2xl:max-w-[1320px] text-center">
        <p className="text-lg">
          © 2023{" "}
          <Link to="/" className="text-black text-lg font-bold">
            H-Blended
          </Link>{" "}
          Designed by{" "}
          <Link
            to="https://github.com/duyhau2305"
            target="_blank"
            className="text-black text-lg font-bold"
          >
            Duy Hau
          </Link>{" "}
        </p>
      </div>
    </>
  );
}
