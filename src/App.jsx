import { useState } from "react";
import "./App.css";
import Footer from "./assets/components/Footer";
import Search from "./assets/components/Search";
import Line from "./assets/components/Line";
import data from "./assets/data.json";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <Search text={text} setText={setText} />
      {data.map((emoji, index) => {
        if (emoji.keywords.includes(text)) {
          return <Line key={index} emoji={emoji} />;
        }
      })}
      <Footer />
    </div>
  );
}

export default App;
