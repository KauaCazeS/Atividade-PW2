const express = require('express');

const salaModel = require('../model/salaModel');

const router = express.Router();

router.post('/sala/inserir', (req,res)=>{
    let {num_sala, tblEspecialidadeId} = req.body;
    salaModel.create(
        {
            num_sala,
            tblEspecialidadeId
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Sala cadastrada!'
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

router.get('/sala/selecionar/:id', (req,res)=>{
    let {id} = req.params;
    salaModel.findByPk(id)
    .then(
        (sala)=>{
            res.json(sala);
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

router.put('/sala/atualizar/:id', (req,res)=>{
    let {num_sala} = req.body;
    let {id} = req.params;
    salaModel.update(
        {
            num_sala
        },
        {
            where:{id}
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Sala atualizada!'
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

router.delete('/sala/excluir/:id', (req,res)=>{
    let {id} = req.params;
    salaModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Sala demolida!'
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