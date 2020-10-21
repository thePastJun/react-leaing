import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';



// jsx语法
// ReactDOM.render(<App />,document.getElementById('root'));

// function clock() {
//   let time = new Date().toLocaleTimeString()
//   let element = (
//     <div>
//       <h1>现在的时间是{time }</h1>
//       <h2>react学习第二天</h2>
//     </div>
//   )
//   let root = document.getElementById('root')
//   ReactDOM.render(element,root)
// }
// setInterval(() => {
//   clock()
// }, 1000);

// react函数式组件渲染
// function Clock(props) {
//   return (
//     <div>
//         <h1>现在的时间为{props.date.toLocaleTimeString() }</h1>
//     </div>
//   )
// }
// setInterval(() =>{
//   ReactDOM.render(
//     <Clock  date = {new Date()} />,
//     document.getElementById('root')
//   )
// },1000)
class Square extends React.Component {
    render() {
        return (
            <button
                className='square'
                onClick={()=> this.props.onClick()}>
                    {this.props.value}
            </button>
        )
    }
}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            date: new Date().toLocaleTimeString()
        }
    }
    handleClick (i) {
        const squares = this.state.squares.slice()
        squares[i] = 'O'
        this.setState({
            squares: squares
        })
    }
    renderSquare (i) {
        return(
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }
    render() {
        const status = '开始选择： O'
        const styleColor = {
            margin: '20px 0',
            fontSize: '24px',
            color: '#666'
        }
        const statuStyle = {
            padding: '0 0 10px 0',
            fontSize: '16px',
            color: '#999'
        }
        return (
            <div>
                <div style={styleColor}>现在的时间为: {this.state.date}</div>
                <div style={statuStyle}>{status}</div>
                <div className='board-row'>
                    {this.renderSquare(0)} {this.renderSquare(1)}  {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)} {this.renderSquare(4)}  {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)} {this.renderSquare(7)}  {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="gamo-info"></div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)

serviceWorker.unregister();
