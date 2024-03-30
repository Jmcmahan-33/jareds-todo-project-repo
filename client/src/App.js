import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user";
import Home from "./Home";
// import { Routes } from "react-router-dom/cjs/react-router-dom.min";

function App() {


  return (
    <div className="App">
      <UserProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>

  );
}
export default App


// <BrowserRouter>
//   <div className="App">
//     <Switch>
//       <Route path="/testing">
//         <h1>Test Route</h1>
//       </Route>
//       <Route path="/">
//         <h1>Page Count: {count}</h1>
//       </Route>
//     </Switch>
//   </div>
// </BrowserRouter>
