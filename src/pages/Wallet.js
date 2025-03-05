import React, { useState, useEffect } from "react";
import { getAssets } from "../services/api";

const Wallet = () => {
  const [wallet, setWallet] = useState(JSON.parse(localStorage.getItem("wallet")) || {});
  const [asset, setAsset] = useState("");
  const [amount, setAmount] = useState("");
  const [prices, setPrices] = useState({});

  useEffect(() => {
    async function fetchPrices() {
      const assets = await getAssets();
      const priceMap = assets.reduce((acc, asset) => {
        acc[asset.id] = parseFloat(asset.priceUsd);
        return acc;
      }, {});
      setPrices(priceMap);
    }
    fetchPrices();
  }, []);

  const addAsset = () => {
    if (!asset || !amount) return;
    const assetId = asset.toLowerCase();
    const updatedWallet = { ...wallet, [assetId]: (wallet[assetId] || 0) + parseFloat(amount) };
    setWallet(updatedWallet);
    localStorage.setItem("wallet", JSON.stringify(updatedWallet));
    setAsset("");
    setAmount("");
  };

  const removeSpecificAsset = (assetId) => {
    const updatedWallet = { ...wallet };
    delete updatedWallet[assetId]; 
    setWallet(updatedWallet);
    localStorage.setItem("wallet", JSON.stringify(updatedWallet));
  };

  const totalUSD = Object.entries(wallet).reduce((total, [key, value]) => {
    return total + (prices[key] ? prices[key] * value : 0);
  }, 0);

  return (
    <div className="container">
      <h1>Wallet</h1>
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Asset name (e.g., bitcoin)"
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
        />
      </div>
     
      <div className="input-container">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.addButton} onClick={addAsset}>Add Asset</button>
      </div>

      <h2>Total USD Value: ${totalUSD.toFixed(2)}</h2>
      <h2>Holdings</h2>
      <ul>
        {Object.entries(wallet).map(([key, value]) => (
          <li key={key} style={styles.holdingItem}>
            <span>
              {key}: {value} (${prices[key] ? (prices[key] * value).toFixed(2) : "N/A"})
            </span>
            <button 
              style={styles.removeButton} onClick={() => removeSpecificAsset(key)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles ={
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "10px",
      },
    addButton:{
        padding: "12px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "background 0.3s",
    },
    holdingItem:{
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "10px", 
        backgroundColor: "#f8f9fa", 
        borderRadius: "5px", 
        marginBottom: "5px"
    },
    removeButton:{
        padding: "5px 10px", 
        backgroundColor: "red", 
        color: "white", 
        border: "none", 
        cursor: "pointer", 
        borderRadius: "5px"
    }
}

export default Wallet;