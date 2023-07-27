const express = require('express');

const insumosModel = require('../model/insumosModel');

const router = express.Router();

router.post('/insumos/inserir', (req,res)=>{
    let {nome_insumo, quantidade_insumo} = req.body;

    insumosModel.create(
        {
            quantidade_insumo,
            nome_insumo
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Insumos inseridos'
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

router.get('/insumos/selecionar/:id', (req,res)=>{
    let {id} = req.params;
    insumosModel.findByPk(id)
    .then(
        (insumos)=>{
            res.json(insumos);
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

router.put('/insumos/atualizar/:id', (req,res)=>{
    let {nome_insumo, quantidade_insumo} = req.body;
    let {id} = req.params;
    insumosModel.update(
        {
            quantidade_insumo,
            nome_insumo
        },
        {
            where:{id}
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Insumos atualizados'
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

router.delete('/insumos/excluir/:id', (req,res)=>{
    let {id} = req.params;
    insumosModel.destroy(
        {where:{id}}
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus: 'Insumos excluidos!'
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