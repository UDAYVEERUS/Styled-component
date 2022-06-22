import "./App.css";
import ButtonComp from "./component/button";

function App() {
  return (
    <div className="App">
      <ButtonComp  border = "none"  backgroundColor= "#42a5f5" color= "white" text = "Primary Button" />
      <ButtonComp  border = "1px solid gray" text = "Default Button" />
      <ButtonComp  border = "1px dashed gray" text = "Dashed Button" />
      <br/>
      <br/>
      <ButtonComp  border = "none" text = "Text Button" />
      <ButtonComp  border = "none" color= "#03a9f4" text = "Link Button" />
    </div>
  );
}
export default App;