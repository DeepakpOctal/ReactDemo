import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import contactDetails from './dataStore';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(7),
            width: theme.spacing(150),
            height: theme.spacing(60),
        },

    },
    contactGrid : {
        flexGrow: 1,
    },
    contactPaper: {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
    }
});



class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            openDialog: false,
            mainData: contactDetails
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
                            <Paper elevation={3} >
                                <div style={{ margin: "15px" }}>
                                    <h3>List of Contacts</h3>
                                </div>
                                {
                                    this.state.mainData.map((item, key) => {
                                        return (
                                            <div className={classes.contactGrid}>
                                            <Grid container spacing={3}>
        
                                                <Grid item xs={3}>
                                                    <Paper variant="outlined" className={classes.contactPaper}>xs=3</Paper>
                                                </Grid>
        
                                            </Grid>
                                        </div>
                                        )
                                    })
                                }
                               


                            </Paper>

                        </div>
                    </Typography>

                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(useStyles)(MainContainer)
