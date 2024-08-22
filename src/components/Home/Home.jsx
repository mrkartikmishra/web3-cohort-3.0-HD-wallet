import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

import "./Home.css";
import WelcomeCard from "../WelcomeCard/WelcomeCard";
import { CreatePassword } from "../CreatePassword/CreatePassword";
import SecretRecoveryPhrase from "../SecretRecoveryPhrase/SecretRecoveryPhrase";
import {
  CREATE_PASSWORD_MODAL,
  SECRET_RECOVERY_PHRASE_MODAL,
  SUCESS_SECRET_PHRASE_MODAL,
  WALLET_MODAL,
  WELCOME_MODAL,
} from "../../constant/global-constant";
import SuccessPage from "../SecretRecoveryPhrase/SuccessPage";
import Wallet from "../Wallet/Wallet";

const Home = () => {
  const [showModal, setShowModal] = useState(WELCOME_MODAL);

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
      {showModal === WELCOME_MODAL && (
        <WelcomeCard setShowModal={setShowModal} />
      )}
      {showModal === CREATE_PASSWORD_MODAL && (
        <CreatePassword setShowModal={setShowModal} />
      )}
      {showModal === SECRET_RECOVERY_PHRASE_MODAL && (
        <SecretRecoveryPhrase setShowModal={setShowModal} />
      )}
      {showModal === SUCESS_SECRET_PHRASE_MODAL && (
        <SuccessPage setShowModal={setShowModal} />
      )}
      {showModal === WALLET_MODAL && <Wallet />}
    </>
  );
};

export default Home;
