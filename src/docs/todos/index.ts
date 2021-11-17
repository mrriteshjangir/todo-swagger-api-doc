import getTodos from './read'
import createTodo from './add'

export default{
    paths:{
        '/todos':{
            ...getTodos,
            ...createTodo
        }
    }
}