import React, { useEffect, useState } from "react";
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
import { FaRegCopy } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

import "./Wallet.css";
import Sidebar from "../Sidebar/Sidebar";
import WalletBody from "../WalletBody/WalletBody";
import {
  copySecretToClipboardhandler,
  createWallet,
  getTrimmedAddress,
} from "../../utils/utils";

const Wallet = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [isBitcoinAddressCopied, setIsBitcoinAddressCopied] = useState(false);
  const [isEthereumAddressCopied, setIsEthereumAddressCopied] = useState(false);
  const [isSolanaAddressCopied, setIsSolanaAddressCopied] = useState(false);
  const [isPolygonAddressCopied, setIsPolygonAddressCopied] = useState(false);
  const [walletData, setWalletData] = useState(() => {
    return JSON.parse(localStorage.getItem("WalletData")) || {};
  });

  useEffect(() => {
    if (walletData.hasOwnProperty("accounts") === false) {
      createWallet().then(() => {
        const storageData =
          JSON.parse(localStorage.getItem("WalletData")) || {};
        const updatedData = JSON.stringify({
          ...storageData,
          selectedAccount: storageData?.accounts[0],
        });

        localStorage.setItem("WalletData", updatedData);
      });
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      setWalletData(JSON.parse(localStorage.getItem("WalletData")));
    }, 1000);
  });

  useEffect(() => {
    setTimeout(() => {
      isBitcoinAddressCopied && setIsBitcoinAddressCopied(false);
    }, 1000);
  }, [isBitcoinAddressCopied]);

  useEffect(() => {
    setTimeout(() => {
      isEthereumAddressCopied && setIsEthereumAddressCopied(false);
    }, 1000);
  }, [isEthereumAddressCopied]);

  useEffect(() => {
    setTimeout(() => {
      isSolanaAddressCopied && setIsSolanaAddressCopied(false);
    }, 1000);
  }, [isSolanaAddressCopied]);

  useEffect(() => {
    setTimeout(() => {
      isPolygonAddressCopied && setIsPolygonAddressCopied(false);
    }, 1000);
  }, [isPolygonAddressCopied]);

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
              {walletData?.selectedAccount?.accountName}
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
                <span className="wallet_address_right">
                  {getTrimmedAddress(
                    walletData?.selectedAccount?.bitcoin?.publicKey
                  )}
                  <span
                    className="address_copy_icon"
                    onClick={() =>
                      copySecretToClipboardhandler(
                        walletData?.selectedAccount?.bitcoin?.publicKey
                      )
                    }
                  >
                    {!isBitcoinAddressCopied && (
                      <FaRegCopy
                        size={12}
                        onClick={() => setIsBitcoinAddressCopied(true)}
                      />
                    )}
                    {isBitcoinAddressCopied && (
                      <span className="copy_check">
                        <FaRegCheckCircle
                          color="rgb(108, 247, 108)"
                          size={12}
                        />
                      </span>
                    )}
                  </span>
                </span>
              </div>
              <div className="wallet">
                <div className="wallet_left">
                  <FaEthereum className="wallet_icon" />
                  <span>Ethereum</span>
                </div>
                <span className="wallet_address_right">
                  {getTrimmedAddress(
                    walletData?.selectedAccount?.ethereum?.publicKey
                  )}
                  <span
                    className="address_copy_icon"
                    onClick={() =>
                      copySecretToClipboardhandler(
                        walletData?.selectedAccount?.ethereum?.publicKey
                      )
                    }
                  >
                    {!isEthereumAddressCopied && (
                      <FaRegCopy
                        size={12}
                        onClick={() => setIsEthereumAddressCopied(true)}
                      />
                    )}
                    {isEthereumAddressCopied && (
                      <span className="copy_check">
                        <FaRegCheckCircle
                          color="rgb(108, 247, 108)"
                          size={12}
                        />
                      </span>
                    )}
                  </span>
                </span>
              </div>
              <div className="wallet">
                <div className="wallet_left">
                  <SiSolana className="wallet_icon" />
                  <span>Solana</span>
                </div>
                <span className="wallet_address_right">
                  {getTrimmedAddress(
                    walletData?.selectedAccount?.solana?.publicKey
                  )}
                  <span
                    className="address_copy_icon"
                    onClick={() =>
                      copySecretToClipboardhandler(
                        walletData?.selectedAccount?.solana?.publicKey
                      )
                    }
                  >
                    {!isSolanaAddressCopied && (
                      <FaRegCopy
                        size={12}
                        onClick={() => setIsSolanaAddressCopied(true)}
                      />
                    )}
                    {isSolanaAddressCopied && (
                      <span className="copy_check">
                        <FaRegCheckCircle
                          color="rgb(108, 247, 108)"
                          size={12}
                        />
                      </span>
                    )}
                  </span>
                </span>
              </div>
              <div className="wallet">
                <div className="wallet_left">
                  <SiPolygon className="wallet_icon" />
                  <span>Polygon</span>
                </div>
                <span className="wallet_address_right">
                  {getTrimmedAddress(
                    walletData?.selectedAccount?.polygon?.publicKey
                  )}
                  <span
                    className="address_copy_icon"
                    onClick={() =>
                      copySecretToClipboardhandler(
                        walletData?.selectedAccount?.polygon?.publicKey
                      )
                    }
                  >
                    {!isPolygonAddressCopied && (
                      <FaRegCopy
                        size={12}
                        onClick={() => setIsPolygonAddressCopied(true)}
                      />
                    )}
                    {isPolygonAddressCopied && (
                      <span className="copy_check">
                        <FaRegCheckCircle
                          color="rgb(108, 247, 108)"
                          size={12}
                        />
                      </span>
                    )}
                  </span>
                </span>
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
