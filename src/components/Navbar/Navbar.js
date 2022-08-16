import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router-dom';

export default function ButtonAppBar() {
  
    const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style = {{ "backgroundColor" : "#6600FF",  }}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="https://aaronz.co/static/media/logoWhite.3e2b20a0acc86074901868a49b85ca61.svg" alt=""  style = {{ "height": "50px", }} />
             
          </Typography>
          <Button color="inherit" onClick={() => { history.push('/login')  }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
