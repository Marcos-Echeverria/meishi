const express = require('express');
const Menu = require('../models/menu');
const MenuRouter = express.Router();

MenuRouter.get("/", async (req, res) => {
    let menus = await Menu.find({});
    return res.status(200).send({
        succes:true,
        menus
    });
});

MenuRouter.post("/menu", async (req, res) => {
    try {
        const {name, price, description} = req.body
        if(!name || !price){
            return res.status(400).send({
                succes:false,
                message:"Faltan datos por completar en el precio o el nombre",
            });
        }
        let menus = new Menu ({
            name,
            price,
            description,
        });

        await menus.save()
        return res.status(200).send({
            succes: true,
            message:"Menu creado correctamente"
        });
    } catch (err) {
        return res.status(500).send({
            succes:false,
            message: err.message
        })
    };
});

MenuRouter.delete("/delete/:id", async (req, res) => {
    try {
        const {id} = req.params
        await Menu.findByIdAndDelete(id)
        res.status(200).send({
            succes: true,
            message: "Menu Eliminado"
        });
    } catch (error) {
        res.status(500).send({
            succes: false,
            message: error.message,
        })
    };
});

MenuRouter.put("/update/:id", async(req, res) => {
    try {
        const {id} = req.params
        const {price} = req.body
        await Menu.findByIdAndUpdate(id, {price}) //Si en un futuro esto llegase a generar conflictos usar Model.findOneAndUpdate()
        res.status(200).send({
            succes: true,
            message:"Precio modificado"
        });
    } catch (error) {
        res.status(500).send({
            succes: false,
            message:error.message
        })
    };
});

module.exports = MenuRouter;