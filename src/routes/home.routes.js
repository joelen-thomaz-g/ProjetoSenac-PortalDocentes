import express, { Router } from "express";
import { DocenteController} from "../controllers/DocenteController.js"; 

const dadosdocentes = new DocenteController();

/* Rotas do Front-End */

export const homeRoutes = Router()

homeRoutes.use(express.static('public'))

homeRoutes.get('/home', async (req, res) => {
    res.render('index')})

homeRoutes.get('/docente', async (req, res) => {
    const listAllDocentes = await dadosdocentes.listAllDocentes();
    res.render('docentes', {listAllDocentes})})

homeRoutes.get('galeriageral', )

