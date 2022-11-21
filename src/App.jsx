import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import TextSurah from "./components/textSurahTranslation/TextSurah"
import SearchSurah from "./components/firstPageSurahs/SearchSurah";
import Setting from "./setting/Setting"

function App() {
  return (
    <div className="App">

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchSurah/>} />
          <Route path="/surah/:id" element={<TextSurah />} />
          <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;


