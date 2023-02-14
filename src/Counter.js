import React, {Fragment, useState, useEffect} from 'react';
import InteractiveView from './InteractiveView';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title = `Counter set to ${counter} | Ultimate Counter`
        console.log("Title was set")
    }, [counter])

    useEffect(()=>{
        const savedCounterValue = localStorage.getItem('ultimateCounter')
        if (savedCounterValue != null){
            setCounter(parseInt(savedCounterValue, 10))
        }
    }, [])
    const onCountClickHandler = () =>{
        setCounter(i => i + 1)
    }

    const onSaveClickHandler = () => {
        localStorage.setItem('ultimateCounter', counter)
    } 
    return (<Fragment>
        <p>{counter}</p>
        <button type="button" onClick={onCountClickHandler}>Increment</button>
        <button type="button" onClick={onSaveClickHandler}>Save Counter Value</button>
    </Fragment>)
    // return (<InteractiveView
    // value = {counter}
    // onAction={onIncrementHandler}
    // actionText="Increment"
    //     />)
}

export default Counter