import React from 'react';
import { useForm } from 'react-hook-form';
import { throttle,debounce  } from "throttle-debounce";

const SearchBoxComponent = ({onSearchSubmit}) =>{
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = params => onSearchSubmit({...params});
    
    const handleOnChange = params => { console.log(params.target.value);
        onSearchSubmit({'beer_name':params.target.value});
    }

    return (
        <form className="example" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" autoComplete="off" placeholder="Search for beer..." name="beer_name" ref={register({maxLength:30})} onChange={e=>throttle(10000, handleOnChange(e))}/>
        <button type="submit">Search</button>
        {((errors && errors.beer_name) 
            && <span className="error">Please enter correct input</span> )||<span className="add-margin"/>}    
      </form>
    )
}

export default SearchBoxComponent;