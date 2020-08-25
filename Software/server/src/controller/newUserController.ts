import {Request, Response} from 'express'
import db from '../database/connections'
import { isNull } from 'util';

interface checkUser{
    id: number;
    username: string;
    password: string;
}

export default class newUserController{
    async login(request: Request, response: Response){
        const filters = request.query;
        const Oemp = [];

        const username = filters.username as string;
        const password = filters.password as string;

        if(!username || !password){
            return response.status(400).json({
                error: 'Login or password are invalid'
            });
        }
        const checkLogin = await db('users')
        .where('username', '=', username)
        .where('password', '=', password)
        .select(['users.*']);

        console.log(checkLogin);


        if(checkLogin.length === [].length ){
            return response.status(400).json({
                error: 'Login or password are wrong'
            });
        } 
        else {
            return response.status(201).json({
                success: 'Login are done'
            })
        }


    }
    async create(request: Request, response: Response){
        const {
            username,
            password
        } = request.body;

        const isDuplicate = await db('users')
        .where('username', '=', username)
        .select(['users.*']);

        if(isDuplicate.length >= 1 ){
            return response.status(400).json({
                error: 'This username alredy exists'
            });
        } 

        
        const trx = await db.transaction();
        try{
            await trx('users').insert({
                username,
                password
            });

            await trx.commit();
            return response.status(201).send();
        }catch(err){
            await trx.rollback();
            return response.status(400).json({
                error: 'Sqlite error username'
            });
        }

    }
}