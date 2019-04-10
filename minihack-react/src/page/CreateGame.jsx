import React from 'react';
import { Button, Container, Form, Input, Alert } from 'reactstrap';
import axios from 'axios';
import config from '../config';
import { withRouter } from 'react-router-dom';

class CreateGame extends React.Component {
    state = {
        players: ['', '', '', ''],
        alertVisible: false,
    };

    handleInputChange = (index, value) => {
        this.setState({
            players: this.state.players.map((item, i) => {
                if (i === index) {
                    return value;
                } else {
                    return item;
                }
            }),
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        let isValid = true;
        for (let item of this.state.players) {
            if (!item) {
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            this.setState({
                alertVisible: true,
            });
        } else {
            this.setState({
                alertVisible: false,
            });

            // Send Ajax
            axios({
                url: `${config.baseUrl}/api/games`,
                method: 'post',
                data: {
                    players: this.state.players,
                },
            })
                .then((response) => {
                    console.log(response.data);
                    this.props.history.push(`/games/${response.data._id}`);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div className='create-game'>
                <Container>
                    <h2>Scrore Keeper</h2>

                    <Form onSubmit={this.handleSubmit}>
                        <Input
                            style={{ marginBottom: '10px' }}
                            type='text'
                            placeholder='Player 1'
                            value={this.state.players[0]}
                            onChange={(e) => { this.handleInputChange(0, e.target.value) }}
                        />
                        <Input
                            type='text'
                            placeholder='Player 2'
                            style={{ marginBottom: '10px' }}
                            value={this.state.players[1]}
                            onChange={(e) => { this.handleInputChange(1, e.target.value) }}
                        />
                        <Input
                            type='text'
                            placeholder='Player 3'
                            style={{ marginBottom: '10px' }}
                            value={this.state.players[2]}
                            onChange={(e) => { this.handleInputChange(2, e.target.value) }}
                        />
                        <Input
                            type='text'
                            placeholder='Player 4'
                            style={{ marginBottom: '10px' }}
                            value={this.state.players[3]}
                            onChange={(e) => { this.handleInputChange(3, e.target.value) }}
                        />
                        {this.state.alertVisible ? (
                            <Alert color='danger'>
                                Please input 4 players name
              </Alert>
                        ) : null}
                        <Button>Create Game</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default withRouter(CreateGame);