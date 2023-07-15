import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-teal-600">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            &#47;&#47; I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            I am a passionate web developer with over two and a half years of
            experience in the field. My journey began with HTML and CSS, where I
            discovered my love for creating visually appealing and functional
            websites. As I delved deeper into web development, I eagerly
            expanded my skill set and embraced new technologies. I have
            dedicated myself to mastering languages such as React, Node.js,
            Tailwind CSS, Next.js, MongoDB, and JavaScript. Through continuous
            learning and hands-on projects, I have gained a strong foundation in
            these technologies, enabling me to build dynamic and interactive web
            applications.
          </p>
          <p className="py-2 text-gray-600">
            Over the past year, I have embarked on a freelancing career, working
            on a diverse range of projects. This experience has allowed me to
            apply my knowledge and expertise to solve real-world challenges.
            From designing captivating user interfaces to implementing seamless
            backend functionality, I take pride in delivering high-quality
            websites that meet my clients&rsquo; unique needs. Through my
            freelance work, I have developed a keen eye for detail, effective
            project management skills, and the ability to collaborate with
            clients to bring their visions to life. I am driven by the
            satisfaction of creating impactful digital experiences and am
            constantly seeking new opportunities to push the boundaries of web
            development.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer hover:text-teal-600 hover:scale-95">
            <Link href="/#project">Check out some of my latest projects</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="/"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
