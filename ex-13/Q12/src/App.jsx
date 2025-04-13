import React from "react";
import UserGreeting from "./UserGreeting"; 
function App() {
  return (
    <div>
      <UserGreeting firstName="Abinav " lastName="S" /> {/* Pass first and last names as props */}
    </div>
  );
}
export default App;
