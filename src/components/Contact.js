import React from 'react';
import { Container, Card, TextField } from '@material-ui/core';

class Contact extends React.Component {
    render() {
        return (
            <Container maxWidth="lg" className="fullview cardContainer">
                <Card className="fullview card">
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Standard" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </form>
                </Card>
            </Container>
        )
    };
};

export default Contact;