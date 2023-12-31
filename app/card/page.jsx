import Image from "next/image";
import Link from "next/link";
import cardImg from "/public/assets/Projects/card.png";
import { RiRadioButtonFill } from "react-icons/ri";

const card = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={cardImg}
          alt="/"
        />
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10">
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Interactive Card Form</h2>
            <h3>HTML / CSS / Javascript</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            The interactive card form is a user-friendly web component developed
            using HTML, CSS, and JavaScript. It allows users to input and
            validate credit card information in a visually engaging manner. The
            HTML structure defines the form elements, while CSS is applied to
            style and enhance the visual presentation of the form. JavaScript is
            utilized to handle user interactions, perform validation on the card
            details, and provide real-time feedback to ensure data accuracy. The
            combination of HTML, CSS, and JavaScript enables the creation of an
            interactive and responsive card form that enhances the user
            experience and simplifies the process of collecting and validating
            credit card information.
          </p>
          <a
            href="https://github.com/NjengaBen/InteractiveCardForm"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://peppy-custard-9bc21f.netlify.app/"
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
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
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

export default card;
