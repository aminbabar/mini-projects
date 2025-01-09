function TipView({ tipObject }) {
    function calculateTip() {
        const { bill, tipPercentage, numPeople } = tipObject;
        if (bill && tipPercentage && numPeople) {
            const totalTip = (parseInt(bill) * parseInt(tipPercentage) * 0.01);
            const tipPerPerson = (totalTip / numPeople);
            return [totalTip, tipPerPerson].map((ele) => `$${ele.toFixed(2)}`);
        } else {
            return ['-', '-'];
        }
    }

    const [totalTip, tipPerPerson] = calculateTip();
    return (
        <>
            <p>Total Tip: {totalTip}</p>
            <p>Tip Per Person: {tipPerPerson}</p>
        </>
    )
}

export default TipView;