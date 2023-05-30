import React, { useState } from 'react'

export const useForm = (initialForm= {}) => {
  
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
        const {name, value}= target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    } 

    return {
        ...formState, //expone todas las propiedades que se envien (initialForm)
        formState,
        onInputChange,
        onResetForm
    }
}