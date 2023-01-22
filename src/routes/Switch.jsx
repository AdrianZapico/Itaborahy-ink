import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Trabalhos from "../pages/Trabalhos";
import NotFound from "../pages/NotFound";

export default function Switch() {

    return(
        <Routes>
            <Route>
                <Route path="/"element={<Home />} />
                <Route path="trabalhos" element={<Trabalhos />} />
                <Route path="contato" element={<Contato />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )

}