import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { generateMnemonic } from "bip39";

import "./SecretRecoveryPhrase.css";
import {
  CREATE_PASSWORD_MODAL,
  SUCESS_SECRET_PHRASE_MODAL,
} from "../../constant/global-constant";
import { copySecretToClipboardhandler } from "../../utils/utils";

const SecretRecoveryPhrase = ({ setShowModal }) => {
  const [mnemonic, setMnemonic] = useState("");
  const [isSecretPhraseCopiedToClipboard, setIsSecretPhraseCopiedToClipboard] =
    useState(false);
  useEffect(() => {
    const generateMnemonicHandler = async () => {
      return await generateMnemonic();
    };

    const updateLocalStorage = async () => {
      const storageData = JSON.parse(localStorage.getItem("WalletData") || "");
      const mnemonicPhrase = await generateMnemonicHandler();
      const updatedData = JSON.stringify({
        ...storageData,
        secret: { mnemonic: mnemonicPhrase },
      });
      setMnemonic(mnemonicPhrase);
      localStorage.setItem("WalletData", updatedData);
    };

    updateLocalStorage();
  }, []);

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
          {mnemonic?.split(" ")?.map((secret, index) => (
            <input
              key={secret}
              disabled
              className="secret_recovery_phrase_input_box"
              type="text"
              value={`${index + 1}. ${secret}`}
            />
          ))}
        </div>
        <div className="copy-secret_section">
          {!isSecretPhraseCopiedToClipboard && (
            <span
              className="copy_icon"
              title="Copy secret phrase"
              onClick={() => {
                copySecretToClipboardhandler(mnemonic);
                setIsSecretPhraseCopiedToClipboard(true);
              }}
            >
              <FaRegCopy size={15} />
            </span>
          )}
          {isSecretPhraseCopiedToClipboard && (
            <span className="copy_icon" title="Copy secret phrase">
              <span className="copy_check">
                <FaRegCheckCircle color="rgb(108, 247, 108)" size={12} /> Copied
              </span>
            </span>
          )}
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
