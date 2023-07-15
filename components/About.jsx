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
            I have spent the last 12 years in the fire service working as a
            professional firefighter & paramedic. I have always had a knack for
            technology and working with computers. In 2009 I started working
            with HTML & CSS to make some minor edits on a small business website
            that I was operating. What I thought was just a few small edits
            turned into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was ever more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the shopify platform. I am
            now spending my time building projects with React Js, Firebase, and
            learning new technologies.
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
