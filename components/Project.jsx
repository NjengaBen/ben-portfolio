import frontendImg from "/public/assets/Projects/frontend.png";
import cardImg from "/public/assets/Projects/card.png";
import reactMaterialDashboardImg from "/public/assets/Projects/react-material-ui-dashboard.jpg";
import restaurantMenuImg from "/public/assets/Projects/restaurant-menu.jpg";
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
            title="Landing Page"
            backgroundImg={frontendImg}
            projectUrl="/frontend"
          />
          <ProjectItem
            title="Card UI"
            backgroundImg={cardImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Dashboard UI"
            backgroundImg={reactMaterialDashboardImg}
            projectUrl="/twitch"
          />
          <ProjectItem
            title="Restaurant App"
            backgroundImg={restaurantMenuImg}
            projectUrl="/netflix"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
