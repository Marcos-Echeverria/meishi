import { useEffect, useState } from "react";
import { todosMenu } from "../../functions/function";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "./Menu.css"; 

const Menu = () => {
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    todosMenu(setMenus);
  }, []);

  
  return (
    <>
    <Typography variant="h3" color="initial" align="flex-start">Menu principal</Typography>
    <Box className="menuContainer">
      {menus != null ? (
        menus.map((menu) => {
          if (menu.category === "Principal") {
            return (
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
            );
          }
          return null;
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