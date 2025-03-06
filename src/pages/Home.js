import React, { useEffect, useState } from "react";
import { getAssets } from "../services/api";
import SearchBar from "../components/SearchBar";
import AssetItem from "../components/AssetItem";
import Spinner from '../components/Spinner';
import ApiErrorMessage from '../components/ApiErrorMessage';

const Home = () => {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try{
        setLoading(true);
        const data = await getAssets();
        setAssets(data);
        setLoading(false);
      }catch(error){
        setLoading(false)
        setError(error);
      }
    })();
  }, []);


  const filteredAssets = assets.filter((asset) =>
    asset.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="container">
      <h1>Crypto Assets</h1>
      <SearchBar value={search} onChange={setSearch} />
      {error && !assets.length && <ApiErrorMessage/>}
      <ul>
      {filteredAssets.map((asset) => (
          <AssetItem key={asset.id} asset={asset} />
        ))}
      </ul>
      {loading && <Spinner />}
    </div>
  );
};


export default Home;