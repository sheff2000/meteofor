import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/NavBar/Layout/Layout";
import NoPage from "./components/NavBar/NoPage/NoPage";
import Home from "./components/NavBar/Home/Home";
import AppPrivat from "./components/PrivatBank/App/App";
import AppGoogle from "./components/GoogleBook/App/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privatbank" element={<AppPrivat />} />
          <Route path="google-book" element={<AppGoogle />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);