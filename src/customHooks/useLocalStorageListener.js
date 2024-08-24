import { useEffect } from "react";

function useLocalStorageListener(callback) {
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "WalletData") {
        callback(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [callback]);
}

export default useLocalStorageListener;
