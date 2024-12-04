//Tranduction dependances
import { useTranslation } from "react-i18next";

import cmr from "../assets/testimonials/cameroun.png";
import ci from "../assets/testimonials/ci.png";
import { FaSquareFacebook } from "react-icons/fa6";
import anders from "../assets/testimonials/anders.jpg";
import fr from "../assets/testimonials/france.png";
import nov from "../assets/testimonials/norvege.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel";
import is from "../assets/is.jpg";
import { GrLinkedin } from "react-icons/gr";
const Testimonial = () => {
  const { t } = useTranslation();
  const { Sectitle8 } = t("FullStack");
  return (
    <div className="bg-[#221C27]  px-4" id="Testimonial">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-[#FFD43B] text-[20px] text-center">
          {Sectitle8} <br />
          <i className="fa-solid fa-mug-hot relative top-5 text-[50px] "></i>
        </span>
      </div>
      <div className="flex justify-center items-center  p-20">
        <Carousel className="w-[50%] max-md:w-full  py-6 ">
          <CarouselContent className="">
            <CarouselItem className="text-white">
              <div className="w-full  flex  justify-center items-center flex-col gap-6">
                <div className="flex flex-col justify-center items-center gap-2 ">
                  <div className="relative">
                    <img
                      className="rounded-full  h-[120px] bg-[#FFD43B]   p-1"
                      src={is}
                      alt=""
                    />
                    <img
                      className="w-[45px] h-[35px] absolute left-[80%] bottom-[42px]  rounded-lg"
                      src={cmr}
                      alt=""
                    />
                  </div>
                  <div className="gap-2 flex flex-col justify-center items-center ">
                    <p>ismael issan</p>
                    <p className="font-semibold text-[#FFD43B] text-center">
                      CEO & Founder at IS Dev Experts S.A.S
                    </p>
                    <p className="flex justify-center items-center text-2xl">
                      <a
                        href="https://www.linkedin.com/in/ismaelissan/"
                        target="_blanck"
                      >
                        <GrLinkedin />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  Phanuel est un développeur web et mobile talentueux, dont les
                  compétences en React et React Native ont grandement contribué
                  au succès de nos projets. Toujours professionnel, rigoureux et
                  collaboratif, il se distingue par son aptitude à livrer des
                  solutions efficaces et adaptées aux besoins. Je le recommande
                  vivement à toute entreprise cherchant un développeur compétent
                  et passionné.
                </div>
                <div></div>
              </div>
            </CarouselItem>
            <CarouselItem className="text-white">
              <div className="w-full  flex  justify-center items-center flex-col gap-6">
                <div className="flex flex-col justify-center items-center gap-2 ">
                  <div className="relative">
                    <img
                      className="rounded-full  h-[120px] bg-[#FFD43B]   p-1"
                      src={anders}
                      alt="profile"
                    />
                    <img
                      className="w-[40px] h-[30px] absolute left-[80%] bottom-[42px]  rounded-lg"
                      src={nov}
                      alt="profile"
                    />
                  </div>
                  <div className="gap-2 flex flex-col justify-center items-center ">
                    <p>Anders Palmer</p>
                    <p className="font-semibold text-[#FFD43B] text-center capitalize">
                      cofondateur de{" "}
                      <a
                        href="https://alibia.tech/"
                        target="_blanck"
                        className="underline"
                      >
                        Alibia officiel
                      </a>
                    </p>
                    <p className="flex justify-center items-center text-2xl">
                      <a
                        href="https://www.facebook.com/familien.holmen/about"
                        target="_blanck"
                      >
                        <FaSquareFacebook />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  Phanuel a développé mon site e-commerce avec professionnalisme
                  et expertise. Sa maîtrise de Next.js et son souci du détail
                  ont permis de créer une plateforme moderne et performante. Je
                  le recommande vivement pour ses compétences et son sérieux.
                </div>
                <div></div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
