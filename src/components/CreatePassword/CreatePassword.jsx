import React, { useState } from "react";

import "./Createpassword.css";
import { getSHA256Hash } from "../../utils/utils";
import {
  SECRET_RECOVERY_PHRASE_MODAL,
  WELCOME_MODAL,
} from "../../constant/global-constant";

export const CreatePassword = ({ setShowModal }) => {
  const [password, setPassword] = useState("");
  const [conformPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmitHandler = async () => {
    if (password === conformPassword && !isError) {
      localStorage.setItem(
        "password",
        JSON.stringify({ password: await getSHA256Hash(password) })
      );
      setIsError(false);
      setShowModal(SECRET_RECOVERY_PHRASE_MODAL);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="create_password_section">
      <div className="create_password">
        <div className="create_password_top">
          <span className="create_password_text">Create a password</span>
          <h3 className="desc_text">
            You will use this to unlock your wallet.
          </h3>
          <div className="password_inputs">
            <input
              className="input_box"
              value={password}
              onChange={(e) => {
                setIsError(false);
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <input
              className="input_box"
              value={conformPassword}
              onChange={(e) => {
                setIsError(false);
                setConfirmPassword(e.target.value);
              }}
              placeholder="Confirm Password"
            />
            {isError && (
              <span className="error">
                Password and Confirm Password not matched!!
              </span>
            )}
          </div>
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
