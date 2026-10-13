import { useState } from 'react';

function Creature(props) {
    const [isAwake, setIsAwake] = useState(false);
    const [position, setPosition] = useState({ x: props.initialX, y: props.initialY });

    const handleClick = () => {
        const newAwakeState = !isAwake;
        setIsAwake(newAwakeState);

        if (newAwakeState) {
            setPosition({
                x: Math.floor(Math.random() * 600 + 50),
                y: Math.floor(Math.random() * 500 + 100)
            });
        }
    };

    const style = {
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'left 0.4s ease, top 0.4s ease',
        zIndex: 5
    };

    return (
        <div style={style} onClick={handleClick}>
            <img 
                src={isAwake ? props.awakeImageUrl : props.sleepImageUrl} 
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