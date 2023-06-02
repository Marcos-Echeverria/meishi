import { Box, Grid, Typography } from "@mui/material"

const Home = () => {

  const boxStyle = {
    backgroundImage: "url('/img-home/wok-img.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "50rem",
  };

  const description = {
    height: "50rem",
    backgroundColor: "#4F5D3C"
  };

  return (
    <> 
    <Box sx={boxStyle} > 
      <Typography variant="h1" color="white" style={{fontFamily:"", textAlign:"center", paddingTop:"18rem" }}>
        Meisho 
      </Typography>
    </Box>

    <Box sx={description}>
    </Box>

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