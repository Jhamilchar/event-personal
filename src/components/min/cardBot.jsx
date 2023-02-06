
export const CardBot = ({ imgClock, time, room, int, lor, img2, img3 }) => {
  return (
    <div>
      <div className="flex-midle">
        <div className="back-sim">
          <img
            style={{ width: "39px" }}
            src={imgClock}
            alt="des"
          />
          <span className="time">{time}</span>
          <p className="room">{room}</p>
        </div>
        <div className="flex-bot">
          <h2 className="flex-int">{int}</h2>
          <p className="text">
            {lor}
          </p>
        </div>
        <div className="duo-img">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}
