import React from "react";
import './PageContainer.css';
import { Switch, Route } from 'react-router-dom';

//Components
import EmployeesPage from '../EmployeesPage/EmployeesPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import HomePage from '../HomePage/HomePage';

function PageContainer() {
  return (
    <div className="PageContainer container-fluid">
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/employees" component={EmployeesPage}/>
            <Route path="/projects" component={ProjectsPage}/>
        </Switch>
    </div>
  );
}

export default PageContainer;
