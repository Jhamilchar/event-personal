
export const CardBot = ({ imgClock, time, room, int, lor, img2, img3 }) => {
  return (
    <div>
      <div className="flex-midle">
        <div className="back-sim">
          <img style={{ width: "39px" }} src={imgClock} alt="des" />
          <span className="time">{time}</span>
          <p className="room">{room}</p>
        </div>
        <div className="flex-bot">
          <div className="flex-space">
            <h2 className="flex-int">{int}</h2>
            <p className="text">{lor}</p>
          </div>
          <div className="duo-img">
            <a href="">
              <img src={img2} alt="" />
            </a>
            <a href="">
              <img src={img3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
