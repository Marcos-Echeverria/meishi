import { useEffect, useState } from "react";
import { todosMenu } from "../../functions/function";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import "./Menu.css"; 

const Menu = () => {
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    todosMenu(setMenus);
  }, []);

  
  return (
    <>
    <Typography variant="h4" component="div" className="menuHeader">
      <Grid container columns={{ xs: 4, sm: 12, md: 12 }}>
        <Grid className="menuHeaderText" item xs={2} sm={4} md={4} style={{ fontFamily: "MiFuentePersonalizada"}}>
          Menú principal
        </Grid>
        <Grid className="menuHeaderText" item xs={2} sm={4} md={4} style={{ fontFamily: "MiFuentePersonalizada"}}>
          Entradas
        </Grid>
      </Grid>
    </Typography>

      <Box className="menuContainer" display="grid" gridTemplateColumns="repeat(2, 1fr)">
        {menus != null ? (
          menus.map((menu) => {
            if (menu.category === "Principal") {
              return (
                <>
                <Box className="principal">
                <Card key={menu._id} className="menuCard">
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
                </>
              );
            } else if ( menu.category === "Entrada"){
              return (
              <> 
              <Box className="Entradas">
              <Card key={menu._id} className="menuCard">
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
              </>
)}
          })
        ) : (
          <Typography variant="body1">
            El menú está en reparación. Por favor, aguarda unos minutos.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default Menu;