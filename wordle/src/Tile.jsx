
function Tile({ keyPressed, property }) {
    let tileClass = '';
    if (property) tileClass = ` ${property}`;
    return (
        <div className={`tile${tileClass}`}>{keyPressed}</div>
    );
}

export default Tile;




