import React, { useEffect, useState } from "react";
import { getAssets } from "../services/api";
import SearchBar from "../components/searchBar/SearchBar";
import Button from "../components/Button/Button";

const Home = () => {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getAssets();
      setAssets(data);
    }
    fetchData();
  }, []);

  

  return (
    <div className="container">
      <h1>Crypto Assets</h1>
      <SearchBar value={search} onChange={setSearch} />
      <ul>
        
      </ul>
      <Button onClick={() => alert("Fetching latest prices...")}>Refresh Prices</Button>
    </div>
  );
};

export default Home;