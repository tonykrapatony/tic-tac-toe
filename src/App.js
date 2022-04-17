import { useState } from 'react';
import './App.css';
import Field from './components/Field';
import Message from './components/Message';
import MyButton from './components/UI/button/MyButton';
import classes from './components/UI/button/MyButton.module.css'

function App() {
    const [startClass, setStartClass] = useState(classes.btn);
    const [restartClass, setRestartClass] = useState('hiden');
    const [fieldClass, setFieldClass] = useState('hiden');
    const [squares, setSquares] = useState(new Array(9).fill(null));
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('');
    const winLines =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    const checkWiner = () => {
        let symbol = (count % 2 === 0) ? 'X' : 'O';
        for (let i=0; i<winLines.length; i++){
            let line = winLines[i];
            if(squares[line[0]] === symbol && squares[line[1]] === symbol && squares[line[2]] === symbol){
                setMsg(symbol+' winer');
                setTimeout(restartGame, 2000);
            }
        }
    }
    const handleClick = (event) => {
        let squareNum = event.target.getAttribute('num');
        let currentSquares = squares;
        if (currentSquares[squareNum] === null) {
            currentSquares[squareNum] = (count % 2 === 0) ? 'X' : 'O';
            squares.splice(squareNum, 1, currentSquares[squareNum]);
            setSquares(squares.slice());
            setCount(count + 1);
            setMsg('');
        } else {
            setMsg('Error');
        }
        checkWiner();
    }
    const beginGame = () => {
        setStartClass('hiden');
        setRestartClass(classes.btn);
        setFieldClass('field');
    }
    const restartGame = () => {
        setSquares(new Array(9).fill(null));
        setCount(0);
        setMsg('');
    }
    return (
        <div className="App">
            <div className='game_wrap'>
                <MyButton onClick={beginGame} className={startClass}>Begin game</MyButton>
                <MyButton onClick={restartGame} className={restartClass}>Restart</MyButton>
                <Message message={msg}/>
                <Field onClick={handleClick} className={fieldClass} squares={squares}/>
            </div>
        </div>
    );
}

export default App;
