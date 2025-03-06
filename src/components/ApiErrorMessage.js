import React from 'react';
import GppBadTwoToneIcon from '@mui/icons-material/GppBadTwoTone';

const DEFAULT_MESSAGE = 'Something went wrong during fetching data. Please reload the page or try again later.'

const ApiErrorMessage=({errorMessage=DEFAULT_MESSAGE})=>{

    return <div style={styles.apiErrorMessage}><GppBadTwoToneIcon />{errorMessage}</div>
}

const styles = {
    apiErrorMessage:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
    }
}
export default ApiErrorMessage;