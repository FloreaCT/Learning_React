import React, {useState} from 'react';

const AnotherForm = ({onSubmit}) => {

    const intialEntryState = {
        recordName: '',
        artistName: '',
        description: ''
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(!entry.recordName || !entry.artistName || !entry.description){
            return
        }

        onSubmit({...entry})
        setEntry(intialEntryState)
    }

    const [entry, setEntry] = useState(intialEntryState)

    const onChangeHandler = e => {
        setEntry({
        ...entry,
        [e.target.name]: e.target.value
        })
    }

    return <form onSubmit={onSubmitHandler}>
        <label htmlFor="recordName">Record Name</label>
        <input 
        id="recordName" 
        name='recordName' 
        onChange={onChangeHandler} 
        value={entry.recordName}></input>

        <label htmlFor="artistName">Artist Name</label>
        <input 
        id="artistName" 
        name="artistName" 
        onChange={onChangeHandler} 
        value={entry.artistName}></input>

        <label htmlFor="description">Description</label>
        <textarea 
        id="description" 
        name="description" 
        onChange={onChangeHandler} 
        value={entry.description}></textarea>
        <button type="submit">Add</button>
    </form>
}
export default AnotherForm