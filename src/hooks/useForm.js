import { useState } from "react"



export const useForm = ( initialValue = {} ) => {
    const [ valueForm , setValueForm ] = useState( initialValue );

    const handleInputChange = ( e ) => {
        setValueForm( {
            ...valueForm,
            [ e.target.name ] : e.target.value
        } );
    }
    const resetFormValue = () => {
        setValueForm( initialValue );
    }


    return [ valueForm , handleInputChange , resetFormValue  ];
}