import { NextFunction, Request, Response } from "express";
import TodoModel from '../model/model';

export const todos = (req: Request, res: Response, next: NextFunction) => {
    try {
        TodoModel.find()
            .then((results: any) => {
                return res.status(200).json(
                    {
                        todos: results,
                        count: results.length
                    }
                )
            });
    } catch (err) {
        console.log(err);
    }
};

export const todo = (req: Request, res: Response, next: NextFunction) => {
    let { title } = req.body;
    const todo = new TodoModel({
        title
    });

    return todo
    .save()
    .then((result: any) => {
        return res.status(201).json({
            todo: result
        });
    })
    .catch((err: any) => {
        console.log(err);
    });
};