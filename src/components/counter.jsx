import CountUp from 'react-countup';
import '../styles/bgCounter.css'
import bocina from "../../assets/img/bocina.png"
import hombre from "../../assets/img/hombre.png";
import ticket from "../../assets/img/ticket.png";
import manos from "../../assets/img/manos.png";

export const Counter = () => {
  return (
    <div className="bgCounter">
      <div className="container-4">
        <img className="img-4" src={bocina} alt="des" />
        <div>
          <h1 className="mini-con">
            <CountUp
              className="count"
              start={0}
              end={100}
              duration={2}
              delay={0}
            />
            <span className="up">+</span>
          </h1>
          <span className="tx-4">speakers</span>
        </div>
      </div>

      <div className="container-4">
        <img className="img-4" src={hombre} alt="des" />
        <div>
          <h1 className="mini-con">
            <CountUp
              className="count"
              start={0}
              end={100}
              duration={2}
              delay={0}
            />
            <span className="up">+</span>
          </h1>
          <span className="tx-4">metas</span>
        </div>
      </div>

      <div className="container-4">
        <img className="img-4" src={ticket} alt="des" />
        <div>
          <h1 className="mini-con">
            <CountUp
              className="count"
              start={0}
              end={100}
              duration={2}
              delay={0}
            />
            <span className="up">+</span>
          </h1>
          <span className="tx-4">tickets</span>
        </div>
      </div>

      <div className="container-4">
        <img className="img-4" src={manos} alt="des" />
        <div>
          <h1 className="mini-con">
            <CountUp
              className="count"
              start={0}
              end={100}
              duration={2}
              delay={0}
            />
            <span className="up">+</span>
          </h1>
          <span className="tx-4">strong</span>
        </div>
      </div>
    </div>
  );
}
