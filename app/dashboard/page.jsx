import Image from "next/image";
import Link from "next/link";
import reactMaterialDashboardImg from "/public/assets/Projects/react-material-ui-dashboard.png";
import { RiRadioButtonFill } from "react-icons/ri";

const dashboard = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <Image
          className="absolute z-2"
          layout="fill"
          objectFit="cover"
          src={reactMaterialDashboardImg}
          alt="/"
        />
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10">
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Dashboard UI</h2>
            <h3>React Js / Tailwind / Material UI</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in React JS and is hosted on Netlify. This
            UI uses material UI and Tailwind CSS to add styling and custom
            themes. It provides a comprehensive overview of key data and
            metrics, allowing users to visualize and analyze information in an
            intuitive manner. With React.js, the dashboard offers a highly
            interactive and responsive experience, while Material UI ensures a
            sleek and consistent design through its pre-built components,
            styling options, and theming capabilities. The combination of
            React.js and Material UI empowers the dashboard UI with powerful
            features, efficient development workflows, and a visually appealing
            presentation of data.
          </p>
          <a
            href="https://github.com/NjengaBen/ReactMaterialUITemplate"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://golden-blini-d63e09.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
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
                <RiRadioButtonFill className="pr-1" /> Material UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
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

export default dashboard;
