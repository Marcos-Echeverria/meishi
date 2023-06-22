import { Box, Grid, Typography } from "@mui/material";
import OutlinedCard from "../card/card";


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
    <Typography variant="body1" color="initial" style={{textAlign:"center"}}>
      ¿Quienes somos?
      <Typography variant="body1" color="initial"> 

      </Typography>
    </Typography>

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
    </>
  )
}

export default Home 