//Tranduction dependances
import { useTranslation } from "react-i18next";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
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
                <div className=" flex flex-col justify-center items-center gap-2">
                  <img
                    className="rounded-full w-[100px] h-[100px]"
                    src={is}
                    alt=""
                  />
                  <div className="gap-2 flex flex-col justify-center items-center">
                    <p>ismael issan</p>
                    <p className="font-semibold text-[#FFD43B]">
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
                  La plupart des bases de données, des fonctions de traitement
                  de texte et des protocoles de communication par transfert de
                  données utilise par défaut l'alphabet anglais. Le test
                  d'applications logicielles avec uniquement du texte en
                  anglais, comme Lorem Ipsum, peut ne pas révéler d'éventuelles
                  divergences entre les différentes parties de l'application ou
                  garantir que la police peut afficher tous les caractères
                  nécessaires. De plus, dans le monde globalisé d'aujourd'hui,
                  votre application est susceptible d'être utilisée par des
                  personnes de différents pays et langues.
                </div>
                <div></div>
              </div>
            </CarouselItem>
            <CarouselItem className="text-white">
              <div className="w-full  flex  justify-center items-center flex-col gap-6">
                <div className=" flex flex-col justify-center items-center gap-2">
                  <img
                    className="rounded-full w-[100px] h-[100px]"
                    src="https://img.freepik.com/free-vector/bangkok-thailand-may-12-2023-caricature-tiger-woods-smilin_1308-135728.jpg?t=st=1731228524~exp=1731232124~hmac=0491259a60b984a03e4611799c108d3c9a37755ae1d00ac0ab4dae4cfd9d7da7&w=1380"
                    alt="photo profil"
                  />
                  <div className="gap-2 flex flex-col justify-center items-center">
                    <p>Hermanne Koffi</p>
                    <p className="font-semibold text-[#FFD43B]">
                      Propriétaire de l&apos;application{" "}
                      <span className="underline">
                        <a href="">Sweet</a>
                      </span>
                    </p>
                    <p className="flex justify-center gap-4 items-center text-2xl">
                      <a href="/" target="_blanck">
                        <GrLinkedin />
                      </a>
                      <a href="/" target="_blanck">
                        <FaGooglePlay />
                      </a>
                      <a href="/" target="_blanck">
                        <FaAppStoreIos />
                      </a>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  La plupart des bases de données, des fonctions de traitement
                  de texte et des protocoles de communication par transfert de
                  données utilise par défaut l&apos;alphabet anglais. Le test
                  d&apos;applications logicielles avec uniquement du texte en
                  anglais, comme Lorem Ipsum, peut ne pas révéler
                  d&apos;éventuelles divergences entre les différentes parties
                  de l&apos;application ou garantir que la police peut afficher
                  tous les caractères nécessaires. De plus, dans le monde
                  globalisé d&apos;aujourd&apos;hui, votre application est
                  susceptible d&apos;être utilisée par des personnes de
                  différents pays et langues.
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
