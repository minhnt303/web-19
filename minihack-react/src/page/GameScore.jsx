// import React from 'react';
// import { withRouter } from 'react-router-dom'
// import axios from 'axios'
// import config from '../config'
// import { Table, Button } from 'reactstrap'
// import calculateSumOfScore from '../helpers/calculateSumOfScore'
// import { Container } from 'reactstrap'
// import TableRow from '../components/GameScore/TableRow'
// // const NewGame = (props) => {
// //     return (
// //         <Row style={{ width: '100%', marginTop: '10px' }}>
// //             <Col xs="4">Round {props.item}</Col>
// //             <Col xs="2"><Input
// //                 style={{}}
// //                 type='text'
// //                 placeholder='Score 1'
// //             /></Col>
// //             <Col xs="2"><Input
// //                 style={{}}
// //                 type='text'
// //                 placeholder='Score 2' /></Col>
// //             <Col xs="2"><Input
// //                 style={{}}
// //                 type='text'
// //                 placeholder='Score 3' /></Col>
// //             <Col xs="2"><Input
// //                 style={{}}
// //                 type='text'
// //                 placeholder='Score 4' /></Col>
// //         </Row>
// //     )
// // }


// class GameScore extends React.Component {
//     state = {
//         _id: '',
//         players: [],
//         scores: [],
//     }
//     componentDidMount() {
//         // get gameid
//         const pathname = this.props.location.pathname;
//         const gameId = pathname.split('/')[pathname.split('/').length - 1];

//         // cal ajax
//         axios({
//             url: `${config.baseUrl}/api/games/${gameId}`,
//             method: `get`,
//         })
//             .then((response) => {
//                 console.log(response.data);
//                 this.setState({
//                     _id: response.data._id,
//                     players: response.data.players,
//                     scores: response.data.scores,
//                 });
//             })
//             .catch((error) => console.log(error));
//     }

//     addRound = async () => {
//         // axios
//         axios({
//             method: 'put',
//             url: `${config.baseUrl}/api/games/${this.state._id}`,
//             data: {
//                 type: 'add_round',
//             },
//         })
//             .catch((error) => console.log(error));

//         // setState
//         this.setState({
//             scores: [...this.state.scores, [0, 0, 0, 0]],
//         });
//     }

//     handleInputChange = async (value, row, col) => {
//         // send axios to update database
//         await axios({
//             url: `${config.baseUrl}/api/games/${this.state._id}`,
//             method: `put`,
//             data: {
//                 type: 'update_scores',
//                 value: value,
//                 row: row,
//                 col: col,
//             },
//         })
//             .catch((error) => console.log(error));

//         // setState
//         this.setState({
//             scores: this.state.scores.map((item, index) => {
//                 if (index === row) {
//                     // update
//                     const newRow = item.map((score, i) => {
//                         if (i === col) {
//                             // update
//                             return value;
//                         } else {
//                             return score;
//                         }
//                     });

//                     return newRow;
//                 } else {
//                     return item;
//                 }
//             }),
//         });
//     }
//     // handleSubmit() {
//     //     console.log(12)
//     // }
//     // handleClick = () => {
//     //     // console.log('AddGame Button clicked')
//     //     let addGame = this.state.rounds.length + 1;
//     //     if (this.state.rounds.length === 0) {
//     //         this.setState({
//     //             rounds: [addGame]
//     //         })
//     //         console.log(addGame, this.state.rounds)
//     //     } else {
//     //         this.setState({
//     //             rounds: [...this.state.rounds, addGame]
//     //         })
//     //         console.log(addGame, this.state.rounds)
//     //     }

//     //     // const b = a.rounds.length;
//     //     // let addGame = b + 1;
//     //     // this.setState({        //     rounds: [...a.rounds, addGame]
//     //     // })
//     //     // console.log(a.rounds.length,addGame)
//     // }

//     render() {
//         const sumOfScore = calculateSumOfScore(this.state.scores)
//         console.log(this.state)
//         return (
//             <div className='game-score'>
//                 <Container>
//                     <h2>Score Keeper</h2>
//                     {/* <Row style={{ width: '100%' }}>
//                         <Col xs="4">Name</Col>
//                         <Col xs="2">{this.state.players[0]}</Col>
//                         <Col xs="2">{this.state.players[1]}</Col>
//                         <Col xs="2">{this.state.players[2]}</Col>
//                         <Col xs="2">{this.state.players[3]}</Col>
//                     </Row>
//                     <Row style={{ width: '100%', backgroundColor: '#BF1363', color: '#FBFEF9' }}>
//                         <Col xs="4">Sum of Score ({this.state.scores[0] + this.state.scores[1] + this.state.scores[2] + this.state.scores[3]})</Col>
//                         <Col xs="2">{this.state.scores[0]}</Col>
//                         <Col xs="2">{this.state.scores[1]}</Col>
//                         <Col xs="2">{this.state.scores[2]}</Col>
//                         <Col xs="2">{this.state.scores[3]}</Col>
//                     </Row>
//                     <div className='newgame'>
//                         {this.state.rounds.map((item, index) => {
//                             return (
//                                 <NewGame key={index} item={item} index={index}></NewGame>
//                             )
//                         })}
//                     </div>
//                     <Button color="secondary" size="lg" style={{ marginTop: '20px' }} onClick={this.handleClick}>
//                         Add Game
//                 </Button> */}
//                     <Table>
//                         <thead>
//                             <tr>
//                                 <td></td>
//                                 {this.state.players.map((player, index) => {
//                                     return <td key={index}>{player}</td>;
//                                 })}
//                             </tr>
//                             <tr>
//                                 <td>Sum of Score ({sumOfScore})</td>
//                                 {sumOfScore.map((item, index) => {
//                                     return <td key={index}>{item}</td>;
//                                 })}
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {this.state.scores.map((round, index) => (
//                                 <TableRow key={index} value={round} handleInputChange />
//                             ))}
//                         </tbody>
//                     </Table>
//                     <div>
//                         <Button onClick={this.addRound}>Add Round</Button>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }
// }

// export default withRouter(GameScore);

import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import { Container, Table, Button } from 'reactstrap';
import calculateSumOfScores from '../helpers/calculateSumOfScore';
import TableRow from '../components/GameScore/TableRow';

class GameScore extends React.Component {
  state = {
    _id: '',
    players: [],
    scores: [],
  };

  componentDidMount () {
    // get gameid
    const pathname = this.props.location.pathname;
    const gameId = pathname.split('/')[pathname.split('/').length - 1];

    // cal ajax
    axios({
      url: `${config.baseUrl}/api/games/${gameId}`,
      method: `get`,
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          _id: response.data._id,
          players: response.data.players,
          scores: response.data.scores,
        });
      })
      .catch((error) => console.log(error));
  }

  addRound = async () => {
    // axios
    axios({
      method: 'put',
      url: `${config.baseUrl}/api/games/${this.state._id}`,
      data: {
        type: 'add_round',
      },
    })
      .catch((error) => console.log(error));

    // setState
    this.setState({
      scores: [...this.state.scores, [0, 0, 0, 0]],
    });
  }

  handleInputChange = async (value, row, col) => {
    // send axios to update database
    await axios({
      url: `${config.baseUrl}/api/games/${this.state._id}`,
      method: `put`,
      data: {
        type: 'update_scores',
        value: value,
        row: row,
        col: col,
      },
    })
      .catch((error) => console.log(error));

    // setState
    this.setState({
      scores: this.state.scores.map((item, index) => {
        if (index === row) {
          // update
          const newRow = item.map((score, i) => {
            if (i === col) {
              // update
              return value;
            } else {
              return score;
            }
          });

          return newRow;
        } else {
          return item;
        }
      }),
    });
  }

  render () {
    const sumOfScores = calculateSumOfScores(this.state.scores);
    const totalScore = sumOfScores.reduce((item, currentValue) => Number(item) + Number(currentValue), 0);
    return (
      <div className='game-score'>
        <Container>
          <h2>Scrore Keeper</h2>

          <Table>
            <thead>
              <tr>
                <td></td>
                {this.state.players.map((player, index) => {
                  return <td key={index}>{player}</td>;
                })}
              </tr>

              <tr>
                <td>Sum of Score ({totalScore})</td>
                {sumOfScores.map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
              </tr>
            </thead>

            <tbody>
              {this.state.scores.map((round, index) => (
                <TableRow
                  key={index}
                  values={round}
                  rowIndex={index}
                  handleInputChange={this.handleInputChange}
                />
              ))}
            </tbody>
          </Table>

          <div>
            <Button onClick={this.addRound}>Add Round</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(GameScore);