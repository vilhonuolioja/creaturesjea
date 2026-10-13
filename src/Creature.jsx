function Creature(props) {
    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'left 0.4s ease, top 0.4s ease',
        zIndex: 5
    };

    return (
        <div style={style} onClick={props.onWake}>
            <img 
                src={props.isAwake ? props.awakeImageUrl : props.sleepImageUrl} 
                alt={props.name} 
                width="120" 
                style={{ display: 'block', margin: '0 auto' }}
            />
            <p style={{ 
                margin: '5px 0 0 0', 
                backgroundColor: 'rgba(255, 255, 255, 0.85)', 
                borderRadius: '4px', 
                padding: '2px 8px',
                color: '#333',
                fontSize: '14px',
                fontWeight: '500',
                display: 'inline-block'
            }}>
                {props.name}, age {props.age}
            </p>
        </div>
    );
}

export default Creature;