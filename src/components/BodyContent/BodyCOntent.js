import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Dialog from "./Dialog.js"


const useStyles = theme =>({
    root: {
        width: "100%",
        maxWidth: "100%",
        backgroundColor: theme.palette.background.paper,
        
    }
});



class MainContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [],
            openDialog : false
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ data : data }));
    }

   onClickDialog = (e) => {
    this.setState({
        openDialog : true
    })
    console.log("calling")
   }
     

    render() {
        //this.check()
        const { classes } = this.props;
        // this.data()
       

       
       
        return (
            <React.Fragment>
                <CssBaseline />
                        
               
                        <div className={classes.root}>

                            <List component="nav" aria-label="secondary mailbox folders">
                                {
                                    this.state.data.map((value) => (
                                        <div>
                                        <Dialog  title = {value.title}>
                                        
                                        
                                         </Dialog>
                                         <Divider />
                                         </div>
                                    ))
                                }
                               
                               
                            </List>
                        </div>
                 
            </React.Fragment>
        );
    }
}

export default  withStyles(useStyles)(MainContainer)
