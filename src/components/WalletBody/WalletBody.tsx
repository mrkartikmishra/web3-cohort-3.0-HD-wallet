import React, { useEffect, useState } from "react";

import "./WalletBody.css";
import WalletCTA from "../WalletCTA/WalletCTA";
import { getEthereumBalance, getSolanaBalance } from "../../utils/utils";

const WalletBody = () => {
  const [walletData, setWalletData] = useState(() => {
    return JSON.parse(localStorage.getItem("WalletData") || "");
  });
  const [bitcoinBalance, setBitcoinBalance] = useState("");
  const [ethereumBalance, setEthereumBalance] = useState("0");
  const [solanaBalance, setSolanaBalance] = useState(0);
  const [polygon, setPolygonBalance] = useState("");

  useEffect(() => {
    const getBalance = async () => {
      const solBalance = await getSolanaBalance(
        walletData?.selectedAccount?.solana?.publicKey
      );
      const ethBalance = await getEthereumBalance(
        walletData?.selectedAccount?.ethereum?.publicKey
      );
      setSolanaBalance(solBalance);
      setEthereumBalance(ethBalance);
    };
    getBalance();
  }, []);
  return (
    <div className="wallet_body_container">
      <div className="wallet_body_top">
        <span className="amount_type">$$$</span>
        {/* <span className="amount_value">$$$$</span> */}
      </div>
      <WalletCTA />
      <div className="wallet_body_bottom">
        <div className="crypto_card">
          <div className="crypto_card_left">
            <div className="crypto_card_icon">
              <img src="/crypto_logos/bitcoin.png" width={45} height={45} />
            </div>
            <div className="crypto_card_left_details">
              <span className="crypto_name">Bitcoin</span>
              <span className="crypto_value">0 BTC</span>
            </div>
          </div>
        </div>
        <div className="crypto_card">
          <div className="crypto_card_left">
            <div className="crypto_card_icon">
              <img src="/crypto_logos/ethereum.png" width={45} height={45} />
            </div>
            <div className="crypto_card_left_details">
              <span className="crypto_name">Ethereum</span>
              <span className="crypto_value">{ethereumBalance} ETH</span>
            </div>
          </div>
        </div>
        <div className="crypto_card">
          <div className="crypto_card_left">
            <div className="crypto_card_icon">
              <img src="/crypto_logos/solana.png" width={45} height={45} />
            </div>
            <div className="crypto_card_left_details">
              <span className="crypto_name">Solana</span>
              <span className="crypto_value">{solanaBalance} SOL</span>
            </div>
          </div>
        </div>
        <div className="crypto_card">
          <div className="crypto_card_left">
            <div className="crypto_card_icon">
              <img src="/crypto_logos/polygon.png" width={45} height={45} />
            </div>
            <div className="crypto_card_left_details">
              <span className="crypto_name">Ploygon</span>
              <span className="crypto_value">0 MATIC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBody;
