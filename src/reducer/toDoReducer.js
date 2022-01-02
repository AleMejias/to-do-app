
export const toDoReducer = ( state = [] , action ) => {

    let newState = state;

    switch ( action.type ) {
        case 'add':
            newState = [ ...state , action.payload ];
            break;
        case 'completed':
            newState = state.map( todo => 
                ( todo.id === action.payload.id )
                ? { ...todo , state : action.payload.state}
                : todo
            ) 
            break;
        case 'clear':
            localStorage.clear();
            newState = action.payload;
            break;
        case 'delete':
            newState = state.filter( (todo) => todo.id !== action.payload.id );
            break;
        case 'modified':
            newState = state.map( todo =>
                ( todo.state === 'modified' )
                ?  {...todo , description: action.payload.newDescription , state : 'pending'}
                : todo
             )
            document.querySelector("#label-form").innerHTML = "Agregar Tarea";
            document.querySelector("#button-form").innerHTML = "Agregar";
            break;
        case 'toggle':
            document.querySelector("#label-form").innerHTML = "Editar Tarea";
            document.querySelector("#button-form").innerHTML = "Editar"
            newState = state.map( todo => 
                (todo.id === action.payload.id)
                ? {...todo , state:action.payload.state}
                : todo   
            )
            break;
        default:
            newState = state;
    }

    return newState;
}