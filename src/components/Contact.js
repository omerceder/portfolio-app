import React from 'react';
import { Container, Card, CardContent, TextField } from '@material-ui/core';
import ContactForm from './ContactForm.js';

class Contact extends React.Component {
    render() {
        return (
            <Container maxWidth="lg" className="fullview cardContainer">
                <Card className="fullview card">
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </Container>
        )
    };
};

export default Contact;