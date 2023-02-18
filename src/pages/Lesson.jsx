import LessonCard from "../components/LessonCard/LessonCard";
import { data } from "../helpers/data";

const Lesson = () => {
  return (
    <div className="lesson-container">
      {data.map((item) => (
        <LessonCard {...item} />
      ))}
    </div>
  );
};

export default Lesson;
