function getNum() {
  return Math.floor(Math.random() * 10) + 1
}

class JSXDemo extends React.Component {
  render() {
    const num = getNum()
    return(
      <div>
        <h1>You number is {num}</h1>
        <p>{num === 7 ? "Congrats!" : "Unlucky..."}</p>
        {
          num === 7 &&
          <img src="https://media2.giphy.com/media/13ZHjidRzoi7n2/giphy.gif"/>
        }
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));


/*
class Hello extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
      </div>
    );
  }
}

// function Hello() {
//   return(
//     <div>
//       <h1>Hello there!</h1>
//       <h1>Hello there!</h1>
//       <h1>Hello there!</h1>
//     </div>
//   );
// }

ReactDOM.render(<Hello />, document.getElementById('root'));
*/


