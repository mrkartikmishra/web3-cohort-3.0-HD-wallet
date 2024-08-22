import React from "react";
import {
  SECRET_RECOVERY_PHRASE_MODAL,
  WALLET_MODAL,
} from "../../constant/global-constant";

const SuccessPage = ({ setShowModal }) => {
  return (
    <div className="secret_recovery_phrase_success_section">
      <div className="secret_recovery_phrase_success">
        <div className="secret_recovery_phrase_success_top"></div>
        <img src="logo2.png" width={60} height={60} />
        <div className="secret_recovery_phrase_success_middle">
          <h1 className="blinking-text">You're all Set now!!</h1>
          <p>You can now fully Enjoy your wallet!!</p>
        </div>
        <div className="secret_recovery_phrase_success_bottom">
          <button
            className="btn continue_btn"
            onClick={() => setShowModal(WALLET_MODAL)}
          >
            Get started
          </button>
          <button
            className="btn back_btn"
            onClick={() => setShowModal(SECRET_RECOVERY_PHRASE_MODAL)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
