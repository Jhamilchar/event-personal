import '../styles/join.css'
import { Cards } from './min/cards';

import img1 from '../../public/img/1-6.png'
import img2 from '../../public/img/2-6.png'
import img3 from '../../public/img/3-6.png'
import img4 from '../../public/img/4-6.png'
import img5 from '../../public/img/5-6.png'
import img6 from '../../public/img/6-6.png'

const cards = [
  {
    id: 1,
    img: img1,
    num: "01",
    des: "In-Person Networking",
    des2: "Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibhluctus, in porttitor",
  },
  {
    id: 2,
    img: img2,
    num: "02",
    des: "Boosts Productivity",
    des2: "Xluctus odio ac nibhluctus, in porttitor",
  },
  {
    id: 3,
    img: img3,
    num: "03",
    des: "Spark Creativity",
    des2: "Qus, in porttitor",
  },
  {
    id: 4,
    img: img4,
    num: "04",
    des: "Potential Clients",
    des2: "Qus ut scelerisque. Fusce luctus odio ac nibhluctus, in porttitor",
  },
  {
    id: 5,
    img: img5,
    num: "05",
    des: "Top Speakers",
    des2: "Dusce luctus odio ac nibhluctus, in porttitor",
  },
  {
    id: 6,
    img: img6,
    num: "06",
    des: "After Party",
    des2: "Quisque placerat vitae lacus ut scelerisque. Fus in porttitor",
  },
];

export const Join = () => {
  return (
    <div className="wrap-join">
      <div className="wrap-container">
        <div className="min-cont">
          <p className="join-t">JOIN THE EVENT</p>
          <h3 className="join-w">Why Join Evenio</h3>
        </div>
        <div className="wrap-card">
          {
            cards.map(card => (
              <Cards
                key={card.id}
                title={card.des}
                title2={card.des2}
                imageSource={card.img}
                num={card.num}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
