import React from 'react'
import { makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    button: {
        backgroundColor:'#FFF',
        color: '#1B2B53',
        fontWeight: 'bold',
        fontSize: 16
    },
}));

export default function ButtonComp({ nameButton, linkBtn }) {
    const classes = useStyles();
    return (
        <ThemeProvider >
            <Button variant="contained" color="primary" type="submit" className={classes.button}>
                {nameButton}
            </Button>
        </ThemeProvider>
    )
}
