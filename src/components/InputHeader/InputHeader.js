import Labels from "../InputLabels/Labels";
import propTypes from 'prop-types'
import { useState } from "react";

function InputHeader(props) {
    const labels=['Дата (ДД.ММ.ГГ)', 'Пройдено км']
    const [date, setDate] = useState('')
    const [distance, setDistance] = useState(0)

    const handleChangeDate = (evt) => {
        setDate(evt.target.value)
    }

    const handleChangeDistance = (evt) => {
        let d = parseInt(evt.target.value, 10)
        setDistance(d)
    }

    return (
        <div className="InputHeader">
            <Labels labels={labels}/>
            <div className="inputs">
                <input type='date' onChange={handleChangeDate}></input>
                <input type='number' min="0" step="1" onChange={handleChangeDistance}></input>
                <button onClick={() => props.addData({date: date, distance: distance})}>OK</button>
            </div>
            
        </div>
    );
}

InputHeader.propTypes = {
    addData: propTypes.func
}

export default InputHeader;
