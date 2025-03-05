import React from 'react';
import { Link } from 'react-router-dom';

const AssetItem=({asset})=>{
    return(
        <li>
            <Link to={`/asset/${asset.id}`}>
                {asset.name} ({asset.symbol}): ${asset.priceUsd ? `${parseFloat(asset.priceUsd).toFixed(2)}` : "Price Unavailable"}
            </Link>
        </li>
    )
}

export default AssetItem;