import { styled } from '@mui/system';
import { Typography, Link, useTheme } from '@mui/material';

const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: '#4F5D3C',
    padding: theme.spacing(2),
    marginTop: '0',
    flexShrink: 0, // Evita que el Footer se encoja
}));

const ContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const Footer = () => {
    const theme = useTheme();

    return (
        <ContentContainer>
            <FooterContainer theme={theme}>
                <Typography variant="body2" color="white" align="center">
                    Desarrollado por Marcos Echeverria &copy; {new Date().getFullYear()}
                </Typography>
                <Typography variant="body2" color="white" align="center">
                    <Link color="inherit" href="https://www.linkedin.com/in/marcos-echeverria/">
                        Linkedin
                    </Link>{' '}
                    |{' '}
                    <Link color="inherit" href="https://github.com/Marcos-Echeverria">
                        Github
                    </Link>
                </Typography>
            </FooterContainer>
        </ContentContainer>
    );
};

export default Footer;
