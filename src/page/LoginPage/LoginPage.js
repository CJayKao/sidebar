import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';

import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    root: {
        'position':'70%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function LoginPage() {
    const [name, setName] = React.useState('Composed TextField');
    const classes = useStyles();

    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <FormControl>
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" value={name} onChange={handleChange} />
                </FormControl>
            </div>
            <div><FormControl>
                <InputLabel htmlFor="component-helper">Name</InputLabel>
                <Input
                    id="component-helper"
                    value={name}
                    onChange={handleChange}
                    aria-describedby="component-helper-text"
                />
                <FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
            </FormControl></div>


        </form>

    )
}


