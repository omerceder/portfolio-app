import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';

const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { fullname, email } = e.target.elements;
        let details = {
            name: fullname.value,
            email: email.value,
            message: 'Message recieved from: '+fullname.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form onSubmit={handleSubmit} className="form">
            <TextField id="fullname" htmlFor="fullname" label="Full Name" className="form-el" />
            <TextField id="email" htmlFor="email" label="E-Mail" className="form-el" />
            <Button type="submit" className="form-el">{status}</Button>
        </form>
    );
};

export default ContactForm;
