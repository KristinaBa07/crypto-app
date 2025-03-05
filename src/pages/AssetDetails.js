import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAssetDetail, getAssetHistory } from "../services/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AssetDetail = () => {
  const { id } = useParams();
  const [asset, setAsset] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const assetData = await getAssetDetail(id);
      setAsset(assetData);

      const historyData = await getAssetHistory(id);
      setHistory(historyData);
    }
    fetchData();
  }, [id]);

  if (!asset) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{asset.name} ({asset.symbol})</h2>
      <p>Price: ${parseFloat(asset.priceUsd).toFixed(2)}</p>

      <h3>Price History (Last 24h)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={history}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#007bff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AssetDetail;