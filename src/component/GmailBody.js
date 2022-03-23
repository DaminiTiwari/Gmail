import React from 'react';
import '../style/gmailBody.css';
import BodyHeader from './BodyHeader';
import EmailList from './EmailList';
import GmailCategory from './GmailCategory';
import FullEmailDetail from './FullEmailDetail';
import {  Redirect, Route, Switch } from "react-router-dom";
import SentEmails from './SentEmails';




const GmailBody = () => {
  return (<div>
    <BodyHeader />
    <GmailCategory />
    <Switch>
    <Route exact path="/" component={EmailList} />
    <Route exact path="/sent" component={SentEmails} />
    <Route exact path="/mail" component={FullEmailDetail} />
 <Redirect   to="/" />
  </Switch>
    </div>)
};

export default GmailBody;
