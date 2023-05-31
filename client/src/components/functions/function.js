import axios from 'axios'

const todosMenu = async (state) => {
    const peticion = await axios.get('http://localhost:3000/api/')
    state(peticion.data.menus);
};

export{
    todosMenu
};