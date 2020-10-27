import React, { Component } from 'react';
import ContactData from "../Contactjson.js";
import "../App.css";
var jsonArr=[];
export default class MainTask extends Component {
    constructor() {
        super();
        this.state = {
           "mainData":[],
           "flag":false
        }
    }
    componentDidMount = () => {

    }
    saveData=()=>{
        const fname=document.getElementById("fname").value;
        const lname=document.getElementById("lname").value;
        const mobileno=document.getElementById("mobileno").value;
        const email=document.getElementById("email").value;

       

        const jsonData={};
        jsonData["name"]=fname;
        jsonData["lname"]=lname;
        jsonData["phone_no"]=mobileno;
        jsonData["email"]=email;

        if(fname=="" && lname==""){

        }else{
            jsonArr.push(jsonData)

            // console.log("check jsarry",jsonArr)
            this.setState({
                "mainData":jsonArr,
                "flag":true
            },()=>{
                console.log("get array data ",this.state.mainData)
               document.getElementById("Closemodal").click()
            })
            //  alert(JSON.stringify(jsonData))
    
        }
       
    }
   
    render = () => {
        const mainData=ContactData;
        // console.log("check user data",mainData)
        return (
            <div>
                <div className="bg-primary text-white py-4">
                    <h4 className="px-2">Project Name</h4>
                </div>
                <div className="container rounded my-4 py-5 px-2" style={{backgroundColor:"#b8bcba"}}>
               <div className="row p-3">
                   <div className="col-md-12 mx-2">
                   <h3 className="text-white"> List of Contact</h3>
                   </div>
                   {
                       this.state.flag==true?
                       jsonArr.map(function(item,i){
                           return(
                               <>
                                 <div className="col-md-4">
                                    <div className="m-2 p-3 rounded bg-light " >
                                            <div className="px-3 my-1">
                                                <i className="fa fa-user  mr-2" ></i><span className="">{item.name}</span>
                                            </div>
                                            <div className="px-3 my-1 text-info">
                                            <i className="fa fa-phone  mr-2" ></i><span>{item.phone_no}</span>
                                            </div>
                                            <div className="px-3 my-1 text-info">
                                            <i className="fa fa-envelope  mr-2" ></i><span>{item.email}</span>
                                            </div>
                                            <div className="d-flex text-center my-2">
                                            <div className="border w-50">Edit</div>
                                            <div className="border text-danger w-50">Delete</div>
                                            </div>
                                    </div>
                                </div>
                               </>
                           )
                       })
                       :<div>
                           <h4 className="mx-4">No contact Available</h4>
                           </div>
                   }
                   {/* add new span for add new data */}
                  <div className="col-md-12 mx-2 my-2">
                   <span className="btn font-weight-bold px-4 py-2 text-white" data-toggle="modal" data-target=".bd-example-modal-lg" style={{borderRadius:"15px",backgroundColor:"black",opacity:"0.7"}}>
                    Add New ->
                   </span>
                  </div>

                  {/* here modal for form add new */}
                  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    
                    <div class="modal-content">
                    <div className="row p-4">
                    <div className="col-md-12 text-center my-2">
                    <h3 className="font-weight-bold">Contact Form</h3>
                    </div>
                    <form className="col-md-12">
                   <div className="row">
                   <div className="col-md-6">
                   <div className="form-group">
                       <label>Name</label>
                       <input type="text" id="fname" className="form-control" placeholder="First name.." required />
                   </div>
                    </div>
                    <div className="col-md-6">
                   <div className="form-group">
                      <label>Last Name</label>
                       <input type="text" id="lname" className="form-control" placeholder="Last Name.." required />
                   </div>
                    </div>
                    <div className="col-md-12">
                   <div className="form-group">
                       <label>Email</label>
                       <input type="email" id="email" className="form-control" placeholder="abc@gmail.com.." required />
                   </div>
                    </div>
                    <div className="col-md-12">
                   <div className="form-group">
                       <label>Mobile No</label>
                       <input type="number" id="mobileno" className="form-control" placeholder="+91 " required />
                   </div>
                    </div>
                    <div className="col-md-12">
                   <div className="form-group text-center">
                       <span className="btn text-white px-4" style={{backgroundColor:"black",opacity:"0.7",borderRadius:"20px"}} onClick={this.saveData}>
                           Save ->
                       </span>
                       <span  class="close" id="Closemodal" data-dismiss="modal" aria-label="Close" style={{visibility:"hidden"}} />
                   
                       
                   </div>
                    </div>
                   </div>
                    </form>
                   
                    </div>
                    </div>
                </div>
                </div>
               </div>
            </div>
            <div className="bg-light py-4 text-right mr-2">
                    <i className="fa fa-copyright"></i> 2020 project of ABC
                </div>
            </div>
             )
    }
}