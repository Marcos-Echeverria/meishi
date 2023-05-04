import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
        <AppBar position="fixed" sx={{ backgroundColor: '#4F5D3C'}}>
            <Toolbar>
                <IconButton component={Link} to="/" size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src="/icon-img/logo2-1.png" alt='Logo' width='45px'/>
                </IconButton>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
                    Meisho
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' component={Link} to='/'> Home </Button>
                    <Button color='inherit' component={Link} to='/menu'> Menú </Button>
                    <Button color='inherit' component={Link} to='/delivery'> Delivery </Button>
                </Stack>
            </Toolbar>
        </AppBar>
            <Toolbar />
        </>
    )
}
export default Navbar

// Este es el navbar