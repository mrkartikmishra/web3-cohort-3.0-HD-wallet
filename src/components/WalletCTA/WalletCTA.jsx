import React from "react";
import { FaPlus } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import { AiOutlineSwap } from "react-icons/ai";
import { PiTarget } from "react-icons/pi";

import "./WalletCTA.css";

const WalletCTA = () => {
  return (
    <div className="cta_card_container">
      <div className="cta_card">
        <FaPlus size={18} className="wallet_cta_icon" />
        <h3 className="wallet_cta_text">Receive</h3>
      </div>
      <div className="cta_card">
        <BsSend size={18} className="wallet_cta_icon" />
        <h3 className="wallet_cta_text">Send</h3>
      </div>
      <div className="cta_card">
        <AiOutlineSwap size={18} className="wallet_cta_icon" />
        <h3 className="wallet_cta_text">Swap</h3>
      </div>
      <div className="cta_card">
        <PiTarget size={18} className="wallet_cta_icon" />
        <h3 className="wallet_cta_text">Buy</h3>
      </div>
    </div>
  );
};

export default WalletCTA;
