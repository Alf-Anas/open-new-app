import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NewspaperIcon from "@mui/icons-material/Newspaper";

export default function MainAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <NewspaperIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Open News App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
