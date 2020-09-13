import ToDos from './ToDos';
import { query } from './index';


class ToDo {
    async readAll(req, res) {
        const selectQuerry = 'SELECT * FROM todos;';
        const ToDo = await query(selectQuerry);
        if (!ToDo[0]) {
            return res.status(404).json({
                status: 404,
                error: 'No ToDO found',
            });
        }
        return res.status(200).json({
            status: 200,
            message: 'ToDos successfully retrieved',
            data: {
                ToDo,
            },
        });
    };
    async readById(req, res) {
        const id = parseInt(req.params.id, 10);
        const selectQuerry = 'SELECT * FROM todos WHERE id=$1;';
        const ToDo = await query(selectQuerry, [id]);
        if (!ToDo[0]) {
            return res.status(404).json({
                status: 404,
                error: 'No ToDO found',
            });
        }
        return res.status(200).json({
            status: 200,
            message: 'ToDo successfully retrieved',
            data: ToDo,
        });
    }

    async create(req, res) {
        const ToDo1 = {
            title: req.body.title,
            completed: req.body.completed,
        };
        const insertQuery = 'INSERT INTO todos (title,completed) VALUES ($1, $2) RETURNING *;';
        const ToDo = await query(insertQuery, [ToDo1.title, ToDo1.completed]);
        return res.status(201).json({
            status: 201,
            message: 'ToDo successfully created',
            data: ToDo,
        });

    };

    async update(req, res) {
        const id = req.params.id;

        const title = req.body.title;
        const completed = req.body.completed;
        const insertQuery = 'update todos set title=$1 , completed=$2 where id=$3 RETURNING *;';
        const ToDo = await query(insertQuery, [title, completed, id]);
        if (!ToDo[0]) {
            return res.status(404).json({
                status: 404,
                error: 'No ToDo found',
            });
        }
        return res.status(200).json({
            status: 200,
            message: 'ToDo successfully updated',
            data: ToDo,
        });

    }

    async deleteToDo(req, res) {
        const id = req.params.id;
        try {
            const deleteQuerry = 'DELETE FROM todos WHERE id=$1;';
            const ToDo = await query(deleteQuerry, [id]);
            
            return res.status(204).json({
                status: 204,
            });
        } catch (error) {
        }
    }
}
export default new ToDo();