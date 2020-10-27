import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import contactDetails from './dataStore';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        
    },
});



class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            openDialog: false,
            mainData:contactDetails
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));



    }

    onClickDialog = (e) => {
        this.setState({
            openDialog: true
        })
        console.log("calling")
    }


    render() {
        //this.check()
        const { classes } = this.props;
        // this.data()

        console.log("dkrgb", contactDetails)




        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
           
                    <div className={classes.root}>
                        <Paper elevation={3} style={{margin:"auto",width:"80%"}} >
                        <div style={{margin:"15px"}}>
                    <h3>List of Contacts</h3>
                    </div>
                    
                  
                            </Paper>
                        
                    </div>
                        </Typography>

                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(MainContainer)
