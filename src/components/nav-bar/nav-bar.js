
import react from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';



import './nav-bar.css';

function NavBar({leftPane, rightPane}){ 

    const history = useHistory()

    return (
        <div className = "nav-bar-container">
            <div className = "left-pane">
            <Button variant="contained" onClick = {() => {history.push('/')}} color="primary" style ={{background : "#352f2b"}}>
                main
            </Button>
            </div>
            <div className = "right-pane">
            <Button variant="contained" onClick = {() => {history.push('/about')}} color="primary" style ={{background : "#352f2b"}}>
                about
            </Button>
            <Button variant="contained" onClick = {() => {history.push('/stats')}} color="primary" style ={{background : "#352f2b"}}>
                overview
            </Button>
            </div>
        </div>   
 )
        

}
export default NavBar;