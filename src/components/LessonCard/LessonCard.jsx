import "./Lesson.css";

const LessonCard = (props) => {
  const { image, age, name } = props;
  return (
    <div className="main">
      <div className="card">
        <div>
          <img src={image} alt="logo" className="mainImg" />
        </div>

        <div className="desc">
          <p>
            Lesson Name : <span>{name}</span>
          </p>
          <p>
            Lesson Hour : <span>{age}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
