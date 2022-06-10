import React, {useEffect, useState} from 'react';
import style from './Counter.module.css'

type CounterType = {}

export const Counter: React.FC<CounterType> = () => {
    const [counter, setCounter] = useState(0);

    useEffect(()=>{ //every time after counter change
        let valueAsString = localStorage.getItem("counterValue");
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue);
        }
    }, [])

    useEffect(()=>{ //every time after counter change
        if(counter !== 0){
            localStorage.setItem("counterValue", JSON.stringify(counter));
        }

    }, [counter])

    const clickInc = () => {
        setCounter(counter + 1)
    }

    const clickReset = () => {
        setCounter(0);
    }
    // const getFromStore = () => {
    //     let valueAsString = localStorage.getItem("counterValue");
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setCounter(newValue);
    //     }
    // }


    return (
        <div className={style.counterContainer}>
            <div className={style.countText}>
                <div className={counter >= 5 ? "max" : ""}>
                    <p className={style.text}>
                        {counter}
                    </p>
                </div>
            </div>
            <div className={style.buttonContainer}>
                <button disabled={counter >= 5} onClick={clickInc}>More</button>
                <button disabled={counter <= 0} onClick={clickReset}>Reset</button>
                {/*<button onClick={getFromStore}>getFromStore</button>*/}
            </div>
        </div>
    );
};

