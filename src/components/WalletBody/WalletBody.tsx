import React from "react";

import "./WalletBody.css";

const WalletBody = () => {
  return (
    <div className="wallet_body_container">
      <div className="wallet_body_top">
        <span className="amount_type">$</span>
        <span className="amount_value">10.00</span>
      </div>
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
              <span className="crypto_value">0 ETH</span>
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
              <span className="crypto_value">0 SOL</span>
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
