import React from "react";
import "./Vote.css";

import NavBar from "./NavBar";

const Vote = () => {
  return (
    <>
      <NavBar />
      <div className="vote-container">
        <div className="vote-header">
          <span className="vote-title">Flottes disponible :</span>
          <span className="vote-sujet">Choisissez votre investissement</span>
          <span className="vote-idTezos">
            Prenez place
          </span>
        </div>
        <div className="vote-cards">
          <Card
            
            title="Luxe"
            text="Valeur intrinsèque et prestige, offrant des rendements attractifs"
          />
          <Card
            
            title="Citadine"
            text="Combinaison parfaite de praticité, d'efficacité énergétique et de demande croissante dans les zones urbaines densément peuplées"
          />
          <Card
            
            title="Berline"
            text=" Sophistication, performances exceptionnelles et demande soutenue"
          />
        </div>
      </div>
    </>
  );
};

const Card = ({ text, title }) => {
  return (
    <div className="card-container">
      <span>
        {title}
      </span>
      <p>{text}</p>
      <button>Investir</button>
    </div>
  );
};

export default Vote;
