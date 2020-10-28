import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import "antd/dist/antd.css";
const { SubMenu } = Menu;

class App extends React.Component {
    state = {
        collapsed: false,
    };
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };
    render() {
        return (
            <div style={{ width: this.state.collapsed ? 80: 256,height: 937,background: '#000C17'}}>
                <div style={{width: '100%', position:"fixed",top: 0,left: 0,zIndex: 2,background: '#0D1A3E'}}>
                    <Button type="primary"  onClick={this.toggleCollapsed} style={{width: 80}}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                </div>
                <Menu
                    style={{paddingTop: 30}}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                        Option 3
                    </Menu.Item>
                    <SubMenu key="sub3" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="5">备品备件智能汇总查询统计</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="9">Option 5</Menu.Item>
                        <Menu.Item key="10">Option 6</Menu.Item>
                        <Menu.Item key="11">Option 7</Menu.Item>
                        <Menu.Item key="12">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="17">Option 5</Menu.Item>
                        <Menu.Item key="18">Option 6</Menu.Item>
                        <Menu.Item key="19">Option 7</Menu.Item>
                        <Menu.Item key="20">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="21">Option 5</Menu.Item>
                        <Menu.Item key="22">Option 6</Menu.Item>
                        <Menu.Item key="23">Option 7</Menu.Item>
                        <Menu.Item key="24">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="25">Option 5</Menu.Item>
                        <Menu.Item key="26">Option 6</Menu.Item>
                        <Menu.Item key="27">Option 7</Menu.Item>
                        <Menu.Item key="28">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="13">Option 9</Menu.Item>
                        <Menu.Item key="14">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="15">Option 11</Menu.Item>
                            <Menu.Item key="16">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className='square'
//                 onClick={()=> this.props.onClick()}>
//                     {this.props.value}
//             </button>
//         )
//     }
// }
// class Board extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//             date: new Date().toLocaleTimeString()
//         }
//     }
//     handleClick (i) {
//         const squares = this.state.squares.slice()
//         squares[i] = 'O'
//         this.setState({
//             squares: squares
//         })
//     }
//     renderSquare (i) {
//         return(
//             <Square
//                 value={this.state.squares[i]}
//                 onClick={() => this.handleClick(i)}
//             />
//         );
//     }
//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000);
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     tick() {
//         this.setState({
//             date: new Date().toLocaleTimeString()
//         });
//     }
//     render() {
//         const status = '开始选择： O'
//         const styleColor = {
//             margin: '20px 0',
//             fontSize: '24px',
//             color: '#666'
//         }
//         const statuStyle = {
//             padding: '0 0 10px 0',
//             fontSize: '16px',
//             color: '#999'
//         }
//         return (
//             <div>
//                 <div style={styleColor}>现在的时间为: {this.state.date}</div>
//                 <div style={statuStyle}>{status}</div>
//                 <div className='board-row'>
//                     {this.renderSquare(0)} {this.renderSquare(1)}  {this.renderSquare(2)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(3)} {this.renderSquare(4)}  {this.renderSquare(5)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(6)} {this.renderSquare(7)}  {this.renderSquare(8)}
//                 </div>
//             </div>
//         )
//     }
// }
// class Game extends React.Component {
//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="gamo-info"></div>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// )

serviceWorker.unregister();
