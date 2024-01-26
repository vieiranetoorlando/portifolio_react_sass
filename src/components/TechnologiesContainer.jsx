import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Crio estruturas sólidas e semânticas para páginas web utilizando HTML5, garantindo uma base robusta para o conteúdo." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Estilizo páginas web com CSS3, criando layouts elegantes e responsivos para proporcionar uma experiência visualmente agradável em diversos dispositivos." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Adiciono dinamismo e interatividade às minhas aplicações web por meio do JavaScript, explorando suas poderosas funcionalidades." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Utilizo o Node.js para desenvolver servidores eficientes, aproveitando sua arquitetura assíncrona e escalável para aplicações robustas." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Gerencio dados de forma segura e eficiente com o MySQL, assegurando a integridade e confiabilidade do sistema de banco de dados." },
  { id: "react", name: "React", icon: <DiReact />, description: "Desenvolvo interfaces modernas e reativas utilizando o React, construindo componentes reutilizáveis para uma experiência de usuário excepcional." },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
