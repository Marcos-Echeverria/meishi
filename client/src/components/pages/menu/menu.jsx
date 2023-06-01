import { useEffect, useState } from "react";
import { todosMenu } from "../../functions/function";
import { Box, Typography } from "@mui/material";

const Menu = () => {
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    todosMenu(setMenus);
  }, []);
  
  const boxStyle = {
    marginTop: "1vh",
  };

  return (
    <>

    <Box sx={boxStyle} >
      {menus != null ? (menus.map(menu => (
        <div key={menu.id}>
          <Typography color="#4F5D3C">{menu.name}</Typography>
          <Typography>{menu.description}</Typography>
          <Typography>Precio: ${menu.price}</Typography>
        </div>
      ))
      ) : ('No hay menu')}
    </Box>

    </>
  );
};

export default Menu