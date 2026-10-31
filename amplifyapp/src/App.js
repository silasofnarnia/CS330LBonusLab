// import logo from './logo.svg';
import './App.css';
// Desired import: import bootstrap from "bootstrap";
// Import everything from bootstrap: 
import { Alert, 
        Button, 
        Carousel, 
        Collapse, 
        Dropdown, 
        Modal, 
        Offcanvas, 
        Popover, 
        ScrollSpy, 
        Tab, 
        Toast, 
        Tooltip } from "bootstrap";

// Import component. 
import NavBar from './Components/NavBar';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>CS 330L</h1>
      <h2>Section - 011</h2>
      <p>WVU ID: 800458167</p>
      <p>Hi I am Silas Garrett</p>
      <Card />
    </div>
  );
}

export default App;
