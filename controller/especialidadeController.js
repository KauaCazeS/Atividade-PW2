const express = require('express');

const especialidadeModel = require('../model/especialidadeModel');

const router = express.Router();

router.post('/especialidade/inserir', (req,res)=>{
    let {nome_especialidade} = req.body;

    especialidadeModel.create(
        {
            nome_especialidade
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Especialidade criada!'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

router.get('/especialidade/selecionar/:id', (req,res)=>{
    let {id} = req.params;
    especialidadeModel.findByPk(id)
    .then(
        (especialidade)=>{
            res.json(especialidade);
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

router.put('/especialidade/atualizar/:id', (req,res)=>{
    let {nome_especialidade} = req.body;
    let {id} = req.params;
    especialidadeModel.update(
        {
            nome_especialidade
        },
        {
            where:{id}
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Especialidade atualizada!'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

router.delete('/especialidade/excluir/:id', (req,res)=>{
    let {id} = req.params;

    especialidadeModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Epecialidade deletada!'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus: true,
                mensageStatus: error
            });
        }
    );
});

module.exports = router;