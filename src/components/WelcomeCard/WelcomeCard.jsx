import React from "react";

import "./WelcomeCard.css";
import { CREATE_PASSWORD_MODAL } from "../../constant/global-constant";

const WelcomeCard = ({ setShowModal }) => {
  return (
    <div className="home">
      <div className="home_card">
        <div className="card_middle">
          <div className="card_middle_content">
            <div className="card_middle_top">
              <img src="logo2.png" width={80} height={80} />
              <span className="brand">PhraseVault</span>
            </div>
            <p className="desc">
              To get started, create a new wallet or <br /> import an existing
              one.
            </p>
          </div>
        </div>
        <div className="card_buttons">
          <button
            className="btn create_wallet_btn"
            onClick={() => setShowModal(CREATE_PASSWORD_MODAL)}
          >
            Create a new wallet
          </button>
          <button className="btn import_wallet_btn">
            Import an existing wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
