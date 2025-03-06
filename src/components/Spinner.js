import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = (loading = true) => {
  return loading && <CircularProgress style={styles.loading} />
};

const styles={
    loading:{
      margin: '30px 50% 0 50%'
    }
  }

export default Spinner;