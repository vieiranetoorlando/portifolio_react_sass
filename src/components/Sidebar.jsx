import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Battisti" />
      <p className="title">Computer Engineer / Full Stack Developer</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1PqsHYT-4NmdfougUwfJgkz7_9qCdOlMx/view?usp=sharing" className="btn"target="_blank" rel="noopener noreferrer">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
