import React, { useContext } from "react";

import ToDoContext from "../context/toDoContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [ state , dispatch ] = useContext( ToDoContext );

    const handleClearToDos = () => {
        const action = {
            type: 'clear',
            payload: []
        }
        dispatch(action);
    }

    const getCountToDos = () => {
        let pending = 0;
        let completed = 0;
        state.map( ( todo ) => (            
                (todo.state === 'completed')
                ? completed++
                : pending++ 
            )
        );

        return {
            pending,
            completed
        }
    }
    const { pending , completed } = getCountToDos();

    return (
        <section className="container header">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 header__container">
                    <div className="header__container--title">
                        <h1>To Do App</h1>
                    </div>
                    <div className="header__container--icon">
                        <FontAwesomeIcon icon={ faTasks }/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 header__buttons">
                    <button className="btn list-group-item-warning">
                        Pendientes <span className="badge">{ pending }</span>
                    </button>
                    <button className="btn list-group-item-info">
                        Completadas <span className="badge">{ completed }</span>
                    </button>
                    <button 
                        className="btn list-group-item-danger" 
                        onClick={ handleClearToDos }
                    >
                        Limpiar
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Header;