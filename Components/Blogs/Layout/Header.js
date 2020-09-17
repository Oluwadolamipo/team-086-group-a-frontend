import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
 
export default () => {
  return (
    // <AppBar position="static">
    <div>
     <h3>Blog</h3>
      <Toolbar>
        <Typography variant="headline" color="colorSecondary" noWrap>
            <button href="#">ThinkSpiceFood</button>
            <h2>Welcome</h2>

        </Typography>
      </Toolbar>
      {/* //</AppBar> */}
    </div>
  );
};