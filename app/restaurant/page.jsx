import Image from "next/image";
import Link from "next/link";
import restaurantImg from "/public/assets/Projects/restaurant-menu.png";
import { RiRadioButtonFill } from "react-icons/ri";

const restaurant = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={restaurantImg}
          alt="/"
        />
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10">
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Restaurant App</h2>
            <h3>React Js / Tailwind / Vite</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication was built using React and is styled with Tailwind
            CSS. It offers a seamless and intuitive experience for customers to
            explore menus, place orders, make reservations, and more. Powered by
            React.js, the app provides dynamic and interactive user interfaces,
            ensuring smooth navigation and real-time updates. The utilization of
            Tailwind CSS allows for rapid development and easy customization,
            resulting in a visually appealing and responsive design. With Vite
            as the build tool, the app achieves fast and efficient bundling and
            development, optimizing performance and reducing loading times.
            Combined, React.js, Tailwind CSS, and Vite create a powerful
            foundation for building a robust and user-friendly restaurant app.
          </p>
          <a
            href="https://github.com/NjengaBen/besteats"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://glistening-babka-6bd8ad.netlify.app/"
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
                <RiRadioButtonFill className="pr-1" /> Next.Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vite
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

export default restaurant;
