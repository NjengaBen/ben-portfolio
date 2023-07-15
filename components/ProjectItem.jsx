import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-teal-600 to-teal-500">
      <Image
        src={backgroundImg}
        alt="/"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React Js</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
