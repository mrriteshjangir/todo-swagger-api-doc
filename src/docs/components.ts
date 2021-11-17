export default{
    components:{
        schemas:{
            id:{
                type:'string',
                description:"An id of a todo",
                example: "tyVgf"
            },
            Todo:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"Todo identification number",
                        example:"ytyVgh"
                    },
                    title:{
                        type:'string',
                        description:"Todo's title",
                        example:"Coding in JavaScript"
                    },
                }
            },
            TodoInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Todo's title",
                        example:"Coding in JavaScript"
                    },
                }
            }
        }
    }
}