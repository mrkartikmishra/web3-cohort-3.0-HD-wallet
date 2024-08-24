import React, { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

import "./Home.css";
import WelcomeCard from "../WelcomeCard/WelcomeCard";
import { CreatePassword } from "../CreatePassword/CreatePassword";
import SecretRecoveryPhrase from "../SecretRecoveryPhrase/SecretRecoveryPhrase";
import {
  CREATE_PASSWORD_MODAL,
  LOGIN_MODAL,
  SECRET_RECOVERY_PHRASE_MODAL,
  SUCESS_SECRET_PHRASE_MODAL,
  WALLET_MODAL,
  WELCOME_MODAL,
} from "../../constant/global-constant";
import SuccessPage from "../SecretRecoveryPhrase/SuccessPage";
import Wallet from "../Wallet/Wallet";
import { Login } from "../login/login";

const Home = () => {
  const [walletData, setWalletData] = useState(() => {
    return JSON.parse(localStorage.getItem("WalletData")) || {};
  });
  const [showModal, setShowModal] = useState(WELCOME_MODAL);

  const renderScreens = () => {
    if (showModal === WELCOME_MODAL)
      return <WelcomeCard setShowModal={setShowModal} />;
    if (showModal === CREATE_PASSWORD_MODAL)
      return <CreatePassword setShowModal={setShowModal} />;
    if (showModal === SECRET_RECOVERY_PHRASE_MODAL)
      return <SecretRecoveryPhrase setShowModal={setShowModal} />;
    if (showModal === SUCESS_SECRET_PHRASE_MODAL)
      return <SuccessPage setShowModal={setShowModal} />;
    if (showModal === WALLET_MODAL) return <Wallet />;
  };

  useEffect(() => {
    if (walletData?.accounts?.length > 0) {
      setShowModal(LOGIN_MODAL);
    }
  }, []);

  useEffect(() => {
    renderScreens();
  });

  return (
    <>
      <div className="home_header">
        <div className="home_header_left">
          <img src="logo2.png" width={40} height={40} />
          <span className="header_brand">PhraseVault</span>
        </div>
        <div className="home_header_right">
          <FaQuestionCircle className="help-icon" />
          <span className="help_text">Help</span>
        </div>
      </div>
      {walletData?.accounts?.length && showModal === LOGIN_MODAL ? (
        <Login setShowModal={setShowModal} />
      ) : (
        renderScreens()
      )}
    </>
  );
};

export default Home;
