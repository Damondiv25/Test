//import logo from './logo.svg';
import './App.css';
import {Button,Reject_Button,Authorize_Button } from "./Components/Button.Style"
import {AppContainer,message,Ulink,PDFslink,Wrapped } from "./Components/Container"
import {StyleHeader} from "./Components/Header"
import {StyleCard1,StyleCard2,StyleCard3,Styleh3,Styleh6,Styleh4,Styleh5} from "./Components/Card.styles"


function App() {
  return (
    <>   
    <StyleHeader>
      </StyleHeader>
      <AppContainer> 
       <message style={{color: "white"}}> Message Centre</message>
      
        <Button backgroundColor="red"> Create New Request</Button> </AppContainer>
        <StyleCard1>
          <StyleCard3></StyleCard3>
        </StyleCard1>
        <StyleCard2>
         <Styleh3 ><strong>Cancel / recall payment, GBP 1,000.00</strong></Styleh3>
         
         <Styleh6><strong>1234567890123456 (GB), KUIML BUSINESS Company</strong>
         <Styleh4>|  Request reference |  Category  | Request Status</Styleh4>
         <Styleh5><strong>| set293833ABCH | Payment | Pending autorization</strong></Styleh5>
         
         <PDFslink>
           <img src="./pdf.jpg" alt="pdf">
             </img>  | <img src="./save-button.png" alt="save"></img>
             </PDFslink>
          <Reject_Button>Reject</Reject_Button>
          
          <Authorize_Button>Authorize</Authorize_Button>
          <Ulink ><a href="/html/"> Full Details  ▼</a> </Ulink>
          
         </Styleh6>
</StyleCard2>
        
       
    </>
  );
}

export default App;
