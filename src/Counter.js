import React, {Fragment, useState, useEffect} from 'react';
import InteractiveView from './InteractiveView';

const subscribe = count => {
    console.log(`Subscribed for ${count}`);
}

const unsubscribe = count => {
    console.log(`Unsubscribed for ${count}`);
}

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title = `Counter set to ${counter} | Ultimate Counter`
    }, [counter])

    useEffect(()=>{
        if(counter === 0){
           return undefined;
        } else {

            subscribe(counter)
        }

        return () => {
            unsubscribe(counter)
        }
    },[counter])

    const onCountClickHandler = () =>{
        setCounter(i => i + 1)
    }

    return (<Fragment>
        <p>{counter}</p>
        <button type="button" onClick={onCountClickHandler}>Increment</button>
    </Fragment>)

    // return (<InteractiveView
    // value = {counter}
    // onAction={onIncrementHandler}
    // actionText="Increment"
    //     />)
}

export default Counter