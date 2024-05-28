import React from 'react';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
    return (
        <div>
            <Typography variant="h2" color="textPrimary" gutterBottom>Contact</Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <PhoneIcon style={{ marginRight: '10px' }} />
                <Typography variant="body1" color="textPrimary">+261 34 89 734 47</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <EmailIcon style={{ marginRight: '10px' }} />
                <Typography variant="body1" color="textPrimary">harenaandriahaganirinaraelison@gmail.com</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <FacebookIcon style={{ marginRight: '10px' }} />
                <Typography variant="body1" color="textPrimary">Raelison Harena Andriahaganirina</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <LinkedInIcon style={{ marginRight: '10px' }} />
                <Typography variant="body1" color="textPrimary">
                    <a href="https://www.linkedin.com/in/harena-raelison-4aaa61268" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </Typography>
            </div>
        </div>
    );
}

export default Contact;
