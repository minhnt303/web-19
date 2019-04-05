import React from 'react';
import './App.css';
import Round from './Round';
import { Container, Row, Col } from 'bootstrap-4-react';
let score1 = 0, score2 = 0, score3 = 0, score4 = 0;
let round = 1;
let roundcol = [1];
function handleSubmit(e) {
    e.preventDefault();
    console.log(score1)
    return (
        <h1>jhsjj</h1>
    )
}
function handleScoreChange1(e) {
    console.log(e.target.value)
    score1 = e.target.value;
    console.log(score1)
}
function handleScoreChange2(e) {
    console.log(e.target.value)
}
function handleScoreChange3(e) {
    console.log(e.target.value)
}
function handleScoreChange4(e) {
    console.log(e.target.value)
}

function handleClick(e){
    round++;
    roundcol[round-1] = round;
    console.log(round)
    console.log(roundcol)
  }
const Game = (props) => {
    console.log(props)
    console.log(score1)
    //   handleInputChange2 = (e) => {
    //     this.setState({
    //       player2: e.target.value,
    //     })
    //   }
    //   handleInputChange3 = (e) => {
    //     this.setState({
    //       player3: e.target.value,
    //     })
    //   }
    //   handleInputChange4 = (e) => {
    //     this.setState({
    //       player4: e.target.value,
    //     })
    //   }
    return (
        <div>
            {props.isDone ?
                <div>
                    <h1 className='header'>ScoreKeeper</h1>
                    <form onSubmit={handleSubmit}>
                        <Container className='row'>
                            <Row className='name'>
                                <Col col="sm"></Col>
                                <Col col="sm">{props.item[0]}</Col>
                                <Col col="sm">{props.item[1]}</Col>
                                <Col col="sm">{props.item[2]}</Col>
                                <Col col="sm">{props.item[3]}</Col>
                            </Row>
                            <Row className='score'>
                                <Col col="sm">Sum of Score (0)</Col>
                                <Col col="sm">{props.score.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <h6 key={index}>{item}</h6>
                                    )
                                })}</Col>
                                <Col col="sm">Score 2</Col>
                                <Col col="sm">Score 3</Col>
                                <Col col="sm">Score 4</Col>
                            </Row>
                            <Row className='round'>
                                <Col col="sm">Round 1</Col>
                                <Col col="sm"><input type='text' className='score1' onChange={handleScoreChange1}></input></Col>
                                <Col col="sm"><input type='text' className='score2' onChange={handleScoreChange1}></input></Col>
                                <Col col="sm"><input type='text' className='score3' onChange={handleScoreChange1}></input></Col>
                                <Col col="sm"><input type='text' className='score4' onChange={handleScoreChange1}></input></Col>
                            </Row>
                            {roundcol.map((item, index) => {
                                return(
                                    <Round key={index} item={item}></Round>
                                )
                            })}
                        </Container>
                        <div className='text-center'>
                            <button type='submit' className='create-button' onClick={handleClick}>Add round</button>
                        </div>
                    </form>
                </div>

                : ''}
        </div>
    );
};

export default Game;//export default chỉ export 1 file 1 lần còn export {TodoItem} là cho nhiều file