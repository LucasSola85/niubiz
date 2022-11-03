
import { Routes, Route, Navigate } from "react-router-dom";
import { App } from "./App";
import { ResponsePage } from "./ResponsePage";

export const AppRoutes = () => {
  return (
    <>

        <Routes>
            <Route path="/" element={ <App /> } />
            <Route path="respuesta" element={ <ResponsePage /> } />
        </Routes>
    
    </>
  )
}
