import React, { useState } from 'react'
import { Form } from '@unform/web'
import { useHistory } from "react-router-dom";

import { Backdrop, CircularProgress, Snackbar  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

import './Login.css'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Login() {
    const [passwordError, setPasswordError] = useState(false)
    const [open, setOpen] = useState(false);
    let history = useHistory();
    const classes = useStyles();
    const user = 'jm'
    const password = '123'

    
    

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setPasswordError(false);
      };


    function handleSubmit(data) {
        //
        if (data.user === user && data.password === password) {
            setOpen(true);
            setInterval(() => {
                history.push("/Dashboard");
            }, 1000)
        } else {
            setPasswordError(true)
        }
    }

    return (
        <Form className="Login" onSubmit={handleSubmit}>
            <h1>Fazer Login</h1>
            <div className="FormContent">
                <Input name="user" type="text" size="small" />
                <Input name="password" type="password" />

                <Button type="submit" nameButton="Entrar" />

                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>
            <Snackbar open={passwordError} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Senha Incorreta!
                </Alert>
            </Snackbar>
        </Form>
    )
}
