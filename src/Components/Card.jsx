import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { TbEyeShare } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

export function BookingCard({
  imgHeader,
  titleProject,
  desc,
  linkCode,
  linkDemo,
  icone1,
  icone2,
  icone3,
  icone4,
}) {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg rounded-lg">
      <CardHeader floated={false} color="blue-gray " className="">
        <img
          className=" rounded-xl shadow-xl "
          src={imgHeader}
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full  " />
      </CardHeader>
      <CardBody className="mx-6 mt-4">
        <div className="mb-3 flex items-center justify-between ">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {titleProject}
          </Typography>
          <span className="w-[130px] capitalize text-sm  text-green-500 font-bold ">
            projet en ligne
          </span>
        </div>
        <Typography color="gray">{desc}</Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="$129 per night">
            <div
              title="
Axios est une bibliothèque JavaScript utilisée pour effectuer des requêtes HTTP, principalement dans des applications front-end React, Vue ou Angular."
              className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
            >
              <img
                src={icone1}
                alt="logo"
                className=" object-cover h-[25px]  "
              ></img>
            </div>
          </Tooltip>
          <Tooltip content="Free wifi">
            <div
            
              title="
Axios est une bibliothèque JavaScript utilisée pour effectuer des requêtes HTTP, principalement dans des applications front-end React, Vue ou Angular."
              className="cursor-pointer rounded-full  border border-gray-900/5 bg-gray-600 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
            >
              <img
                src={icone2}
                alt="logo"
                className=" object-cover h-[25px]  "
              ></img>
            </div>
          </Tooltip>
          <Tooltip content="2 bedrooms">
            <div
              title="
Axios est une bibliothèque JavaScript utilisée pour effectuer des requêtes HTTP, principalement dans des applications front-end React, Vue ou Angular."
              className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
            >
              <img
                src={icone3}
                alt="logo"
                className=" object-cover h-[25px]  "
              ></img>
            </div>
          </Tooltip>
          <Tooltip content={`65" HDTV`}>
            <div
              title="
Axios est une bibliothèque JavaScript utilisée pour effectuer des requêtes HTTP, principalement dans des applications front-end React, Vue ou Angular."
              className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70"
            >
              <img
                src={icone4}
                alt="logo"
                className=" object-cover h-[25px]  "
              ></img>
            </div>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="m-4 rounded-lg flex justify-center items-center gap-4">
        <a href={linkCode} target="blanck" className="w-full">
          <Button
            size="lg"
            fullWidth={true}
            className="bg-[#271C1C] py-2 flex justify-center items-center hover:text-[#FFD43B] group-hover:text-yellow-400"
          >
            <FaGithub className="text-white text-2xl" />
            <span className="capitalize"> Voir le code</span>
          </Button>
        </a>
        <a href={linkDemo} target="blanck" className="w-full">
          <Button
            size="lg"
            fullWidth={true}
            className="bg-[#271C1C] py-2 flex justify-center items-center hover:text-[#FFD43B] group-hover:text-yellow-400"
          >
            <TbEyeShare className="text-white text-2xl  " />
            <span className=" capitalize"> Voir le projet</span>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
