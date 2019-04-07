import React from 'react';
import { Button, Form, Input, Alert } from 'reactstrap';
import axios from 'axios'
import config from '../config'
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
            })
        });
    };
    handleSubmit = async (e) => {
        console.log(config.baseUrl)
        e.preventDefault();
        console.log(this.state);
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

            //send ajax
            axios({
                url: `${config.baseURL}/api/games`,
                // baseURL:config.baseURL,
                method: 'POST',
                data: {
                    players: this.state.players,
                }
            })
                .then((response) => {
                    console.log(response.data)
                }) //run when sucess
                .catch((err) => {
                    console.log(err)
                });//run when there are error
        };

    }
    render() {
        return (
            <div>
                <h2>Score Keeper</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        style={{
                            marginBottom: '10px',
                        }}
                        type='text'
                        placeholder='Player 1'
                        value={this.state.players[0]}
                        onChange={(e) => { this.handleInputChange(0, e.target.value) }} />
                    <Input
                        style={{ marginBottom: '10px' }}
                        type='text'
                        placeholder='Player 2'
                        value={this.state.players[1]}
                        onChange={(e) => { this.handleInputChange(1, e.target.value) }} />
                    <Input
                        style={{ marginBottom: '10px' }}
                        type='text'
                        placeholder='Player 3'
                        value={this.state.players[2]}
                        onChange={(e) => { this.handleInputChange(2, e.target.value) }} />
                    <Input
                        style={{ marginBottom: '10px' }}
                        type='text'
                        placeholder='Player 4'
                        value={this.state.players[3]}
                        onChange={(e) => { this.handleInputChange(3, e.target.value) }} />
                    {this.state.alertVisible ? (
                        <Alert color='danger'>
                            please input 4 players name
                        </Alert>
                    ) : null}
                    <Button color="secondary" size="lg">Create Game</Button>
                </Form>
            </div>
        );
    }
}

export default CreateGame;