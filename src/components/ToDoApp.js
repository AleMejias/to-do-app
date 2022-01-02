import React, { useContext } from "react";

import ToDoContext from "../context/toDoContext";

import ToDoForm from "./ToDoForm";
import ToDoListItem from "./ToDoListItem";


const ToDoApp = () => {
    const [ state ] = useContext( ToDoContext );

    return (
        <section className="container-fluid mt-3 list-container">
            <div className="row">
                <div className="col-12 col-md-7 col-sm-7 col-lg-7 col-xl-7 list-container__container">
                    <ol className="list-group list-group-numbered px-0">
                        { state.length !== 0 ? <ToDoListItem /> : "" }
                    </ol>
                </div>
                <div className=" col-12 col-md-5 col-sm-5 col-lg-5 col-xl-5 mb-4">
                    <ToDoForm />
                </div>
            </div>
        </section>
    );
} 

export default ToDoApp;