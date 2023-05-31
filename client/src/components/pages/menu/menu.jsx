import { useEffect, useState } from "react"
import { todosMenu } from "../../functions/function"

const Menu = () => {
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    todosMenu(setMenus);
  }, []);
  
  return (
    <>
      {menus != null ? (menus.map(menu => (
        <div key={menu.id}>
          <a href="#">{menu.name}</a>
          <a href="#">{menu.price}</a>
        </div>
      ))
      ) : ('No hay menu')}
    </>
  )
}

export default Menu