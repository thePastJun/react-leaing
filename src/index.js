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
function Clock(props) {
  return (
    <div>
        <h1>现在的时间为{props.date.toLocaleTimeString() }</h1>
        <h2>react学习第二天</h2>
    </div>
  )
}
setInterval(() =>{
  ReactDOM.render(
    <Clock  date = {new Date()} />,
    document.getElementById('root')
  )
},1000)


serviceWorker.unregister();
