import { useRef } from "react"

export const TodoAdd = ({ onNewTodo }) => {

    const inputRef = useRef()

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTodo = {

            id: new Date().getTime(),
            description: inputRef.current.value,
            done: false
        }

        onNewTodo(newTodo)

    }

    return (

        <form onSubmit={(event) => onFormSubmit(event)}>

            <input

                type="text"
                placeholder='Tarea'
                className='form-control'
                ref={inputRef}
            />

            <button

                type='submit'
                className='btn btn-outline-primary mt-1'
            >

                Agregar

            </button >

            

        </form >
    )

}