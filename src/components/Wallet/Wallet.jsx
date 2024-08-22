import React, { useState } from "react";
import { RiCoinsLine } from "react-icons/ri";
import { RiNftFill } from "react-icons/ri";
import { IoMdSwap } from "react-icons/io";
import { FaList } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { SiPolygon } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Wallet.css";
import Sidebar from "../Sidebar/Sidebar";
import WalletBody from "../WalletBody/WalletBody";

const Wallet = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  const toggleSideBarMenuHandler = () => {
    setIsSidebarOpened((prev) => !prev);
  };

  return (
    <div className="wallet_section">
      <div className="wallet_header">
        <div className="hamburger_menu" onClick={toggleSideBarMenuHandler}>
          <GiHamburgerMenu />
        </div>
        <div className="accounts_section">
          <div className="account_dropdown">
            <h4 onClick={() => setIsDropdownVisible((prev) => !prev)}>
              Account 1
            </h4>
            <IoIosArrowDown
              onClick={() => setIsDropdownVisible((prev) => !prev)}
            />
          </div>
          {isDropdownVisible && (
            <div className="wallets">
              <div className="wallet">
                <div className="wallet_left">
                  <SiBitcoinsv className="wallet_icon" />
                  <span>Bitcoin</span>
                </div>
                <span>353br...4n5kh</span>
              </div>
              <div className="wallet">
                <div className="wallet_left">
                  <FaEthereum className="wallet_icon" />
                  <span>Ethereum</span>
                </div>
                <span>353br...4n5kh</span>
              </div>
              <div className="wallet">
                <div className="wallet_left">
                  <SiSolana className="wallet_icon" />
                  <span>Solana</span>
                </div>
                <span>353br...4n5kh</span>
              </div>
              <div className="wallet">
                <div className="wallet_left">
                  <SiPolygon className="wallet_icon" />
                  <span>Polygon</span>
                </div>
                <span>353br...4n5kh</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="wallet_body" onClick={() => setIsDropdownVisible(false)}>
        {isSidebarOpened && <Sidebar isSidebarOpened={isSidebarOpened} />}
        <WalletBody />
      </div>
      <div className="wallet_footer">
        <div className="buttons">
          <RiCoinsLine
            size={22}
            style={{ color: "#ffe501" }}
            className="footer_icon"
          />
          <RiNftFill
            size={22}
            // style={{ color: "#ffe501" }}
            className="footer_icon"
          />
          <IoMdSwap
            size={22}
            // style={{ color: "#ffe501" }}
            className="footer_icon"
          />
          <FaList
            size={22}
            // style={{ color: "#ffe501" }}
            className="footer_icon"
          />
          <CiGlobe
            size={22}
            // style={{ color: "#ffe501" }}
            className="footer_icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
