//Tranduction dependances
import { useTranslation } from "react-i18next";

import LangueSelector from "./SousComponent/LangueSelector";
function Header() {
  const { t } = useTranslation();
  const { link1, link2, link3, link4, link7 } = t("menu");

  return (
    <>
      <div className=" bg-[#313552] flex  justify-center  items-center font-[roboto] py-4 px-6  w-full z-50 shadow-xl">
        <nav className="container  text-[#ffffff] relative capitalize flex justify-between items-center max-[446px]:gap-2 flex-wrap">
          <div className=" italic  font-bold text-[30px] text-[#FFD43B]">
            <a href="/">AT</a>
          </div>
          <div className="menu max-md:hidden">
            <ul className=" flex gap-6 max-md:none">
              <li className="py-1 border-b-2 transition-all border-[#FFD43B]">
                <a href="">{link1}</a>
              </li>
              <li className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#skils">{link2}</a>
              </li>

              <li className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#Réalisations">{link3} </a>
              </li>
              <li className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#Testimonial">{link7} </a>
              </li>
              <li className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#contact">{link4} </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 items-center py-2">
            {/**langue */}
            <LangueSelector />
          </div>
          <div className="resposive relative">
            <ul className=" md:hidden ">
              <li className="my-2 py-2 border-b-2 transition-all border-[#FFD43B]">
                <a href="">{link1}</a>
              </li>
              <li className="my-2 py-2 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#skils">{link2}</a>
              </li>
              <li className="my-2 py-2 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#Réalisations">{link3}</a>
              </li>
              <li className="py-1 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#Testimonial">{link7} </a>
              </li>
              <li className="my-2 py-2 hover:border-b-2 transition-all ease-in-out border-[#FFD43B]">
                <a href="#contact">{link4} </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
