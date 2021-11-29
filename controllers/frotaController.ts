import { Request, Response } from "express";
import { IClients } from './../models/frotas';
import ClientRepository from '../models/frotasModels';

async function home(req: Request, res: Response, next: any) {
    res.render('home');
};

async function index(req: Request, res: Response, next: any) {
    const tbl_frota = await ClientRepository.findAll();
    res.render('index', {tbl_frota: tbl_frota});
};

async function show(req: Request, res: Response, next: any) {
    const frota = await ClientRepository.findByPk(req.params.id);
    res.render('show', {frota: frota});
};

function create(req: Request, res: Response, next: any) {
    res.render('create');
};

async function store(req: Request, res: Response, next: any) {
    try {
        await ClientRepository.create(req.body as IClients);
        res.redirect('/tbl_frota');
    } catch (error) {
        console.log(error);
        res.status(500).end();
    };
};

async function edit(req: Request, res: Response, next: any) {
    try {
       const frota = await ClientRepository.findByPk(req.params.id);
       if (frota === null) {
           res.status(404).send('Não encontrado');
       } else {
           res.status(200).render('edit', { tbl_frota: frota });
       } 
    } catch (error) {
        console.log(error);
        res.status(500).end();
    };
};

async function update(req: Request, res: Response, next: any) {
    try {
       await ClientRepository.update(
           req.body as IClients, {
               where: {
                   id: req.params.id
               }
        });
        res.redirect('/tbl_frota'); 
    } catch (error) {
        console.log(error);
        res.status(500).end();
    };
};

async function destroy(req: Request, res: Response, next: any) {
    try {
       await ClientRepository.destroy({
           where: {
               id: req.params.id
           }
       });
       res.redirect('/tbl_frota');
    } catch (error) {
        console.log(error);
        res.status(500).end();
    };
};



export default { index, show, create, store, edit, update, destroy, home };