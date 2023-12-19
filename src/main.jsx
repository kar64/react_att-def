import React from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom/client';
import {Header}from './components/Header';
import{Counter}from'./components/Counter';

const App=()=>{
    return(
        <>
        <Header/>
        <Counter/>
        </>
        
    )
}

// function App(){
//     return(
//        <>
//             <Header/>
           
//             <Footer/>
//        </>
//     )
        
// }

// class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   componentDidMount() {}
//   componentDidUpdate() {}
//   componentWillUnmount() {}
//   render() {
//     return (
//       <div className="App">
//         <h1>Zdorova class</h1>
//       </div>
//     );
//   }
// }

//ReactDom.render(<App />,document.querySelector('#root'));
const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)