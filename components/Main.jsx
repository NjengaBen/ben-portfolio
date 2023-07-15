import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let&apos;s build something together
          </p>
          <h1
            className="py-4 text-gray-700
          "
          >
            Hi, I&apos;m <span className="text-teal-600">Ben</span>
          </h1>
          <h1
            className="py-2 text-gray-700
          "
          >
            A Front-End Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a front-end developer specializing in building (and
            occassionally designing) exceptional digital experiences. Currently,
            I&apos;m focused on building responsive front-end web applications
            while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between m-auto py-4 max-w-[330px]">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-teal-600 hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-teal-600 hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-teal-600 hover:scale-110 ease-in duration-300">
              <Link href="/#contact">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-teal-600 hover:scale-110 ease-in duration-300">
              <Link href="/resume">
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
