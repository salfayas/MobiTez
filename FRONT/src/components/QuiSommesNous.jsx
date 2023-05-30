import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import vague from "../assets/vague.png";
import arrow from "../assets/arrow.svg";
import arefaire from "../assets/arefaire.png";


import "./Home.css";
import NavBar from "./NavBar";


const Home = () => {
  const coursRef = useRef(null);

  useEffect(() => {
    document.documentElement.addEventListener("click", scrollToTop);

    return () => {
      document.documentElement.removeEventListener("click", scrollToTop);
      window.scrollTo({
        top: 0,
      });
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const scrollToTop = () => {
    coursRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const stopScroll = () => {
    document.documentElement.removeEventListener("click", scrollToTop);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <header>
          <div className="textLines">
            <span className="line1">QSN</span>
            <span className="line2">
              La plateforme d'investissement dès 10$ dans la mobilité
            </span>
            <img src={arrow} alt="arrow" className="arrow" />
          </div>
          <img src={vague} alt="water" className="home-vag" />
        </header>
        <div className="home-cours" ref={coursRef}>
          <div className="home-cours-head">
            <span>
              Investissement dans la mobilité fractionné auto géré verifié et verifiable
            </span>
          </div>

          <div className="dashBoard-graph-imported">
         
              </div>
          <div className="home-chapters">
            <Chapter
              title="Diversifiez votre portefeuille !"
              text="Vous avez surement des assets exposé crypto action immobilié mais pas mobilité"
            />

             <img src={arefaire} alt="arefaire" className="home-vag" />
            <Chapter
              title="Les sources d'eau douce et la magie des puits artésiens"
              text="Explorez les nappes phréatiques et apprenez comment les puits artésiens peuvent capter l'eau souterraine sous pression naturelle. Découvrez également les glaciers et les zones humides, qui jouent un rôle crucial dans l'écosystème en régulant le climat et purifiant l'eau."
            />
            <Chapter
              title="Les astuces magiques pour économiser l'eau à la maison"
              text="Apprenez que la douche est le plus grand consommateur d'eau dans un ménage et découvrez comment économiser l'eau en prenant des douches courtes. Adoptez des conseils ingénieux pour réduire votre consommation d'eau, comme utiliser un bassin d'eau pour laver les légumes et les fruits. Devenez un expert en récupération d'eau de pluie et découvrez des systèmes d'irrigation économes en eau pour votre jardin."
            />
            <Chapter
              title="L'empreinte eau et le pouvoir des choix alimentaires"
              text="Découvrez comment vos choix alimentaires peuvent influencer votre empreinte eau. Apprenez que la production de 1 kg de viande de bœuf nécessite 15 000 litres d'eau et comment réduire votre consommation d'eau en mangeant moins de viande. Maîtrisez l'art de consommer des produits locaux et de saison pour préserver les ressources en eau de notre planète."
            />
            <Chapter
              title="La quête contre la pollution de l'eau"
              text="Apprenez que l'agriculture est la principale source de pollution de l'eau dans le monde et rejoignez les super-héros de l'eau responsables dans leur combat contre la pollution. Découvrez comment la fonte des glaciers peut entraîner une diminution des ressources en eau douce à long terme. Apprenez à trier correctement vos déchets, à utiliser des produits ménagers écologiques et à éviter les médicaments et autres polluants dans les égouts."
            />
          </div>
          <div>
            <Link to="/form">
              <button className="home-cours-btn" onClick={stopScroll}>
                Accédez au Quizz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Chapter = ({ text, title }) => {
  return (
    <div className="chapter">
      <span>{title}</span>
      <p>{text}</p>
    </div>
  );
};

export default Home;
