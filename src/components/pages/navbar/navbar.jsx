import { AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material';



const Navbar = () => {
    return (
        <>
        <AppBar position="fixed" sx={{ backgroundColor: '#4F5D3C'}}>
            <Toolbar>
                <IconButton href="/" size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src="/icon-img/logo2-1.png" alt='Logo' width='45px'/>
                </IconButton>
                <Typography variant="h6" component='div' sx={{ flexGrow: 1 }}>
                    Meisho
                </Typography>
                <Stack direction='row' spacing={2}>
                    
                    <Button href="/" color='inherit'> Home </Button>
                    <Button href="/menu" color='inherit'> Menú </Button>
                    <Button href="/delivery" color='inherit'> Delivery </Button>
                </Stack>
            </Toolbar>
        </AppBar>
            <Toolbar />
        </>
    )
}
export default Navbar

// Este es el navbar