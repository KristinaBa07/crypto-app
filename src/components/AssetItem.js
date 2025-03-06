import React from 'react';
import { Link } from 'react-router-dom';

const AssetItem=({asset})=>{
    return(
        <li style={styles.assetItem}>
            <Link to={`/asset/${asset.id}`} style={styles.assetLink}>
                <div style={styles.assetText}>{asset.name} ({asset.symbol}): ${asset.priceUsd ? `${parseFloat(asset.priceUsd).toFixed(2)}` : "Price Unavailable"}</div>
            </Link>
        </li>
    )
}

const styles = {
    assetItem: {
        padding: '12px',
        borderBottom: '1px solid #ddd',
        background: 'white',
        borderRadius: '5px',
        margin: '5px 0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    assetLink: {
        textDecoration: 'none',
        color: 'black',
        display: 'block',
        padding: '10px',
    },
    assetText:{
        color:'black'
    }
}

export default AssetItem;