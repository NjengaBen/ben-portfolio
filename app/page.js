import Image from "next/image";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}
