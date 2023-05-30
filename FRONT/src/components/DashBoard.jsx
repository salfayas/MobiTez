import { React, useState } from "react";
import "./DashBoard.css";
import NavBar from "./NavBar";
import vague from "../assets/vague.png";
import pH_Rennes from "../assets/pH_Rennes.png";
import piezo from "../assets/piezo.png";
import Rendement_Annuel from "../assets/Rendement_Annuel.png";
import chart from "../assets/chart.png";

const DashBoard = () => {
  const [onglet_pH, setOnglet_pH] = useState(true);

  const changeOnglet = (btn) => {
    btn === "pH" ? setOnglet_pH(true) : setOnglet_pH(false);
  };

  return (
    <>
      <NavBar />
      <div className="dashBoard-container">
        <div className="dashBoard-left">
          <div className="dashBoard-towns">
            <span className="dashBoard-towns-title">Mes Flottes :</span>
            <input type="text" placeholder="Rechercher une flotte" />
            <div className="list-towns">
              <span>Luxe 12</span>
              <span>Citadine 75</span>
              <span>Luxe 06</span>
              <span>Utilitaire 75</span>
              <span>Citadine 75</span>
            </div>
          </div>
        </div>
        <div className="dashBoard-right">
          <div className="dashBoard-params">
            <button onClick={() => changeOnglet("pH")}>Rendement</button>
            <button onClick={() => changeOnglet("!pH")}>Répartition</button>
          </div>
          <div className="dashBoard-graph">
            {onglet_pH ? (
              <div className="dashBoard-graph-imported">
                <img
                  src={Rendement_Annuel}
                  alt="graphique pH"
                  className="dashboard-pH"
                />
              </div>
            ) : (
              <div className="dashBoard-graph-imported">
                <img
                  src={chart}
                  alt="graphique piézométrie"
                  className="dashboard-piezo"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <img src={vague} alt="water" className="dashboard-vag" />
    </>
  );
};

export default DashBoard;
