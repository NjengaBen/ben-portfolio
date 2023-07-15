import propertyImg from "/public/assets/Projects/property.jpg";
import cryptoImg from "/public/assets/Projects/crypto.jpg";
import twitchImg from "/public/assets/Projects/twitch.jpg";
import netflixImg from "/public/assets/Projects/netflix.jpg";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase tracking-widest text-teal-600 text-xl">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
