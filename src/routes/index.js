import { Router } from "express";
import { DocenteController} from "../controllers/DocenteController.js"; 

const routes = Router();
const dadosdocentes = new DocenteController();

routes.get("/dadosdocentes", async(req, res)=>{
    const all = await dadosdocentes.listAllDocentes(); 
    res.status(200).send(all);
})

routes.get("/dadosdocentes/:id", async (req, res) => {
    const {id} = req.params;
    const docenteId = await dadosdocentes.listDocenteById(id);
    res.status(200).json(docenteId);  
})

routes.post("/dadosdocentes", async (req, res) => {
    const {nome, formacao, formacaoAdicionais, projetos, areaAtuacaoSenac} = req.body;
    const newDocente = await dadosdocentes.createDocente({nome, formacao, formacaoAdicionais, projetos, areaAtuacaoSenac})
    res.status(201).json(newDocente);
})

routes.put("/dadosdocentes/:id", async (req, res) => {
    const {id} = req.params;
    const {nome, formacao, formacaoAdicionais, projetos, areaAtuacaoSenac} = req.body;
    const updatedDocente = await dadosdocentes.updateDocente({id, nome, formacao, formacaoAdicionais, projetos, areaAtuacaoSenac});
    if(!updatedDocente) {
        res.status(404).json("Erro ao atualizar o docente");
    } else {
        res.status(200).json("Docente atualizado com sucesso");
    }
})

routes.delete("/dadosdocentes/:id", async (req, res) => {
    const {id} = req.params;
    const deleteDocenteById = await dadosdocentes.deleteDocente(id);
    if(!deleteDocenteById) {
        res.status(400).json ("Este docente não existe");
    } else {
        res.status(204).json ("Docente deletado com sucesso");
    }
})

export {routes}

