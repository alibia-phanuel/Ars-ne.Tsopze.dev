import { FaLaptopCode } from "react-icons/fa6";
import { MdInstallMobile } from "react-icons/md";
import alibiaimg from "../assets/ProjectWeb/images/11.png";
// import { TbDeviceAnalytics } from "react-icons/tb";
import { useTranslation } from "react-i18next";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { BookingCard } from "./Card";
import StripeIma from "../assets/ProjectWeb/images/13.png";
import node from "../assets/nodes.png";
import ts from "../assets/express.png";
import express from "../assets/typescript.png";
import stripe from "../assets/prisma-2.png";
//icone des  project
import Ga from "../assets/ga.png";
import meta from "../assets/meta.png";
import gpt from "../assets/gpt (2).png";
import sanity from "../assets/sanity.png";
import nextAuth from "../assets/nextAuths.png";
import three from "../assets/three.png";
import tailwind from "../assets/tailwind.png";
import wixS from "../assets/wix.png";
import shart from "../assets/shadcn.png";
import react from "../assets/React.webp";
import api from "../assets/RapidAPI.png";
import code from "../assets/code.png";
import Gsap from "../assets/GSAP.png";
import Material from "../assets/MT (1).png";
import formik from "../assets/formik.svg";
import netxt from "../assets/nextjs.png";
import mobile from "../assets/codemobile.png";
import css from "../assets/css.png";

import html from "../assets/html.png";
import vscode from "../assets/vscode.png";
import axios from "../assets/axios.png";
// image project mobile
import typescript from "../assets/typescript.png";
import mobilOne from "../assets/mobil/one.png";
import pke from "../assets/mobil/poemon.jpg";
import uberCones from "../assets/mobil/final.png";
import mobilTwo from "../assets/mobil/two.png";
import threes from "../assets/mobil/three.png";
import fours from "../assets/mobil/Four.png";
import expo from "../assets/expos.png";
import neonx from "../assets/neonX.png";
import clerk from "../assets/clerk.png";
import zustand from "../assets/Zustand.svg";
import rn from "../assets/R.N.png";
//images et videos des projets
import iohone from "../assets/ProjectWeb/images/1.png";
import plante from "../assets/ProjectWeb/images/3.png";
import mdernSite from "../assets/ProjectWeb/images/6.png";
import dashboard from "../assets/ProjectWeb/images/7.png";
import youtubeClone from "../assets/ProjectWeb/images/8.png";
import coofeHtml from "../assets/ProjectWeb/images/9.png";
import appJon from "../assets/ProjectWeb/images/4.png";
import agence from "../assets/ProjectWeb/images/2.png";
import startup from "../assets/ProjectWeb/images/12.png";
//last
// import netflixe from "../assets/ProjectWeb/images/2.png";
// import alibiaEcommerce from "../assets/ProjectWeb/images/2.png";
//image et video mobile projet
//Tranduction dependances

function ProjetFront() {
  const { t } = useTranslation();

  const { title9, title10 } = t("descriptiont");
  const data = [
    {
      label: "Web",
      icon: <FaLaptopCode className="text-[35px]" />,
      value: "Web",
      stripe: (
        <BookingCard
          imgHeader={StripeIma}
          titleProject="💳 Intégration Stripe Checkout avec Node.js, Express et TypeScript"
          desc="Ce projet intègre Stripe Checkout avec Node.js, Express et TypeScript pour des paiements en ligne sécurisés. Il permet de configurer les paiements, gérer les sessions et suivre les transactions via webhooks. Idéal pour l'e-commerce, il assure une intégration fluide et un code robuste. 🚀"
          icone1={node}
          icone2={express}
          icone3={ts}
          icone4={stripe}
          linkCode="https://github.com/alibia-phanuel/stripe-checkout-nodejs-starter"
          linkDemo="https://www.facebook.com/100049291370153/videos/1130484912084483/"
        />
      ),
      alibia: (
        <BookingCard
          imgHeader={alibiaimg}
          titleProject="Site E-commerce Alibia conçu avec Next.js 15 et Wix Studio"
          desc="Développement d’un site e-commerce moderne pour produits électroniques, alliant performance (Next.js 15, shadcn/ui), backend dynamique (API Wix Studios) et outils marketing (Google Analytics, Pixel Facebook, GPT). Fonctionnalités : navigation intuitive, commandes fluides, suivi analytique, et intégration WhatsApp pour simplifier les ventes."
          icone1={netxt}
          icone2={gpt}
          icone3={meta}
          icone4={Ga}
          icone5={shart}
          icone6={wixS}
          linkCode="https://github.com/alibia-phanuel/IphoneClone3d"
          linkDemo="https://alibia.tech/"
        />
      ),
      startup: (
        <BookingCard
          imgHeader={startup}
          titleProject="Développement d'une Plateforme de Pitch de Startups avec Next.js 15 et Sanity.io"
          desc="Dans ma formation sur Next.js 15, j'ai développé une plateforme de pitching pour startups, intégrant une recherche pour les visiteurs et un back-end basé sur Sanity.io pour une gestion de contenu flexible. J'ai utilisé shadcn/ui pour une interface moderne et NextAuth (GitHub) pour une authentification fluide et sécurisée, mettant en œuvre des concepts avancés de Next.js et une solution de gestion de contenu moderne."
          icone1={netxt}
          icone2={shart}
          icone3={nextAuth}
          icone4={sanity}
          linkCode="https://github.com/alibia-phanuel/nextjs15ProjectWeb/tree/main/start-up-app-with-nextjs15"
          linkDemo="https://nextjs15-project-web.vercel.app/"
        />
      ),
      iphoneClone3d: (
        <BookingCard
          imgHeader={iohone}
          titleProject="Clonage du site de présentation de l'iPhone 15 Pro"
          desc="J'ai cloné le site officiel de l'iPhone 15 Pro en utilisant React, Three.js et GSAP, mettant en valeur mes compétences en développement interactif et en animations 3D. Ce projet montre ma maîtrise des interfaces complexes avec des éléments 3D immersifs et des animations fluides."
          icone1={tailwind}
          icone2={react}
          icone3={three}
          icone4={Gsap}
          linkCode="https://github.com/alibia-phanuel/IphoneClone3d"
          linkDemo="https://iphone-clone3d.vercel.app/"
        />
      ),
      youtubeClone: (
        <BookingCard
          imgHeader={youtubeClone}
          titleProject="Clonage du site de youtube"
          desc="J'ai cloné le site de YouTube avec React JS, Axios et RapidAPI, mettant en avant mes compétences en intégration d'API et en gestion des données. Ce projet démontre ma capacité à recréer des fonctionnalités comme la recherche et la lecture de vidéos, tout en assurant une interface réactive et performante."
          icone1={react}
          icone2={Material}
          icone3={axios}
          icone4={api}
          linkCode="https://github.com/alibia-phanuel/YoutubeCloneUI5"
          linkDemo="https://youtube-clone-ui-5.vercel.app/"
        />
      ),
      dashbordJoneEasy: (
        <BookingCard
          imgHeader={dashboard}
          titleProject="Développement d'un Dashboard d'Entreprise"
          desc="Conception d'un dashboard d'entreprise avec React JS et Tailwind CSS, optimisé pour une gestion efficace des informations, des performances élevées et une personnalisation facile, tout en étant évolutif et simple à mettre à jour.Le dashboard permet une navigation intuitive ."
          icone1={tailwind}
          icone2={react}
          icone3={formik}
          icone4={code}
          linkCode="https://github.com/alibia-phanuel/Dashbord-JonEasy"
          linkDemo="https://dashbord-jon-easy.vercel.app/"
        />
      ),

      modernUiuXin: (
        <BookingCard
          imgHeader={mdernSite}
          titleProject="site web moderne"
          desc="J'ai développé un site web moderne avec React JS et Tailwind CSS, mettant en valeur une interface utilisateur dynamique, un design responsive et une performance optimisée. Ce projet illustre ma capacité à créer des interfaces interactives tout en assurant une expérience utilisateur fluide. J'ai également utilisé Tailwind CSS ,SASS.."
          icone1={tailwind}
          icone2={react}
          icone3={vscode}
          icone4={code}
          linkCode="https://github.com/alibia-phanuel/ModernUIUXinReactSwithTailwind"
          linkDemo="https://modern-uiu-xin-react-swith-tailwind.vercel.app/"
        />
      ),
      isdevProject: (
        <BookingCard
          imgHeader={plante}
          titleProject="site e-commerce monoproduit de plantes"
          desc="J'ai conçu et développé un site e-commerce monoproduit dédié à la vente de plantes en utilisant React JS et Tailwind CSS. Ce projet met en avant ma capacité à créer une boutique en ligne moderne et épurée, optimisée pour les ventes d'un produit spécifique. Grâce à React JS, j'ai pu intégrer une interface réactive et intuitive, tandis que Tailwind CSS a permis de concevoir un design minimaliste et entièrement responsive. Ce projet illustre mon savoir-faire en développement d'applications e-commerce axées sur une expérience utilisateur simple et efficace, adaptée à tous types d'appareils."
          icone1={tailwind}
          icone2={react}
          icone3={vscode}
          icone4={three}
          icone5={three}
          linkCode="https://www.youtube.com/watch?v=v8SNlvR86xc&list=RDWcIcVapfqXw&index=9"
          linkDemo="https://grafikart.fr/"
        />
      ),
      siteDePlante: (
        <BookingCard
          imgHeader={plante}
          titleProject="Site e-commerce monoproduit de plantes"
          desc="J'ai développé un site e-commerce monoproduit pour la vente de plantes en utilisant React JS et Tailwind CSS. Ce projet montre ma capacité à créer une boutique en ligne moderne, avec une interface réactive et un design minimaliste et responsive, optimisé pour la vente d'un produit spécifique."
          icone1={tailwind}
          icone2={react}
          icone3={vscode}
          icone4={code}
          linkCode="https://github.com/alibia-phanuel/site-de-plante"
          linkDemo="https://site-de-plante.vercel.app/"
        />
      ),
      agence: (
        <BookingCard
          imgHeader={agence}
          titleProject="Site d'Agence Business "
          desc="J'ai développé un site d'agence professionnelle en utilisant React JS et Tailwind CSS pour offrir une navigation fluide, un design moderne et une expérience utilisateur optimale sur tous les appareils. L'interface intuitive met en valeur les informations clés, tandis que les performances sont optimisées pour un chargement rapide. Ce projet démontre mon expertise dans la création de solutions web sur mesure pour les entreprises. "
          icone1={tailwind}
          icone2={react}
          icone3={vscode}
          icone4={code}
          linkCode="https://github.com/alibia-phanuel/folio-4"
          linkDemo="https://folio-4.vercel.app/"
        />
      ),
      appJon: (
        <BookingCard
          imgHeader={appJon}
          titleProject="Site de Promotion d'App Mobile avec Next.js"
          desc="Développement d'un site multilingue conçu pour inciter les utilisateurs à télécharger une application mobile. Utilisation de Next.js pour une performance optimale et Tailwind CSS pour une interface moderne et réactive."
          icone1={vscode}
          icone2={tailwind}
          icone3={netxt}
          icone4={code}
          linkCode="https://github.com/alibia-phanuel/isdevProject"
          linkDemo="https://isdev-project.vercel.app/fr"
        />
      ),
      coofeHtml: (
        <BookingCard
          imgHeader={coofeHtml}
          titleProject="Site de Café avec HTML/CSS"
          desc="Conception d'un site web pour un café, développé avec HTML pour la structure, CSS pour le style,  Le site offre un design attrayant et moderne, adapté aux besoins du client. Le projet est entièrement réactif, offrant une navigation fluide sur tous les appareils."
          icone1={html}
          icone2={css}
          icone3={vscode}
          icone4={code}
          linkCode="https://github.com/alibia-phanuel/site-coffe"
          linkDemo="https://site-coffe.vercel.app/"
        />
      ),
    },
    {
      label: "Mobile",
      icon: <MdInstallMobile className="text-[35px]" />,
      value: "Mobile",
      mobilbeOne: (
        <BookingCard
          imgHeader={mobilOne}
          titleProject="Découverte de React Native et Expo"
          desc="Dans le cadre de ma formation en développement mobile, j'ai développé ma première application avec React Native et Expo. En utilisant la commande `npx create-expo-app@latest`, j'ai pu configurer mon projet rapidement et découvrir les fonctionnalités puissantes de cet environnement. Cette expérience m'a permis d'acquérir une solide compréhension des bases de la création d'applications mobiles modernes."
          icone1={typescript}
          icone2={expo}
          icone3={rn}
          icone4={mobile}
          linkCode="https://github.com/alibia-phanuel/firstReactNativeProjetApp"
          linkDemo="https://github.com/alibia-phanuel/firstReactNativeProjetApp"
        />
      ),
      mobilbeTwo: (
        <BookingCard
          imgHeader={mobilTwo}
          titleProject="Ma deuxième application mobile"
          desc="Dans le cadre de ma formation, j'ai développé ma deuxième application mobile avec React Native, Expo et TypeScript. Ce projet m'a permis d'approfondir mes compétences en organisation et stylisation des composants, d'améliorer la structure de mon code, et d'offrir une expérience utilisateur fluide. J'ai également renforcé ma maîtrise de la gestion des composants dans un environnement mobile, tout en consolidant mes bases en TypeScript.."
          icone1={typescript}
          icone2={expo}
          icone3={rn}
          icone4={mobile}
          linkCode="https://github.com/alibia-phanuel/ReactNativeStyleProjetAppTwo"
          linkDemo="https://github.com/alibia-phanuel/ReactNativeStyleProjetAppTwo"
        />
      ),
      mobilThree: (
        <BookingCard
          imgHeader={threes}
          titleProject="Application Mobile : Changement de Couleur aléatoire"
          desc="Dans le cadre de ma formation en développement mobile, j'ai réalisé une application React Native qui change la couleur d'arrière-plan à chaque clic sur un bouton, en utilisant StyleSheet, Text, TouchableOpacity et le Hook useState. Ce projet illustre mes compétences en gestion de l'état et organisation des composants pour créer des interfaces dynamiques et interactives."
          icone1={typescript}
          icone2={expo}
          icone3={rn}
          icone4={mobile}
          linkCode="https://github.com/alibia-phanuel/ReactNativePressMeAppThee"
          linkDemo="https://github.com/alibia-phanuel/ReactNativePressMeAppThee"
        />
      ),
      mobilFor: (
        <BookingCard
          imgHeader={fours}
          titleProject="Application de lancer de dés"
          desc="Cette application mobile, développée avec React Native, Expo et TypeScript, simule un lancer de dés avec des résultats aléatoires. Elle utilise des composants comme StyleSheet, View, Text, Image et Pressable, et gère la randomisation via le hook useState. L'interface utilisateur est fluide et réactive, idéale pour un usage numérique de lancer de dés."
          icone1={typescript}
          icone2={expo}
          icone3={rn}
          icone4={mobile}
          linkCode="https://github.com/alibia-phanuel/ReactNativeStyleProjetAppTwo"
          linkDemo="https://github.com/alibia-phanuel/ReactNativeStyleProjetAppTwo"
        />
      ),
      mobilFive: (
        <BookingCard
          imgHeader={pke}
          titleProject="Application pokemon via API"
          desc="Dans le cadre de mon apprentissage de React Native, j'ai développé une application Pokédex connectée à l'API PokéAPI. Elle affiche une liste de Pokémon avec recherche par nom ou numéro. Ce projet a renforcé mes compétences en gestion d'états, consommation d'API REST et optimisation des performances."
          icone1={typescript}
          icone2={expo}
          icone3={rn}
          icone4={mobile}
          linkCode="https://github.com/alibia-phanuel/PokeMonApp"
          linkDemo=" https://expo.dev/accounts/phanuel/projects/PokeMonApp/updates/55a3db02-b47a-4b1f-968c-cbafe70286cc"
        />
      ),
      mobilSix: (
        <BookingCard
          imgHeader={uberCones}
          titleProject="Création des Interfaces Essentielles de l'Application Uber"
          desc="Dans le cadre de mon apprentissage de React Native, j'ai développé une application Pokédex connectée à l'API PokéAPI. Elle affiche une liste de Pokémon avec recherche par nom ou numéro. Ce projet a renforcé mes compétences en gestion d'états, consommation d'API REST et optimisation des performances."
          icone1={typescript}
          icone2={expo}
          icone3={rn}
          icone4={clerk}
          icone5={neonx}
          icone6={zustand}
          linkCode="https://github.com/alibia-phanuel/UberCloneReactNative"
          linkDemo="https://expo.dev/accounts/phanuel/projects/UberCloneReactNative/updates/44163dec-f869-40fd-8369-2134ef5c9496"
        />
      ),
    },

    // {
    //   label: "Marketing & Communication",
    //   icon: <TbDeviceAnalytics className="text-[35px]" />,
    //   value: "Marketing & Communication",
    //   desc: `We're not always in the position that we want to be at.
    //   We're constantly growing. We're constantly making mistakes. We're
    //   constantly trying to express ourselves and actualize our dreams.`,
    // },
  ];

  return (
    <div className="bg-no-repeat  bg-fixed  bg-center bg-cover  w-[100%] bg-[#313552] py-[100px]">
      <div className="w-full font-[roboto] h-full  flex justify-center items-center ">
        <div className=" w-full container  flex pt-6  justify-center items-center flex-col relative bg-[#271c1c]  rounded-lg">
          <div className="flex flex-col text-center items-center">
            <h1 className="text-center text-white  text-2xl ">{title9}</h1>
            <p className="mt-5 text-white font-semibold">{title10}</p>
          </div>
          {/**filter */}
          <Tabs
            id="custom-animation"
            value="html"
            className="rounded-lg py-[100px] pt-[100px] pb-[100px] w-full"
          >
            <TabsHeader className="text-[#313552] mx-[7%] mt-4 mb-8 bg-[#FFD43B] ">
              {data.map(({ label, value, icon }) => (
                <Tab key={value} value={value} className="font-bold ">
                  <div className="flex justify-center items-center gap-4">
                    {icon}
                    {label}
                  </div>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(
                ({
                  value,
                  iphoneClone3d,
                  youtubeClone,
                  modernUiuXin,
                  siteDePlante,
                  dashbordJoneEasy,
                  agence,
                  coofeHtml,
                  mobilFor,
                  mobilSix,
                  mobilFive,
                  mobilThree,
                  mobilbeOne,
                  mobilbeTwo,
                  appJon,
                  startup,
                  alibia,
                  stripe,
                }) => (
                  <TabPanel
                    key={value}
                    value={value}
                    className="flex  justify-center flex-wrap gap-8 items-center"
                  >
                    {stripe}
                    {alibia}
                    {startup}
                    {iphoneClone3d}
                    {youtubeClone}
                    {appJon}
                    {dashbordJoneEasy}
                    {modernUiuXin}
                    {agence}
                    {siteDePlante}
                    {coofeHtml}
                    {mobilSix}
                    {mobilFive}
                    {mobilFor}
                    {mobilThree}
                    {mobilbeTwo}
                    {mobilbeOne}
                  </TabPanel>
                )
              )}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProjetFront;
