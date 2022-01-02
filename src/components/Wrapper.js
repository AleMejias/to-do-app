import React , { useEffect, useReducer } from "react";

import Header from "./Header";
import ToDoApp from "./ToDoApp";

import { init } from "../states/init";

import { toDoReducer } from "../reducer/toDoReducer";

import ToDoContext from "../context/toDoContext";

import '../assets/scss/index.scss';

const Wrapper = () => {

    const [ state , dispatch ] = useReducer( toDoReducer , [] , init );

    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( state ) );
    } , [ state ]);

    return (
        <>
            <ToDoContext.Provider value = { [ state , dispatch ] }>
                <Header />
                <ToDoApp />
            </ToDoContext.Provider>
        </>
    );
}
export default Wrapper;