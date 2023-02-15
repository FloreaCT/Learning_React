import React, {useState} from 'react'
import './css/form.css'

const initialState = {
    firstName: '',
    lastName: '',
    biography: '',
    transport: '',
    agree: false,
    breakfast: false,
    lunch: false,
    dinner: false,
    shirtSize: ''
}

const Form = () => {

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: ''
    })

    const onChangeHandler = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setFormState({
            ...formState, 
            [e.target.name]: value
        })

    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formState);

     }

    const onClickHandler = () => {
        setFormState(initialState)
    }

    return (
    <form onSubmit={onSubmitHandler}>
    <span>{`Your name is ${formState.firstName} ${formState.lastName}`}</span>
        <label htmlFor='firstName'>First Name</label>
        <input name="firstName" id="firstName" onChange={onChangeHandler} value={formState.firstName}></input>
        <label htmlFor='lastName'>Last Name</label>
        <input name="lastName" id="lastName" onChange={onChangeHandler} value={formState.lastName}></input>
        <label htmlFor='biograpgy'>Tell us bit about yourself: </label>
        <textarea
        id="biography"
        name="biography"
        rows="10"
        onChange={onChangeHandler}
        value={formState.biography}
        ></textarea>
        <label htmlFor='transport'>Preffered transport</label>
        <select 
        id="transport"
        name="transport"
        onChange={onChangeHandler}
        value={formState.transport}
        >
            <option>Please select</option>
            <option value="planes">Planes</option>
            <option value="trains">Trains</option>
            <option value="cars">Cars</option>
            <option value="boats">Boats</option>
        </select>
        <fieldset>
        <legend>Select your meals</legend>
        <input type="checkbox"
        id="breakfast"
        name="breakfast"
        onChange={onChangeHandler}
        checked={formState.breakfast}></input>
        <label htmlFor='breakfast'>Breakfast</label>
        <input type="checkbox"
        id="lunch"
        name="lunch"
        onChange={onChangeHandler}
        checked={formState.lunch}></input>
        <label htmlFor='lunch'>Lunch</label>
        <input type="checkbox"
        id="dinner"
        name="dinner"
        onChange={onChangeHandler}
        checked={formState.dinner}></input>
        <label htmlFor='dinner'>Dinner</label>
        </fieldset>
  
        <fieldset>
            <legend>T-shirt size</legend>
            <input 
            type="radio"
            id="sizeS"
            name="shirtSize"
            value="s"
            onChange={onChangeHandler}
            checked={formState.shirtSize === 's'}></input>
            <label htmlFor='sizeS'>Small</label>
            <input 
            type="radio"
            id="sizeM"
            name="shirtSize"
            value="m"
            onChange={onChangeHandler}
            checked={formState.shirtSize === 'm'}></input>
            <label htmlFor='sizeM'>Medium</label>
            <input 
            type="radio"
            id="sizeL"
            name="shirtSize"
            value="l"
            onChange={onChangeHandler}
            checked={formState.shirtSize === 'l'}></input>
            <label htmlFor='sizeL'>Large</label>
        </fieldset>

        <fieldset>
        <label htmlFor='agree'>Agree to our terms</label>
        <input 
        type="checkbox"
        id="agree"
        name="agree"
        onChange={onChangeHandler}
        checked={formState.agree}
        ></input>
        </fieldset>

        <button type="submit">Save</button>
        <button type="button" onClick={onClickHandler}>Clear Values</button>
    </form>
    )
}

export default Form;