import React from "react";
import "./NavBar.css";

import { Link } from "react-router-dom";
import { connectWallet, getAccount } from "../utils/wallet";
import { useEffect, useState } from "react";



const NavBar = () => {

  const [account, setAccount] = useState("");

  // TODO Complete onConnectWallet function
  const onConnectWallet = async () => {
    await connectWallet();
    const activeAccount = await getAccount();
    setAccount(activeAccount);

  };
  return (
    <nav>
      <Link
        to="/"
        className="nav-logo"
        aria-label="Visiter la page d'accueil de MobiTez"
        aria-current="page"
      >
        <span>MobiTez</span>
      </Link>

      <div className="nav-links">
      <Link to="/vote">J'investis</Link>
      <Link to="/dashBoard">DashBoard</Link>

      <Link to="/QuiSommesNous">Qui sommes nous</Link>
      </div>
     
      <button onClick={onConnectWallet} className="nav-signin">Sign in/up</button>
    </nav>
  );
};

export default NavBar;
