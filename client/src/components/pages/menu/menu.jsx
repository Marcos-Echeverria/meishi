import { useEffect, useState } from "react";
import { todosMenu } from "../../functions/function";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import "./Menu.css";
import Footer from "../footer/footer";

const Menu = () => {
  const [menus, setMenus] = useState(null);

  const imagenFondo = {
    backgroundImage: "url('img-menu/fondo-menu2.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    marginTop:"0px"
  };


  useEffect(() => {
    todosMenu(setMenus);
  }, []);

  return (
    <>
      <Typography variant="h4" component="div" className="menuHeader" sx={imagenFondo} style={{marginTop:"1rem"}} >
        <Grid className="container-titulo" container spacing={2}>
          <Grid item xs={6} sm={6} md={6}>
            <Typography className="menuHeaderText" variant="h3" color="white" component="div" style={{ fontFamily: "MiFuentePersonalizada", textAlign:"-webkit-center" }}>
              Platos principales
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Typography className="menuHeaderText" variant="h3" color="white" component="div" style={{ fontFamily: "MiFuentePersonalizada", textAlign:"-webkit-center" }}>
              Entradas
            </Typography>
          </Grid>
        </Grid>
      </Typography>

      <Box className="menuContainer">
        {menus != null ? (
          <Grid container spacing={2} sx={imagenFondo} style={{textAlign:"-webkit-center"}}>
            <Grid item xs={6} sm={6} md={6}>
              {menus.map((menu) => {
                if (menu.category === "Principal") {
                  return (
                    <Box key={menu._id} className="principal">
                      <Card className="menuCard">
                        <CardContent>
                          <Typography className="menuTitle" variant="h6" component="div">
                            {menu.name}
                          </Typography>
                          <Typography className="menuDescription" variant="body2" color="text.secondary">
                            {menu.description}
                          </Typography>
                          <Typography className="menuPrice" variant="body1">
                            Precio: ${menu.price}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  );
                }
                return null;
              })}
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              {menus.map((menu) => {
                if (menu.category === "Entrada") {
                  return (
                    <Box key={menu._id} className="principal">
                      <Card className="menuCard">
                        <CardContent>
                          <Typography className="menuTitle" variant="h6" component="div">
                            {menu.name}
                          </Typography>
                          <Typography className="menuDescription" variant="body2" color="text.secondary">
                            {menu.description}
                          </Typography>
                          <Typography className="menuPrice" variant="body1">
                            Precio: ${menu.price}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  );
                }
                return null;
              })}
            </Grid>
          </Grid>
        ) : (
          <Typography variant="body1">
            El menú está en reparación. Por favor, aguarda unos minutos.
          </Typography>
        )}
      </Box>
      <Footer/>
    </>
  );
};

export default Menu;