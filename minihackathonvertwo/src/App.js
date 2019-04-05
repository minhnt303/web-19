import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {
  state = {
    click: false,
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    score1:[0],
    score2:[0],
    score3:[0],
    score4:[0],
  }
  handleSubmit = (e) => {
    e.preventDefault();

    //push new item to todo array
    const newplayer1 = this.state.player1;
    const newplayer2 = this.state.player2;
    const newplayer3 = this.state.player3;
    const newplayer4 = this.state.player4;
    console.log(newplayer1, newplayer2, newplayer3, newplayer4)
    this.setState({
      // todos: this.state.todos.push(newTodoItem)
      player1: newplayer1,
      player2: newplayer2,
      player3: newplayer3,
      player4: newplayer4,
    })
    //clear value of input
    console.log(this.state)
  }
  handleInputChange1 = (e) => {
    this.setState({
      player1: e.target.value,
    })
  }
  handleInputChange2 = (e) => {
    this.setState({
      player2: e.target.value,
    })
  }
  handleInputChange3 = (e) => {
    this.setState({
      player3: e.target.value,
    })
  }
  handleInputChange4 = (e) => {
    this.setState({
      player4: e.target.value,
    })
  }
  // handleClick = (e) => {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
  //   console.log(this.state.player1, this.state.player2)

  //   let click = false;
  //   if(this.state.player1 !== ''){
  //     click = true;
  //     console.log(click)
  //   }else{
  //     click = false;
  //     console.log(click)
  //   }
  //   console.log(click)
  //   return click;
  // }
  handleClick=(e)=>{
    if(this.state.player1 !== ''){
      this.setState({
        click: !this.state.click
      });
    }
    console.log(this.state.click);
  }
  render() {
    return (
      <div className="ScoreKeeper">
        <h1 className='header'>ScoreKeeper</h1>

        <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
          <input type='text' placeholder='Player 1'
            value={this.state.player1}
            onChange={this.handleInputChange1} className='player1' />

          <input type='text' placeholder='Player 2'
            value={this.state.player2}
            onChange={this.handleInputChange2} className='player2' />

          <input type='text' placeholder='Player 3'
            value={this.state.player3}
            onChange={this.handleInputChange3} className='player3' />

          <input type='text' placeholder='Player 4'
            value={this.state.player4}
            onChange={this.handleInputChange4} className='player4' />

          <button type='submit' className='create-button' onClick={this.handleClick}>Create new game</button>
        </form>
        <div className='game'>
          <Game item={[this.state.player1,this.state.player2,this.state.player3, this.state.player4]} 
          score = {this.state.score1}
          isDone={this.state.click === true}></Game>
        </div>
      </div>
    );
  }
}

export default App;
