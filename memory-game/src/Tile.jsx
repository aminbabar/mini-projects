
function Tile({ tileIndex, tileColor }) {
    const tileClass = tileColor ? `tile ${tileColor}` : "tile";
    return (
        <div className={tileClass} data-index={tileIndex}></div>
    );
}

export default Tile;