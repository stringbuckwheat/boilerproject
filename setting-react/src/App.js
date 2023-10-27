import {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Main from "./Main";

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback="..loading">
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/main" element={<Main/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
