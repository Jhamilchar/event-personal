import CountUp from 'react-countup';
import '../styles/bgCounter.css'
import bocina from "../../assets/img/bocina.png"

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
            <span className='up'>+</span>
          </h1>
          <span className="tx-4">speakers</span>
        </div>
      </div>

      <div className="container-4">
        <img className="img-4" src="../../assets/img/hombre.png" alt="des" />
        <div>
          <h1 className="mini-con">
            <CountUp
              className="count"
              start={0}
              end={100}
              duration={2}
              delay={0}
            />
            <span className='up'>+</span>
          </h1>
          <span className="tx-4">metas</span>
        </div>
      </div>

      <div className="container-4">
        <img className="img-4" src="../../assets/img/ticket.png" alt="des" />
        <div>
          <h1 className="mini-con">
            <CountUp
              className="count"
              start={0}
              end={100}
              duration={2}
              delay={0}
            />
            <span className='up'>+</span>
          </h1>
          <span className="tx-4">tickets</span>
        </div>
      </div>

      <div className="container-4">
        <img className="img-4" src="../../assets/img/manos.png" alt="des" />
        <div>
          <h1 className="mini-con">
            <CountUp
              className="count"
              start={0}
              end={100}
              duration={2}
              delay={0}
            />
            <span className='up'>+</span>
          </h1>
          <span className="tx-4">strong</span>
        </div>
      </div>
    </div>
  );
}
