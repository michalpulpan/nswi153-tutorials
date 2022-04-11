import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/">
                            <Button
                                key={"home"}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>
                        <Link to="/page1">
                            <Button
                                key={"page1"}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Page1
                            </Button>
                        </Link>
                        <Link to="/page2">
                            <Button
                                key={"page2"}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Page2
                            </Button>
                        </Link>
                        <Link to="/increment">
                            <Button
                                key={"increment"}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Increment
                            </Button>
                        </Link>
                        <Link to="/decrement">
                            <Button
                                key={"decrement"}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Decrement
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default Header;