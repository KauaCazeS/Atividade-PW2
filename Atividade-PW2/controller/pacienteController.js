const express = require('express');
const patienteModel = require('../model/pacienteModel');
const upload = require('../helpers/upload/upload');

const router = express.Router();

router.post('/paciente/cadastro', upload.array('imagem_peq', 2), (req,res)=>{


    let { nome_paciente, telefone_paciente, celular_paciente, email_paciente, nome_responsavel, telefone_responsavel } = req.body;
    let imagem_peq = req.files[0].path;

    patienteModel.create(
        {
        nome_paciente,
        telefone_paciente,
        celular_paciente,
        email_paciente,
        nome_responsavel,
        telefone_responsavel,
        imagem_peq
        }

    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus: false,
                mensageStatus:'Paciente cadastrado!'
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