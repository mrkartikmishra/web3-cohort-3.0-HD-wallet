import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";
import * as ecc from "tiny-secp256k1";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { BIP32Factory } from "bip32";
import { Connection, PublicKey } from "@solana/web3.js";
import { ethers } from "ethers";

const bip32 = BIP32Factory(ecc);

export const getSHA256Hash = async (input) => {
  const textAsBuffer = new TextEncoder().encode(input);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    .map((item) => item.toString(16).padStart(2, "0"))
    .join("");
  return hash;
};

export const createSolanaWallets = async (mnemonic, currentIndex) => {
  const seed = await mnemonicToSeed(mnemonic);
  const path = `m/44'/501'/${currentIndex}'/0'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  const keypair = Keypair.fromSecretKey(secret);
  return {
    privateKey: Buffer.from(keypair.secretKey).toString("hex"),
    publicKey: keypair.publicKey,
  };
};

export const createEthereumWallets = async (mnemonic, currentIndex) => {
  const seed = await mnemonicToSeed(mnemonic);
  const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
  const hdNode = HDNodeWallet.fromSeed(seed);
  const child = hdNode.derivePath(derivationPath);
  const privateKey = child.privateKey;
  const wallet = new Wallet(privateKey);
  return {
    privateKey: wallet?.privateKey,
    publicKey: wallet?.address,
  };
};

export const createBitcoinWallets = async (mnemonic, currentIndex) => {
  const seed = await mnemonicToSeedSync(mnemonic);
  const root = bip32.fromSeed(seed);
  const path = `m/44'/0'/0'/${currentIndex}/0`;
  const child = root.derivePath(path);
  const privateKey = child.toWIF();
  const publicKey = child.publicKey.toString("hex");
  return {
    privateKey,
    publicKey,
  };
};

export const createWallet = async () => {
  const storageData = JSON.parse(localStorage.getItem("WalletData") || "{}");

  const currentIndex = storageData?.accounts ? storageData.accounts.length : 0;

  const bitcoinKeys = await createBitcoinWallets(
    storageData?.secret?.mnemonic,
    currentIndex
  );
  const solanaKeys = await createSolanaWallets(
    storageData?.secret?.mnemonic,
    currentIndex
  );
  const ethereumKeys = await createEthereumWallets(
    storageData?.secret?.mnemonic,
    currentIndex
  );
  const polygonKeys = await createEthereumWallets(
    storageData?.secret?.mnemonic,
    currentIndex
  );

  const newWallet = {
    accountName: `Account ${Number(currentIndex + 1)}`,
    bitcoin: {
      privateKey: bitcoinKeys?.privateKey,
      publicKey: bitcoinKeys?.publicKey,
    },
    solana: {
      privateKey: Buffer.from(solanaKeys?.privateKey).toString("hex"),
      publicKey: solanaKeys?.publicKey,
    },
    ethereum: {
      privatekey: ethereumKeys?.privateKey,
      publicKey: ethereumKeys?.publicKey,
    },
    polygon: {
      privatekey: polygonKeys?.privateKey,
      publicKey: polygonKeys?.publicKey,
    },
  };

  const updatedAccounts = storageData?.accounts
    ? [...storageData.accounts, newWallet]
    : [newWallet];

  const updatedData = JSON.stringify({
    ...storageData,
    accounts: updatedAccounts,
  });

  localStorage.setItem("WalletData", updatedData);
};

export const getTrimmedAddress = (address) => {
  return (
    address?.slice(0, 4) +
    "..." +
    address?.slice(address.length - 4, address.length)
  );
};

export const copySecretToClipboardhandler = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Copied to clipboard");
    })
    .catch((err) => {
      console.log("Error in opied to clipboard");
    });
};

export const getSolanaBalance = async (address) => {
  try {
    const connection = new Connection("https://api.devnet.solana.com");
    const publicKey = new PublicKey(address);
    const balance = await connection.getBalance(publicKey);
    const balanceInSOL = balance / 1e9;
    return balanceInSOL;
  } catch (error) {
    console.error("Error fetching Solana balance:", error);
    throw error;
  }
};

export const getEthereumBalance = async (address) => {
  try {
    const provider = new ethers.JsonRpcProvider(
      `https://sepolia.infura.io/v3/${import.meta.env.VITE_INFURA_API_KEY}`
    );

    const balance = await provider.getBalance(address);
    const balanceInEther = ethers.formatEther(balance);
    return balanceInEther;
  } catch (error) {
    console.error("Error fetching Ethereum balance:", error);
    throw error;
  }
};
