class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Slot Machines!</h1>
        <Hello 
          to="Pocky" 
          from="Cookie"
          bangs={4}
          img="https://images.unsplash.com/photo-1550681560-af9bc1cb339e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));