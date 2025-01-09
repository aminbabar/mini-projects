import TipView from "./TipView";
import { useState } from "react";

function TipCalculator() {
    const [tipObject, setTipObject] = useState({
        bill: 50,
        tipPercentage: 18,
        numPeople: 1
    });

    function handleChange(e) {
        setTipObject({...tipObject, [e.target.name]: e.target.value});
    }

    const {bill, tipPercentage, numPeople} = tipObject;
    return(
        <>
            <label htmlFor="bill">
                Bill
            </label>
            <input type="number" name="bill" value={bill} onChange={handleChange} />

            <label htmlFor="tipPercentage" >
                Tip Percentage
            </label>
            <input type="number" name="tipPercentage" value={tipPercentage} onChange={handleChange} />

            <label htmlFor="numPeople">
                Number of People
            </label>
            <input type="number" name="numPeople" value={numPeople} onChange={handleChange} />

            <TipView tipObject={tipObject}/>
        </>
    );
}

export default TipCalculator;
