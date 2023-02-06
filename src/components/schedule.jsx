import '../styles/schedule.css'
import { CardBot } from './min/cardBot';
import { CardSc } from "./min/cardsS";

import img1 from "../../public/img/clock.png";
import img2 from "../../public/img/s-1.jpg";
import img3 from  '../../public/img/s-2.jpg'


const cards = [
  {
    id: 1,
    des: 'Day - 1',
    time: '2021 - 12 - 13',
  },
  {
    id: 2,
    des: 'Day - 2',
    time: '2021 - 12 - 13',
  },
  {
    id: 3,
    des: 'Day - 3',
    time: '2021 - 12 - 13',
  },
];

const cardsBot = [
  {
    id: 1,
    img: img1,
    img2: img2,
    img3: img3,
    time: "10:00-12:00",
    room: "Room",
    int: "Introduction Business",
    lor: "All the Lorem Ipsum generators on the Internet tend to repeat",
  },
  {
    id: 2,
    img: img1,
    img2: img2,
    img3: img3,
    time: "10:00-12:00",
    room: "Room",
    int: "Introduction Business",
    lor: "All the Lorem Ipsum generators on the Internet tend to repeat",
  },
  {
    id: 3,
    img: img1,
    img2: img2,
    img3: img3,
    time: "10:00-12:00",
    room: "Room",
    int: "Introduction Business",
    lor: "All the Lorem Ipsum generators on the Internet tend to repeat",
  },
  {
    id: 4,
    img: img1,
    img2: img2,
    img3: img3,
    time: "10:00-12:00",
    room: "Room",
    int: "Introduction Business",
    lor: "All the Lorem Ipsum generators on the Internet tend to repeat",
  },
];

export const Schedule = () => {
  return (
    <div className="d-wraper" id="schedules">
      <div className="wraper-all">
        <div className="wraper-sch">
          <div className="wraper-three">
            {cards.map((card) => (
              <CardSc key={card.id} desc={card.des} time={card.time} />
            ))}
          </div>
          <div className="wraper-four">
            {cardsBot.map((card) => (
              <CardBot
                key={card.id}
                imgClock={card.img}
                time={card.time}
                room={card.room}
                int={card.int}
                lor={card.lor}
                img2={card.img2}
                img3={card.img3}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
