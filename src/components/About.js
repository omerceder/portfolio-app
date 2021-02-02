import React from 'react';
import { Container, Box, Card, CardContent, Typography } from '@material-ui/core';

class About extends React.Component {
    render() {
        return (
            <Container maxWidth="lg" className="fullview cardContainer">
                <Card className="fullview card">
                    <CardContent>
                        <Typography>
                            <h2>About Me</h2>
                            <p>
                                Web Developer <br />
                                Full Stack developer with experience in development and team leadership.  <br />
                                Server Side experience: AWS, Google Cloud, Apache, NGNIX, PHP, NodeJS.  <br />
                                Client Side experience: HTML5, JavaScript, ReactJS.  <br />
                                CSS: CSS3 including SASS.  <br />
                                Databases: MySQL, MongoDB.  <br />
                                Highly experienced with WordPress CMS: Bootstraping and Developing templates from scratch; Working with filters and hooks (WordPress Best Practices); Plugin Development.  <br />
                                Proficient with PHP: Using up-to-date functions and best practices.  <br />
                                Proficient with JavaScript: Using up-to-date ES2019 syntax; Harnessing the use of NodeJS & NPM; using and instantiating Classes in Object Oriented Designs.  <br />
                                Frameworks: Bootstrap, Foundation, ReactJS.  <br />
                                VCS: Experienced with Version Control Systems (Git).  <br />
                                Management: Experienced in Agile environments. Worked as a Senior developer and team lead.  <br />
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        )
    };
};

export default About;