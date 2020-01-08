function randomSymbol(symbols) {
  return symbols[Math.floor(Math.random() * 3)];
}

class Machine extends React.Component {
  render() {
    const symbols = [this.props.s1, this.props.s2, this.props.s3];
    const s1 = randomSymbol(symbols);
    const s2 = randomSymbol(symbols);
    const s3 = randomSymbol(symbols);
    const winner = (s1 === s2) && (s2 === s3);
    const symbolStyle = {fontSize: '24px', backgroundColor: 'Linen'};

    return (
      <div>
        <p style={symbolStyle}>{s1} {s2} {s3}</p>
        <p className={winner ? 'win' : 'lose'}>
          {winner ? 'YOU WIN!' : 'YOU LOSE!'}
        </p>
        <p style={{fontSize: '36px'}, {backgroundColor: 'SkyBlue'}}>Let's play!</p>
      </div>
    )
  }
}