import { Box, Typography } from "@mui/material"

const Home = () => {

  const boxStyle = {
    backgroundImage: "url('/img-home/wok-img.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "50rem",
  }


  return (
    <> 
    <Box sx={boxStyle} > 
      <Typography variant="h1" color="white" style={{fontFamily:"", textAlign:"center", paddingTop:"18rem" }}>
        Meisho 
      </Typography>
    </Box>
    </>
  )
}

export default Home 