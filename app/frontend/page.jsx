import Image from "next/image";
import Link from "next/link";
import frontendImg from "/public/assets/Projects/frontend.png";
import { RiRadioButtonFill } from "react-icons/ri";

const frontend = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <Image
          className="absolute z-1"
          layout="fill"
          style={{ objectFit: "cover" }}
          src={frontendImg}
          alt="/"
        />
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10">
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">FrontEnd UI</h2>
            <h3>React Js / Javascript / Bootstrap</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React Js, bootstrap css and is hosted on
            Netlfify. It is a simple landing page demonstrating implemention of
            bootstrap with react. The app does not have any functionalities
            apart from the visual UI. It is a simple prototype testing on my
            skills and abilities to develop a gooud UI and layout.
          </p>
          <a
            href="https://github.com/NjengaBen/frontendbootstrap"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://celebrated-blini-ebb9f6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default frontend;
