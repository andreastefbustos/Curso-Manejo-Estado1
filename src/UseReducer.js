//Estado compuesto
const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};

//reducer recibe dos parametros, el primero el initialState, y despues va hacer el estado con todas las actualizaciones, BASE.

// const reducer = (state, action) => {};

//FORMA 1.

//hay que validar cual es el action.type. Action va ser un objeto que tiene type, y ese type es el que nos va a decir,
//cual es el nuevo objeto (el nuevo estado compuesto) de nuestra aplicacion.
const reducerIf = (state,action) => {
    if(action.type === 'ERROR'){
        return {
            ...state,
            error: true,
            loading: false,
        }
    } else if(action.type === 'CHECK'){
        return {
            ...state,
            loading: true,
        }
    } else {
        return {
            ...state,
        }
    }
};

//FORMA 2. forma mas popular 

const reducerSwitch = (state, action) => {
    switch(action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        case 'CHECK':
            return {
                ...state,
                loading: false,
            };
        default:
            return{
                ...state,
            };    
    }
};

//FORMA 3. reducer object

//devuelve un objeto 

const reducerObject = (state) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false
    },
    'CHECK': {
        ...state,
        loading: false,
    }
});

const reducer = (state, action) => {
    //se le pregunta que si dentro de ese objeto existe algun objeto que se llame como action.type[]
    if(reducerObject(state)[action.type]){
        return reducerObject(state)[action.type]
    } else {
        return state;
    }
};

