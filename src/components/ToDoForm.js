import React, { useContext } from 'react';

import { useForm } from '../hooks/useForm';

import ToDoContext from '../context/toDoContext';

const ToDoForm = () => {

    const [ { description } , handleInputChange , resetFormValue ] = useForm( { description: '' } );
    const [ , dispatch ] = useContext( ToDoContext );

    const handleFormSubmit = ( e ) => {
        e.preventDefault();
        const btnAcion = document.querySelector("#button-form").innerHTML;
        let payload;
        let action;
        
        if(description.trim() < 1){
            return;
        }

        if( btnAcion.includes('Agregar') ){
            payload = {
               id: new Date().getTime(),
               description,
               state : 'pending'
           };
           action = {
              type: 'add',
              payload 
          };
        }else{
            payload = {
                newDescription: description,
                state : 'modified'
            };
            action = {
                type: 'modified',
                payload 
            };
        }
        dispatch( action );
        resetFormValue();
    }
    return (
        <form 
            onSubmit={ handleFormSubmit } 
            className="form"
        >
            <div className="form-group form__container">
                <label 
                    id ="label-form" 
                    className="mb-2 action-label form__container--label" 
                    htmlFor="description"
                >
                    Agregar Tarea
                </label>
                <input 
                    id="input-form"
                    onChange={ handleInputChange }
                    type="text" 
                    value ={ description } 
                    name = "description"
                    className="form-control form__container--input" 
                    autoComplete="off" 
                    placeholder="Contenido..."
                />
            </div>
            <button 
                id ="button-form" 
                type="submit" 
                className="action-button btn btn-outline-primary mt-1 form__container--btnSubmit"
            >
                Agregar
            </button>
        </form>
    );
}

export default ToDoForm;