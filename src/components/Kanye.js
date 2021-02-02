import React from 'react';
import { Container, Card, CardContent, Button, Grid } from '@material-ui/core';
import kanye from '../api/kanye';

class Kanye extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = { 
            quote: 'Kanye Quote',
            img: './images/kanye0.jpeg'
        };
    }
    
    async onKanyeClick () {
        const response = await kanye.get();
        const randImgNum =  Math.floor(Math.random() * Math.floor(5));

        this.setState({ quote: response.data });
        this.setState({ img: './images/kanye' + randImgNum + '.jpeg' });
    }

    render() {
        return (
            <Container maxWidth="lg" className="fullview cardContainer">
                <Card className="fullview card">
                    <CardContent>
                        <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        >

                            <q>{this.state.quote}</q>
                            <br />
                            <Button variant="contained" onClick={() => this.onKanyeClick()} >Kanye</Button>
                            <br />
                            <img alt="Kanye" src={this.state.img} style={{width: '100%'}}></img>
                        
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        )
    };
};

export default Kanye;