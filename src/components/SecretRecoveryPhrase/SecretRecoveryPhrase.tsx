import React from "react";
import { FaRegCopy } from "react-icons/fa";

import "./SecretRecoveryPhrase.css";
import {
  CREATE_PASSWORD_MODAL,
  SUCESS_SECRET_PHRASE_MODAL,
} from "../../constant/global-constant";

const SecretRecoveryPhrase = ({ setShowModal }) => {
  return (
    <div className="secret_recovery_phrase_section">
      <div className="secret_recovery_phrase">
        <div className="secret_recovery_phrase_top">
          <span className="secret_recovery_phrase_text">
            Secret Recovery Phrase
          </span>
          <h3 className="desc_text">
            This phrase is the ONLY way to recover your wallet. <br /> Do NOT
            share it with anyone else!!
          </h3>
        </div>
        <div className="secret_recovery_phrase_middle">
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <input
            className="secret_recovery_phrase_input_box"
            type="text"
            value={"value 1"}
          />
          <div className="copy-secret_section">
            <span className="copy_icon">
              <FaRegCopy size={30} />
            </span>
          </div>
        </div>
        <div className="secret_recovery_phrase_bottom">
          <button
            className="btn continue_btn"
            onClick={() => setShowModal(SUCESS_SECRET_PHRASE_MODAL)}
          >
            Continue
          </button>
          <button
            className="btn back_btn"
            onClick={() => setShowModal(CREATE_PASSWORD_MODAL)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecretRecoveryPhrase;
