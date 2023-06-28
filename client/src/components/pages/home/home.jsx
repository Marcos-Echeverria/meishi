import { Box, Grid, Typography } from "@mui/material";
import OutlinedCard from "../card/card";
import Footer from "../footer/footer";
const Home = () => {

  const boxStyle = {
    backgroundImage: "url('/img-home/wok-img.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "50rem",
  };

  const description = {
    display: "Flex",
    placeContent: "Center",
    backgroundColor: "#4F5D3C",
    height: '35rem'
  };

  return (
    <> 
    <Box sx={boxStyle} > 
      <Typography variant="h1" color="white" style={{fontFamily:"", textAlign:"center", paddingTop:"18rem" }}>
        Meisho 
      </Typography>
    </Box>

    <Box sx={description}>
      <Box>
      <OutlinedCard />
      </Box>
    </Box>

    <Grid
      container
      spacing={0}
      columns={{ xs: 12, sm: 12, md: 12 }}
      style={{
        textAlign: 'center',
        height: '5rem',
        marginTop: '3rem',
        borderRadius: '10rem', // Agregamos bordes redondeados
        overflow: 'hidden', // Para ocultar los bordes redondeados si el contenido se desborda
      }}
    >
      <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '#4F5D3C' }}>
        <Typography variant="body1" color="white">
          ¿Quiénes somos?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12} style={{ backgroundColor: '#4F5D3C' }}>
        <Typography variant="body1" color="white">
          Meisho no es solo un producto de comida común; es una experiencia meticulosamente elaborada que trasciende los
          límites del gusto y que deleita todos tus sentidos. Diseñado para crear un viaje gastronómico inolvidable,
          Meisho pone énfasis en ofrecer algo más que una simple comida; brinda una aventura culinaria inmersiva y
          elevada.
        </Typography>
      </Grid>
    </Grid>

    <Grid container columns={{ xs: 4, sm: 12, md: 12 }} spacing={10} sx={{p: 15, backgroundColor: "#fffff2" }}>
      <Grid item xs={2} sm={4} md={4}>
        <img className="sushiImg" src="/img-home/argentina.jpg" alt="" />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <img className="sushiImg" src="/img-home/crispi.jpg" alt="" />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <img className="sushiImg" src="/img-home/spicy.jpg" alt="" />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <img className="sushiImg" src="/img-home/nigiris.jpg" alt="" />
      </Grid>
      <Grid  item xs={2} sm={4} md={4}>
        <img className="sushiImg" src="/img-home/orlando.jpg" alt="" />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <img className="sushiImg" src="/img-home/paris.jpg" alt="" />
      </Grid>
    </Grid>
    <Footer/>
    </>
  )
}

export default Home 