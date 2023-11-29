import {AppBar, Button, IconButton, Toolbar} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LinkIcon from "@mui/icons-material/Link";
import {useNavigate} from "react-router-dom";

export const Appbar =  (() => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton size="large" edge="start" color="inherit" aria-label="home" sx={{ mr: 2 }} onClick={navigateHome}>
            <HomeIcon />
          </IconButton>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Button data-testid="login-name" sx={{ textTransform: "none" }} color="inherit"
                    startIcon={ <LinkIcon />  }>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
  );
});



