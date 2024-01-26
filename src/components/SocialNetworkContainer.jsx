import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/orlando-vieira-neto-6b1428169/" },
  { name: "github", icon: <FaGithub />, link: "https://github.com/vieiranetoorlando" },
  { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/netovieiraagn/" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
