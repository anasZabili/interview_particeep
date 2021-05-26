import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { AppBar as UIAppBar, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
}));

function AppBarComponent(props) {
  const { buttons, logoUrl } = props;
  const classes = useStyles();

  const handleClick = () => {
    // Nothing;
  };
  return (
    <UIAppBar position="static" className="my-app-bar">
      <Toolbar style={{ minHeight: "80px" }}>
        <Typography
          variant="h6"
          className={classes.title}
          onClick={handleClick}
        >
          <Box className={classes.title}>
            <img src={logoUrl} alt="Particeep" width="60px" height="60px" />
          </Box>
        </Typography>
        {buttons?.map((button) => {
          if (button.button) {
            return button.button;
          } else if (button.icon) {
            return (
              <IconButton color="inherit" onClick={button.handleClick}>
                {button.icon}
              </IconButton>
            );
          } else {
            return (
              <Button color="inherit" onClick={button.handleClick}>
                {button.title}
              </Button>
            );
          }
        })}
      </Toolbar>
    </UIAppBar>
  );
}

export default AppBarComponent;
