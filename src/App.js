import React,{ useContext,Suspense  } from "react";
// import Login from './Pages/Login';
// import Home from './Pages/Home';
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
const Home=React.lazy(()=>import("./Pages/Home"));
const Register=React.lazy(()=>import("./Pages/Register"));
const Login=React.lazy(()=>import("./Pages/Login"));



function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
            exact
            element={ 
              <Suspense fallback = { <div> Please Wait... </div> } >
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              </Suspense>
              
            }
          />
        <Route path="register" element={
          <Suspense fallback = { <div> Please Wait... </div> } >
            <Register />
          </Suspense>
        }/>
        <Route path="login" element={
            <Suspense fallback = { <div> Please Wait... </div> } >
              <Login />
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;