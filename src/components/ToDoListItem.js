import React, { useContext } from "react";

import ToDoContext from "../context/toDoContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle , faEdit , faTrashAlt , faCheckSquare } from "@fortawesome/free-regular-svg-icons";

const ToDoListItem = () => {

    const [ state , dispatch ] = useContext( ToDoContext );

    const handleToDoDelete = ( todo ) => {
        const action = {
            type: 'delete',
            payload:{
                id: todo.id,
                description: todo.description,
                state: todo.state
            }
        }
        dispatch( action );
    }
    const handleToDoCompleted = ( toDoId ) => {
        const action = {
            type: 'completed',
            payload:{
                id: toDoId,
                state: 'completed'
            }
        }
        dispatch( action );
    }
    const handleToggleToDoState = ( todo ) => {
        document.querySelector("#input-form").focus();
        const action = {
            type: 'toggle',
            payload:{
                id: todo.id,
                description: todo.description,
                state: 'modified'
            }
        }
        dispatch(action);
    }
    return (
        <>
            {
                state.map( (todos) => 
                    <li
                        key={ todos.id }
                        className={
                            `list-group-item d-flex justify-content-between align-items-start
                            ${ todos.state === 'pending' ? 'list-group-item-warning' : 
                               todos.state === 'completed' ? 'list-group-item-info' : 'list-group-item-primary'}
                               animate__animated animate__bounceInLeft `
                            }
                    >
                        <div className="ms-2 me-auto p-1">
                            { todos.description } .
                            {
                                todos.state === 'completed'
                                ? <FontAwesomeIcon  
                                    className="list-container__container--icon"
                                    icon={ faCheckCircle } />
                                : ""
                            }
                            
                        </div>
                        {
                            todos.state !== 'modified' && todos.state !== 'completed' 
                            ?
                                <>
                                    <button 
                                        className="badge border border-primary list-group-item-primary rounded-pill" 
                                        title="Actualizar"
                                        onClick={ () => handleToggleToDoState( todos ) }
                                    >
                                        <FontAwesomeIcon icon={ faEdit } />
                                    </button>
                                    <button 
                                        className="badge border border-danger list-group-item-danger rounded-pill" 
                                        title="Eliminar"
                                        onClick={ () => handleToDoDelete( todos ) }
                                    >
                                        <FontAwesomeIcon icon={ faTrashAlt } />
                                    </button>
                                    <button 
                                        className="badge border border-info list-group-item-info rounded-pill" 
                                        title="Completar"
                                        onClick={ () => handleToDoCompleted( todos.id ) }
                                    >
                                        <FontAwesomeIcon icon={ faCheckSquare } />
                                    </button>
                                </>
                            :
                            todos.state === 'completed'
                            ? 
                                <>
                                    <button 
                                        className="badge border border-danger list-group-item-danger rounded-pill animate__animated animate__pulse animate__infinite" 
                                        title="Eliminar"
                                        onClick={ () => handleToDoDelete( todos ) }
                                    >
                                        <FontAwesomeIcon icon={ faTrashAlt } />
                                    </button>
                                </>
                            : ""
                        }
                    </li>
                )
            }
        </>
    );
}

export default ToDoListItem;