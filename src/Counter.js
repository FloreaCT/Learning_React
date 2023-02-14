import React, {Fragment, useState, useEffect} from 'react';
import InteractiveView from './InteractiveView';

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const [internalCount, setInternalCount] = useState(0);

    useEffect(()=>{
        document.title = `Counter set to ${counter} | Ultimate Counter`
        console.log("Title was set")
    }, [counter])

    const onCountClickHandler = () =>{
        setInternalCount(i => i + 1)
    }

    const onIncrementHandler = () => {
        setCounter(c => c + 1);
    }

    console.log('Main render return');

    return (<Fragment>
        <p>{counter}</p>
        <button type="button" onClick={onIncrementHandler}>Increment</button>
        <button type="button" onClick={onCountClickHandler}>Increment internal count</button>
    </Fragment>)
    // return (<InteractiveView
    // value = {counter}
    // onAction={onIncrementHandler}
    // actionText="Increment"
    //     />)
}

export default Counter