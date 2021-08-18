import './App.css';
import ConA from "./ConA";
import {createContext} from "react";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
      <>
            <FirstName.Provider value={"Ganesh"} >
                <LastName.Provider value={"Pawar"} >
                 <ConA/>
                </LastName.Provider>
            </FirstName.Provider>

      </>
  );
}

export default App;
export { FirstName,LastName };
