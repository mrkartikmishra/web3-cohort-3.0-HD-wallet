import React, { useState } from "react";

import "./Login.css";
import { getSHA256Hash } from "../../utils/utils";
import { WALLET_MODAL, WELCOME_MODAL } from "../../constant/global-constant";

export const Login = ({ setShowModal }) => {
  const [walletData, setWalletData] = useState(() => {
    return JSON.parse(localStorage.getItem("WalletData")) || {};
  });
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmitHandler = async () => {
    if (
      walletData?.userInfo?.password === (await getSHA256Hash(password)) &&
      !isError
    ) {
      setIsError(false);
      setShowModal(WALLET_MODAL);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="create_password_section">
      <div className="create_password">
        <div className="create_password_top">
          <span className="create_password_text">Login</span>
          <h3 className="desc_text">Enter your password to use the wallet.</h3>
        </div>
        <div className="password_inputs">
          <input
            className="input_box"
            value={password}
            onChange={(e) => {
              setIsError(false);
              setPassword(e.target.value);
            }}
            placeholder="Enter Password"
          />
          {isError && <span className="error">Invalid credentials</span>}
        </div>
        <div className="create_password_bottom">
          <button className="btn submit_btn" onClick={onSubmitHandler}>
            Submit
          </button>
          <button
            className="btn back_btn"
            onClick={() => {
              setShowModal(WELCOME_MODAL);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
