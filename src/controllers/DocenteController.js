import { pool } from "../database/index.js";

class DocenteController{
    async createDocente({nome, formacao, formacaoAdicionais, projetos, areaAtuacaoSenac}){
        const [rows] = await pool.query(`
        INSERT INTO dadosdocentes (nome, formacao, formacaoAdicionais, projetos, areaAtuacaoSenac) VALUES (?, ?, ?, ?, ?)
        `, [nome, formacao, formacaoAdicionais, projetos, areaAtuacaoSenac])
        return rows
    }
    async listAllDocentes(){
        const [row] = await pool.query(`
        SELECT * FROM dadosdocentes
        `)
        return row;
    }
    async listDocenteById(id) {
        const [rows] = await pool.query(`
            SELECT * FROM dadosdocentes WHERE id = ${id}
        `)
        return rows[0]
    }
    async updateDocente({id, nome, formacao, formacaoAdicionais, projetos, areaAtuacaoSenac}) {
        const [rows] = await pool.query(`
            UPDATE dadosdocentes SET nome = ?, formacao = ?, formacaoAdicionais = ?, projetos = ?, areaAtuacaoSenac = ? WHERE id = ?
        `, [nome, formacao, formacaoAdicionais, projetos, areaAtuacaoSenac, id])
        return rows
    }
    async deleteDocente(id) {
        const [rows] = await pool.query(`
            DELETE FROM dadosdocentes WHERE id = ${id}
        `)
        return rows
    }
}

export {DocenteController}