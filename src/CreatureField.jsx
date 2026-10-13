import { useState } from 'react';
import Creature from './Creature.jsx';

function CreatureField() {
    const [creatures, setCreatures] = useState([
        {
            id: 1, name: "Mr. Fresh", age: 3, isAwake: false,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140
        },
        {
            id: 2, name: "Meimei", age: 5, isAwake: false,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260
        },
        {
            id: 3, name: "Bingus", age: 2, isAwake: false,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40
        },
        {
            id: 4, name: "Leipä", age: 4, isAwake: false,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420
        },
        {
            id: 5, name: "Mista", age: 4, isAwake: false,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590
        }
    ]);

    const handleWake = (id) => {
        setCreatures(prevCreatures =>
            prevCreatures.map(creature => {
                if (creature.id === id) {
                    const newIsAwake = !creature.isAwake;
                    return {
                        ...creature,
                        isAwake: newIsAwake,
                        x: newIsAwake ? Math.floor(Math.random() * 600 + 50) : creature.x,
                        y: newIsAwake ? Math.floor(Math.random() * 500 + 100) : creature.y
                    };
                }
                return creature;
            })
        );
    };

    const areAllAwake = creatures.every(c => c.isAwake);

    const toggleAll = () => {
        const targetState = !areAllAwake;
        setCreatures(prevCreatures =>
            prevCreatures.map(creature => ({
                ...creature,
                isAwake: targetState,
                x: targetState ? Math.floor(Math.random() * 600 + 50) : creature.x,
                y: targetState ? Math.floor(Math.random() * 500 + 100) : creature.y
            }))
        );
    };

    const awakeCount = creatures.filter(c => c.isAwake).length;
    const allAsleep = awakeCount === 0;

    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: areAllAwake ? '#88c999' : (allAsleep ? '#2d3b2b' : '#6b8c66'),
        color: allAsleep ? '#ffffff' : '#000000',
        transition: 'background-color 0.5s ease',
        overflow: 'hidden'
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '20px 0',
        zIndex: 10,
        position: 'relative'
    };

    return (
        <div style={fieldStyle}>
            <div style={headerStyle}>
                <h2 style={{ margin: 0 }}>
                    {awakeCount} of {creatures.length} creatures awake
                </h2>
                <button 
                    onClick={toggleAll}
                    style={{
                        padding: '10px 15px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        border: '1px solid #333',
                        backgroundColor: '#fff',
                        color: '#000',
                        fontWeight: 'bold'
                    }}
                >
                    {areAllAwake ? 'Let all sleep' : 'Wake all'}
                </button>
            </div>

            {creatures.map(creature => (
                <Creature
                    key={creature.id}
                    name={creature.name}
                    age={creature.age}
                    sleepImageUrl={creature.sleepImageUrl}
                    awakeImageUrl={creature.awakeImageUrl}
                    x={creature.x} 
                    y={creature.y}
                    isAwake={creature.isAwake}
                    onWake={() => handleWake(creature.id)} 
                />
            ))} 
        </div>
    );
}

export default CreatureField;