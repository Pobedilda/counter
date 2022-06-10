import React, {ChangeEvent, useState} from 'react';
import style from "../Settings/Settings.module.css";

export const Settings = () => {
     const [minValue, setMinValue] = useState(0);
     const [maxValue, setMaxValue] = useState(0);

    const getMinInputValue = (event: ChangeEvent<HTMLInputElement>)=>{
        let minValue = JSON.parse(event.currentTarget.value)
    }
    const getMaxInputValue = (event: ChangeEvent<HTMLInputElement>)=>{
        return
        let maxValue = JSON.parse(event.currentTarget.value)
    }
    const SetMinandMax = ()=>{
        setMaxValue(maxValue);
        setMinValue(minValue);
    }
    return (
            <div className={style.settingsContainer}>
                <div >
                        <p className={style.settingsText}>Start value: <input type="number" min="0" onChange={getMinInputValue}/></p>
                        <p className={style.settingsText}>Maximum value: <input type="number" min="0" onChange={getMaxInputValue}/></p>
                </div>
                <div className={style.buttonContainer}>
                    <button onClick={SetMinandMax}>Set</button>
                    {/*disabled={counter >= 5} onClick={clickInc}*/}
                </div>
            </div>
    );
};

