import { Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/Layout/Layout";
import { ActorsPage } from "./Pages/ActorsPage/ActorsPage";
import { FilmsPage } from "./Pages/FilmsPage/FilmsPage";
import { ActorAboutPage } from "./Pages/ActorAboutPage/ActorAboutPage";
import { FilmAboutPage } from "./Pages/FilmAboutPage/FilmAboutPage";
import { ErrorBoundary } from "./Pages/ErrorBoundary/ErrorBoundary";
import "./App.style.css";
function App() {
  return (
    <div className="m-0 p-0 App">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FilmsPage />} />
            <Route path="/actors/:id" element={<FilmAboutPage />}></Route>
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/films/:id" element={<ActorAboutPage />}></Route>
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
