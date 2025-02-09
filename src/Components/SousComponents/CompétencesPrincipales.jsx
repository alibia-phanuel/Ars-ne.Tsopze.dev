import tailwind from "../../assets/tailwind.png";

// import Mt from "../../assets/MT (1).png";
// import redux from "../../assets/Redux.png";
// import scripe from "../../assets/stripe.png";
// import NEON from "../../assets/NEON.png";
// import sentry from "../../assets/Sentry.png";

import shadcn from "../../assets/shadcn.png";
import scripe from "../../assets/postgresql.png";
import clerk from "../../assets/prisma-2.png";
import library from "../../assets/testing.png";
import next from "../../assets/nextjs.png";
import express from "../../assets/express.png";
import sql from "../../assets/sql.png";
import jest from "../../assets/Jest.png";
import zustand from "../../assets/Zustand.svg";
import meta from "../../assets/meta.png";
import three from "../../assets/three.png";
import typescript from "../../assets/typescript.png";
import { motion } from "framer-motion";
import Rn from "../../assets/R.N.png";
import expo from "../../assets/expo.png";
import win from "../../assets/wix.jpg";
import sass from "../../assets/GSAP.png";
import { FcApproval } from "react-icons/fc";
import { FaRegStarHalfStroke } from "react-icons/fa6";
//Tranduction dependances
import { useTranslation } from "react-i18next";
import { MdOutlineStar } from "react-icons/md";
function CompétencesPrincipales() {
  const analytics =
    "m512.216 393.834-2.048.012c-64.62 3.65-115.64 56.942-115.64 122.15 0 1 .01 1.994.035 2.986l-.003-.147v319.292c0 86.656 38.13 139.26 93.993 150.477 7.11 1.508 15.278 2.372 23.648 2.372 65.763 0 119.074-53.31 119.074-119.073v-.356.018-358.237-.218c0-65.797-53.278-119.15-119.047-119.275h-.012zm-314.82 360.288c-65.65 0-118.87 53.22-118.87 118.87s53.22 118.87 118.87 118.87 118.87-53.22 118.87-118.87c-.003-65.65-53.22-118.868-118.87-118.87zm748.08-602.09v720.366c0 65.875-53.402 119.278-119.278 119.278-4.96 0-9.848-.303-14.65-.89l.577.057c-59.42-9.038-104.425-59.77-104.425-121.013 0-1.038.013-2.073.04-3.105l-.004.153v-709.96c-.022-.868-.035-1.89-.035-2.915 0-61.318 45.113-112.1 103.96-120.965l.674-.084c4.16-.515 8.978-.808 13.863-.808 65.877 0 119.28 53.404 119.28 119.28v.635-.032z";
  const { t } = useTranslation();
  const { Sectitle1, Sectitle2, Sectitle3 } = t("skills");
  const { title1, title2, title3 } = t("descriptiont");

  return (
    <div>
      <div className="my-20 ">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="my-10 font-[roboto] text-[#FFD43B] text-[30px] capitalize  max-md:text-center"
        >
          {Sectitle1}
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="skils font-[roboto] flex gap-4   max-md:justify-center max-md:flex-wrap  justify-between"
        >
          <div className="w-[380px] py-4 px-4 flex gap-5 flex-col  justify-center rounded-lg hover:translate-y-[-25px] transition-all max-w-full border border-[#FFD43B] hover:border-[#ffffff] cursor-pointer text-white bg-[#221C27] shadow-lg ">
            <div className="titre  font-bold text-[20px] ">
              <div className="flex  items-center justify-between">
                <p>
                  <span className="flex items-center gap-2">
                    Language & framework <FcApproval />
                  </span>

                  <span className="text-[#FFD43B] flex items-center gap-2">
                    Front-End <MdOutlineStar /> <MdOutlineStar />{" "}
                    <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />
                  </span>
                </p>
              </div>
            </div>
            <div className="icones-language  flex items-center gap-4 flex-wrap">
              <div
                title="est un langage qui peut être vu comme une version du JavaScript."
                className="w-[40px] h-[40px] flex justify-center items-center"
              >
                <img
                  src={typescript}
                  alt="logo"
                  className="w-full object-cover rounded-lg"
                ></img>
              </div>

              <div
                title="React est une bibliothèque JavaScript qui permet de simplifier la création d’interface"
                className="text-[35px] text-[#53C1DE]"
              >
                <i className="fa-brands fa-react"></i>
              </div>
              <div
                title="Next. js est un framework qui permet aux développeurs d'écrire facilement des applications universelles avec React de manière transparente, facile et efficace."
                className="w-[40px] h-[40px] flex justify-center items-center bg-white p-2 rounded-lg"
              >
                <img
                  src={next}
                  alt="logo"
                  className="w-full object-cover "
                ></img>
              </div>

              <div
                title="est une bibliothèque JavaScript pour créer des scènes 3D dans un navigateur web. "
                className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-lg"
              >
                <img
                  src={three}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>
              <div
                title="GSAP (GreenSock Animation Platform) est une bibliothèque JavaScript très puissante et flexible qui permet de créer des animations complexes sur des pages web."
                className="w-[40px] h-[40px] flex justify-center items-center bg-white p-2 rounded-lg"
              >
                <img
                  src={sass}
                  alt="logo"
                  className="w-full object-cover "
                ></img>
              </div>
              <div
                title="Tailwind CSS est un framework CSS open source."
                className="w-[40px] h-[40px] flex justify-center items-center"
              >
                <img
                  src={tailwind}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>

              <div
                title="Shadcn est une bibliothèque de composants pour React. "
                className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-lg  p-2"
              >
                <img
                  src={shadcn}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>
              {/**new */}

              <div
                title="Jest est un framework de test JavaScript open-source, créé par Facebook. Il est principalement utilisé pour tester des applications JavaScript, notamment celles développées avec des bibliothèques et frameworks comme React, Node.js, et autres technologies modernes."
                className="w-[40px] bg-white rounded-lg p-2 h-[40px] flex justify-center items-center"
              >
                <img
                  src={jest}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>
              <div
                title="Jest est un framework de test JavaScript open-source, créé par Facebook. Il est principalement utilisé pour tester des applications JavaScript, notamment celles développées avec des bibliothèques et frameworks comme React, Node.js, et autres technologies modernes."
                className="w-[40px] bg-white rounded-lg p-2 h-[40px] flex justify-center items-center"
              >
                <img
                  src={library}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>
              <div
                title="Neon est une plateforme de bases de données PostgreSQL cloud-native."
                className="w-[120px]  h-[50px] gap-2 flex  bg-[#191919] justify-center items-center  p-2 rounded-lg"
              >
                <img
                  src={zustand}
                  alt="logo"
                  className="w-[30px] h-[35px] object-cover "
                ></img>
                <p>zustand</p>
              </div>
              {/**
                <div
                title="Redux est une bibliothèque de gestion d'état prédictive utilisée principalement avec des applications JavaScript, en particulier celles créées avec React."
                className="w-[40px] h-[40px] flex justify-center items-center bg-white p-2 rounded-lg"
              >
                <img
                  src={redux}
                  alt="logo"
                  className="w-full object-cover "
                ></img>
              </div>
  */}
            </div>
            <div className="description">{title1}</div>
          </div>

          <div className="w-[380px] py-4 px-4 flex gap-10 flex-col  justify-center  rounded-lg hover:translate-y-[-25px] transition-all max-w-full border border-[#FFD43B] hover:border-[#ffffff] cursor-pointer text-white bg-[#221C27] shadow-lg ">
            <div className="titre  font-bold text-[20px] ">
              <span className="flex items-center gap-2">
                Language & framework <FcApproval />
              </span>

              <span className="text-[#FFD43B] flex items-center gap-2">
                Mobile
                <MdOutlineStar /> <MdOutlineStar /> <MdOutlineStar />{" "}
                <FaRegStarHalfStroke />
              </span>
            </div>
            <div className="icones-language  flex items-center gap-4 flex-wrap">
              <div
                title="est un langage qui peut être vu comme une version du JavaScript."
                className="w-[50px]  h-[50px] flex justify-center items-center"
              >
                <img
                  src={typescript}
                  alt="logo"
                  className="w-full object-cover rounded-lg"
                ></img>
              </div>
              {/**new */}
              <div
                title="React Native est un framework open-source développé par Facebook qui permet de créer des applications mobiles en utilisant JavaScript et React."
                className=" flex justify-center bg-white items-center w-[60px]  h-[50px]  p-2 rounded-lg"
              >
                <img src={Rn} alt="logo" className="object-cover w-full " />
              </div>
              <div
                title="Expo est une plateforme et un ensemble d'outils qui facilitent le développement d'applications mobiles avec React Native."
                className="w-[60px]  h-[50px] bg-[#0F291E] flex justify-center items-center  p-2 rounded-lg"
              >
                <img
                  src={expo}
                  alt="logo"
                  className="w-full object-cover  "
                ></img>
              </div>

              {/**
                <div
                title="Neon est une plateforme de bases de données PostgreSQL cloud-native."
                className="w-[40px]  h-[50px]  flex bg-[#191919] justify-center items-center  p-2 rounded-lg"
              >
                <img
                  src={NEON}
                  alt="logo"
                  className="w-[40px]   object-cover "
                ></img>
              </div> */}
              <div
                title="Neon est une plateforme de bases de données PostgreSQL cloud-native."
                className="w-[120px]  h-[50px] gap-2 flex  bg-[#191919] justify-center items-center  p-2 rounded-lg"
              >
                <img
                  src={zustand}
                  alt="logo"
                  className="w-[30px] h-[35px] object-cover "
                ></img>
                <p>zustand</p>
              </div>
            </div>
            <div className="description">{title2}</div>
          </div>

          <div className="w-[380px] py-4 px-4 flex gap-2 flex-col justify-between  rounded-lg hover:translate-y-[-25px] transition-all max-w-full border border-[#FFD43B] hover:border-[#ffffff] cursor-pointer text-white bg-[#221C27] shadow-lg ">
            <div className="titre my-2 font-bold text-[22px]">
              {Sectitle2}
              <span className="text-[#FFD43B] flex items-center gap-2">
                {Sectitle3} <MdOutlineStar /> <MdOutlineStar />{" "}
                <FaRegStarHalfStroke />
              </span>
            </div>

            <div className="icones-language  flex items-center gap-2 flex-wrap">
              <div
                title="Node.js est une plateforme de développement Javascript"
                className="text-[40px] text-[#69A15C]"
              >
                <i className="fa-brands fa-node"></i>
              </div>
              <div
                title="est une bibliothèque JavaScript pour créer des scènes 3D dans un navigateur web. "
                className="w-[40px] p-1 h-[40px] flex justify-center items-center bg-white rounded-lg"
              >
                <img
                  src={express}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>
              <div
                title="SQL, pour Structured Query Language, est un langage qui permet d'interroger une base de données relationnelle afin de pouvoir modifier ou récupérer des informations."
                className="w-[40px] h-[40px] flex justify-center items-center"
              >
                <img src={sql} alt="logo" className="w-full object-cover"></img>
              </div>
              <div
                title="Postman est un logiciel qui va vous permettre d’appeler / tester une API.."
                className="w-[40px] h-[40px] flex justify-center items-center"
              >
                <svg
                  height="264"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 264"
                  width="256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none">
                    <path
                      d="m45.9853445 256.455035-45.9853445 1.59526 23.5727668-23.967452 22.4144135 22.374027z"
                      fill="#f15a24"
                    />
                    <path
                      d="m254.580742 137.579706c-8.543545 66.613581-69.475503 113.676506-136.07807 105.123783-66.6135802-8.54538-113.6765055-69.475503-105.1329609-136.083576 8.5490519-66.6117454 69.46816-113.68017787 136.0872479-105.12561877 66.609909 8.54170887 113.683849 69.47733867 105.123783 136.08357677"
                      fill="#f15a24"
                    />
                    <path
                      d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288"
                      fill="#999"
                    />
                    <path
                      d="m164.981832 87.5318642c7.990986 8.4939796.104637 28.5770008.104637 28.5770008s-7.794562 28.393426-52.421457 65.212909l-8.330599-8.176396 56.651008-57.899312 1.094102-1.477773c1.507145-2.456223 2.755449-26.4016456 2.902309-26.2364288z"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.918"
                    />
                    <path
                      d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319"
                      fill="#666"
                    />
                    <path
                      d="m92.099191 161.108415 72.763317-73.7858254c3.693514 4.3855883 4.479212 9.110789 3.407138 15.8424564-.721447 4.662785-8.774848 13.981013-8.774848 13.981013l-55.160385 55.999319"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.201"
                    />
                    <path
                      d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866"
                      fill="#ff931e"
                    />
                    <path
                      d="m164.981832 87.583265-72.882641 73.526986.1468594-.143188-.0275361.011015-18.0820616-17.817715c37.7079823-46.9050514 62.0884763-55.6505277 62.0884763-55.6505277s15.871828-6.1956303 27.194686-1.3878212c.870142.4662786 1.248305.7342969 1.560381 1.4630866z"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.918"
                    />
                    <path
                      d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977"
                      fill="#999"
                    />
                    <path
                      d="m112.665012 181.319938c-17.388151 14.320626-39.6410192 36.815812-69.888545 52.505901l6.7279955 28.762411-28.5164208-28.086858 71.1093136-73.392977"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.918"
                    />
                    <path
                      d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z"
                      fill="#f15a24"
                    />
                    <path
                      d="m74.6229244 143.400845 17.6653481 17.59559-40.810387 8.839099 22.7540258-26.752272.3928488.317583z"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.918"
                    />
                    <path
                      d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984"
                      fill="#999"
                    />
                    <path
                      d="m158.024368 66.2464323c-1.73294 15.6405243 9.527503 29.7206678 25.168027 31.4646229 15.627674 1.7366123 29.720668-9.5330097 31.464623-25.1680269 1.738448-15.6350171-9.540352-29.7298465-25.173534-31.4682944-15.64236-1.7274335-29.724339 9.5275025-31.459116 25.1716984z"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.918"
                    />
                    <path
                      d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623"
                      fill="#666"
                    />
                    <path
                      d="m210.565149 85.1380562c5.25573-7.67891 4.98404-19.1669853 3.928488-22.5704515-1.294198-4.167135-4.190999-10.9446956-9.242962-14.467485l-26.713722 24.6062897s20.530942 22.0582795 21.065143 22.1317091c.222125.0257004 6.16993-2.6985411 10.963053-9.7000623zm-5.38974-19.2752941s2.568204 6.3076106-.690239 11.2145497z"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.918"
                    />
                    <path
                      d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597"
                      fill="#666"
                    />
                    <path
                      d="m104.964073 173.156392-29.4820212 5.246552 17.7956858-18.489597m-17.9700814-16.384 37.4803508 35.273788"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.918"
                    />
                  </g>
                </svg>
              </div>

              <div
                title="GitHub est un site web et un service de cloud"
                className="text-[40px] text-[#1572B6]"
              >
                <i className="fa-brands fa-github"></i>
              </div>
              <div
                title="Git est un outil qui va vous permettre de 'versionner' votre projet"
                className="text-[40px] text-[#E44D26]"
              >
                <i className="fa-brands fa-git-alt"></i>
              </div>
              <div
                title="Stripe est une plateforme de paiement en ligne qui permet aux entreprises d'accepter des paiements par carte bancaire, virement, Apple Pay, Google Pay, et bien d'autres moyens."
                className="w-[50px] h-[35px] p-1 flex justify-center items-center bg-white rounded-lg "
              >
                <img
                  src={clerk}
                  alt="logo"
                  className="w-full object-cover rounded-lg"
                ></img>
              </div>

              <div
                title="MySQL est un système de gestion de base de données relationnelle (SGBDR) open-source. Il permet de stocker, gérer et récupérer des données de manière efficace en utilisant le langage SQL (Structured Query Language)."
                className=" flex justify-center items-center bg-white p-1 rounded-lg "
              >
                <img src={scripe} alt="logo" className=" h-[35px] "></img>
              </div>

              <div
                title="Meta fait référence à plusieurs concepts, mais dans le contexte technologique actuel, Meta est surtout connu comme le nouveau nom de la société mère de Facebook."
                className="w-[40px] bg-white rounded-lg h-[40px] text-[#F7DF1E]"
              >
                <img
                  src={meta}
                  alt="logo"
                  className="w-full object-cover"
                ></img>
              </div>

              <div
                title="
ChatGPT est un modèle de langage développé par OpenAI, basé sur l'architecture GPT (Generative Pre-trained Transformer)."
                className="text-[35px] text-[#FFFFFF] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#11773E"
                    d="M30.7,7.27L28.33,9.1c-1.605-2.067-4.068-3.209-6.697-3.092C17.313,6.2,14,9.953,14,14.277l0,9.143	l10.5,6.12l-1,1.72l-11.706-6.827C11.302,24.146,11,23.62,11,23.051l0-8.687C11,8.1,16.129,2.79,22.39,3.007	C25.669,3.12,28.68,4.663,30.7,7.27z"
                  ></path>
                  <path
                    fill="#11773E"
                    d="M12.861,9.833l0.4,2.967c-2.592,0.357-4.813,1.919-6.026,4.254c-1.994,3.837-0.4,8.582,3.345,10.745	l7.918,4.571l10.55-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282-1.101,0.281-1.594-0.003l-7.523-4.343	C3.73,27.308,1.696,20.211,5.014,14.898C6.752,12.114,9.594,10.279,12.861,9.833z"
                  ></path>
                  <path
                    fill="#11773E"
                    d="M6.161,26.563l2.77,1.137c-0.987,2.423-0.745,5.128,0.671,7.346	c2.326,3.645,7.233,4.638,10.977,2.476l7.918-4.572l0.05-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569-0.307,1.094-0.8,1.379	l-7.523,4.343c-5.425,3.132-12.588,1.345-15.531-4.185C5.083,32.994,4.914,29.616,6.161,26.563z"
                  ></path>
                  <path
                    fill="#11773E"
                    d="M17.3,40.73l2.37-1.83c1.605,2.067,4.068,3.209,6.697,3.092C30.687,41.8,34,38.047,34,33.723l0-9.143	l-10.5-6.12l1-1.72l11.706,6.827C36.698,23.854,37,24.38,37,24.949l0,8.687c0,6.264-5.13,11.574-11.39,11.358	C22.331,44.88,19.32,43.337,17.3,40.73z"
                  ></path>
                  <path
                    fill="#11773E"
                    d="M35.139,38.167l-0.4-2.967c2.592-0.357,4.813-1.919,6.026-4.254c1.994-3.837,0.4-8.582-3.345-10.745	l-7.918-4.571l-10.55,6.033l-0.99-1.726l11.765-6.724c0.494-0.282,1.101-0.281,1.594,0.003l7.523,4.343	c5.425,3.132,7.459,10.229,4.141,15.543C41.248,35.886,38.406,37.721,35.139,38.167z"
                  ></path>
                  <path
                    fill="#11773E"
                    d="M41.839,21.437l-2.77-1.137c0.987-2.423,0.745-5.128-0.671-7.346	c-2.326-3.645-7.233-4.638-10.977-2.476l-7.918,4.572l-0.05,12.153l-1.99-0.006l0.059-13.551c0.002-0.569,0.307-1.094,0.8-1.379	l7.523-4.343c5.425-3.132,12.588-1.345,15.531,4.185C42.917,15.006,43.086,18.384,41.839,21.437z"
                  ></path>
                </svg>
              </div>

              <div
                title="Google Analytics est un service gratuit d'analyse d'audience d'un site Web ou d'applications "
                className="w-[40px] h-[40px] flex justify-center items-center"
              >
                <svg
                  viewBox="0 0 1024 1176.463"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ed750a"
                >
                  <path d={analytics} />
                </svg>
              </div>
              <div
                title="Wix Studio est une nouvelle plateforme de création de sites web développée par Wix, qui combine un éditeur visuel avancé et des outils de personnalisation flexibles. "
                className="rounded-lg p-2 bg-white flex justify-center items-center "
              >
                <img
                  src={win}
                  alt="logo"
                  className=" h-[20px] w-full object-cover"
                ></img>
              </div>
            </div>

            <div className="description">{title3}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CompétencesPrincipales;
