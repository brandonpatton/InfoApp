import { Component, React, useState } from "react";
import './App.css';
import { MDBCard, MDBCardBody, MDBContainer,MDBCardTitle,MDBCardText } from "mdbreact";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import data from './data';

function InfoApp () {

    //set up local states for information block to render and number of occurrences
  const [currentInfo, setCurrentInfo] = useState({
    "id": 0,
    "application": "http://demo.opslinesys.net",
    "alert": "",
    "severity_level": 0,
    "name": "Click a Button to Learn About Various Attack Techniques and Types!",
    "description": "",
    "solution": "",
    "evidence": ""});
    
  const [occurrences, setOccurrences] = useState(0);
  
  const searchDB = (searchTerm) => {
      //Performs a search through the imported data for the requested searchTerm
      //    The searchTerm is passed through on each button press
      //    After the correct information has been found, the local states are updated with the correct values

      let found = [];
      for (let i = 0; i < data.length; i++){
          if (data[i].name === searchTerm){
              found.push(data[i]);
          }
      }
      setOccurrences(found.length);
      setCurrentInfo(found[0]);
  }

  const NewlineText = (inString) => {
      //Normally, HTML does not treat \n characters as new lines, but rather as spaces.
      //    This function ensures the correct spacing occurs with each newline character
      //    Also assigns a random number as the key for each <p> element because React warns on anonymous children.
    const newText = inString.split('\n').map(str => <p key = {Math.random().toString(36).substr(2, 9)}>{str}</p>);
    return newText;
  }

  const displayInfo = () => {
      //Displays the information held in the local state
    let result;
    if (currentInfo.id == 0){
        //display "Click a Button to Learn About Various Attack Techniques" title
        result = <div className = "splashTitle"><h1>{currentInfo.name}</h1></div>
    } else if (currentInfo.evidence == ""){
        //display state elements. If we reach this that means a button has been pressed (otherwise id == 0)
        //  This block displays only if no evidence has been provided
        result = (<div>
            <MDBCard className = "info-card-body">
                <br></br>
                <div className="infoCard">Name: </div>
                <br></br>
                {currentInfo.name}
                <div className="infoCard"><br></br>Severity Level: </div>
                <br></br>
                {currentInfo.severity_level}
                <div className="infoCard"><br></br>Alert: </div>
                <br></br>
                {currentInfo.alert}
                <div className="infoCard"><br></br>Description: </div>
                {NewlineText(currentInfo.description)}
                <div className="infoCard">Solution: </div>
                {NewlineText(currentInfo.solution)}
                <div className="infoCard">Evidence: </div>
                <br></br>
                No evidence included
                <br></br>
                <div className="infoCard"><br></br>Application:</div>
                <br></br>
                <a href="http://demo.opslinesys.net" target="_blank">{currentInfo.application}</a>
                <div className="infoCard"><br></br>Occurrences: </div>
                <br></br>
                {occurrences}
            </MDBCard>
        </div>)
    } else {
        //display state elements. If we reach this that means a button has been pressed (otherwise id == 0)
        //  This block displays only if evidence has been provided
        result = (<div>
            <MDBCard className = "info-card-body">
            <br></br>
                <div className="infoCard">Name: </div>
                <br></br>
                {currentInfo.name}
                <div className="infoCard"><br></br>Severity Level: </div>
                <br></br>
                {currentInfo.severity_level}
                <div className="infoCard"><br></br>Alert: </div>
                <br></br>
                {currentInfo.alert}
                <div className="infoCard"><br></br>Description: </div>
                {NewlineText(currentInfo.description)}
                <div className="infoCard">Solution: </div>
                {NewlineText(currentInfo.solution)}
                <div className="infoCard">Evidence: </div>
                <br></br>
                {currentInfo.evidence}
                <br></br>
                <div className="infoCard"><br></br>Application:</div>
                <br></br>
                <a href="http://demo.opslinesys.net" target="_blank">{currentInfo.application/*SET UP A LINK HERE*/}</a>
                <div className="infoCard"><br></br>Occurrences: </div>
                <br></br>
                {occurrences}
            </MDBCard>
        </div>)
    }
    return result;
  }
  return(
    <div>
        <div className = "title">
            <h1>InfoApp</h1>
        </div>
        <div className = "background">
            <Row>
                <Col>
                    <div className = "infoButtonContainer">
                        <Button className = "infoButton"  onClick = {() => {searchDB("Path Traversal")}}>
                            Path Traversal
                        </Button>
                        <Button className = "infoButton" onClick = {() => {searchDB("Cross Site Scripting (DOM Based)")}}>
                            Cross Site Scripting
                        </Button>
                        <Button className = "infoButton" onClick = {() => {searchDB("X-Frame-Options Header Not Set")}}>
                            X-Frame-Options Header Not Set
                        </Button>
                        <Button className = "infoButton" onClick = {() => {searchDB("Server Leaks Information via \"X-Powered-By\" HTTP Response Header Field(s)")}}>
                            Server Leaks Information via \"X-Powered-By\" HTTP Response Header Field(s)
                        </Button>
                        <Button className = "infoButton" onClick = {() => {searchDB("Cross-Domain JavaScript Source File Inclusion")}}>
                            Cross-Domain JavaScript Source File Inclusion
                        </Button>
                        <Button className = "infoButton" onClick = {() => {searchDB("Absence of Anti-CSRF Tokens")}}>
                            Absence of Anti-CSRF Tokens
                        </Button>
                        <Button className = "infoButton" onClick = {() => {searchDB("X-Content-Type-Options Header Missing")}}>
                            X-Content-Type-Options Header Missing
                        </Button>
                    </div>
                </Col>
                <Col>
                    <div className = "infoContainer">
                        {displayInfo()}
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default InfoApp;
