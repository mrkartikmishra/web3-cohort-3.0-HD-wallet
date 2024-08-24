import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import "./Sidebar.css";
import { createWallet } from "../../utils/utils";

const Sidebar = ({ isSidebarOpened }) => {
  const [walletData, setWalletData] = useState(() => {
    return JSON.parse(localStorage.getItem("WalletData")) || {};
  });

  useEffect(() => {
    setInterval(() => {
      setWalletData(JSON.parse(localStorage.getItem("WalletData")));
    }, 1000);
  });

  const createNewWalletHandler = async () => {
    await createWallet();
    setWalletData(JSON.parse(localStorage.getItem("WalletData")) || {});
  };

  const selectAccountHandler = (account) => {
    const storageData = JSON.parse(localStorage.getItem("WalletData")) || {};
    const updatedData = JSON.stringify({
      ...storageData,
      selectedAccount: account,
    });

    localStorage.setItem("WalletData", updatedData);
  };

  return (
    <div className={`sidebar ${isSidebarOpened && "active"}`}>
      <div className="top_icons">
        {walletData?.accounts?.map((account) => {
          return (
            <CgProfile
              key={account?.bitcoin?.publicKey}
              onClick={() => selectAccountHandler(account)}
              color={`${
                walletData?.selectedAccount?.accountName ===
                account?.accountName
                  ? "#ffe501"
                  : ""
              }`}
              size={25}
              className="icon"
            />
          );
        })}
      </div>
      <div className="bottom_icons">
        <FaPlus size={20} className="icon" onClick={createNewWalletHandler} />
        <IoSettingsOutline size={20} className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
