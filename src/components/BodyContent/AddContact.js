import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "components/controls/Controls";
import { useForm, Form } from './useForm';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Link from '@material-ui/core/Link';
//import * as employeeService from "../../services/employeeService";





const useStyles = theme =>({
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
  });


const initialFValues = {
   firstName: '',
   lastName: '', 
    email: '',
    mobile: ''
   
}

export default function EmployeeForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
        temp.firstName = fieldValues.firstName.length != 0 ? "" : "This field is required."

        if ('lastName' in fieldValues)
        temp.lastName = fieldValues.lastName.length != 0 ? "" : "This field is required."
          
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
               setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        // if (validate()){
        //     employeeService.insertEmployee(values)
        //     resetForm()
        // }
    }
    const classes = useStyles();

    return (
        <div>        
            <Form onSubmit={handleSubmit}>
                <GridContainer>

                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                        <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Contact Form</h4>
                        {/* <p className={classes.cardCategoryWhite}>Complete Camera Configuration</p> */}
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                            <Controls.Input
                                name="ipAddress"
                                label="IP ADDRESS"
                                value={values.ipAddress}
                                onChange={handleInputChange}
                                error={errors.ipAddress}
                            />
                            </GridItem>
                           
                            <GridItem xs={12} sm={12} md={6}>
                            <Controls.Input
                                name="brand"
                                label="Brand"
                                value={values.brand}
                                onChange={handleInputChange}
                                //error={errors.ipAddress}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                            <Controls.Input
                                name="model"
                                label="MODEL"
                                value={values.model}
                                onChange={handleInputChange}
                                //error={errors.ipAddress}
                            />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                            <Controls.Button
                            type="submit"
                            text="Save" />
                            <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                            </GridItem>
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                            
                            </GridItem>
                            </GridContainer>
                            
                            </GridContainer>
                        </CardBody>
                    </Card>
                    </GridItem>
                 </GridContainer>
               
            </Form>
        </div>

    )
}