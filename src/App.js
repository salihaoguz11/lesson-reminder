import "./App.css";
import Header from "./components/Header/Header";
// import LessonCard from "./components/LessonCard/LessonCard";

import Lesson from "./pages/Lesson";

function App() {
  return (
    <div className="App">
      <Header />
      <Lesson />
      {/* {data.map((item) => (
        <LessonCard {...item} />
      ))} */}
    </div>
  );
}

export default App;
