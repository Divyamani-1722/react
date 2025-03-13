// import React from "react";
// import  ApplyAadhar from  "./components/forms/ApplyAadhar";
// import UpdateAadhar from "./components/forms/UpdateAadhar";
// import SearchAadhar from "./components/forms/SearchAadhar";



// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8 p-4">
//       <h1 className="text-2xl font-bold text-center">Aadhar Application Form</h1>
//       <ApplyAadhar />
//       <UpdateAadhar/>
//       <SearchAadhar/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import AadharApp from "./AadharApp"; 

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center">Aadhar Application Form</h1>
      <AadharApp /> {/* Render Aadhar App */}
    </div>
  );
}

export default App;

