import img1 from "../../../assets/img/first-img.jpg";
import img2 from "../../../assets/img/img-2.jpg";
import img3 from "../../../assets/img/img-3.jpg";
import imgPin from "../../../assets/img/pin.png";
import imgPrice from "../../../assets/img/price.png";
import {
  WraperHotel,
  ImgHotel,
  ContainerCardHotel,
  BottomHotel,
  GetDirection,
} from "../../css-styled/location.components";
377
227
const infoHotel = [
  {
    id: 1,
    img: img1,
    pin: imgPin,
    priceimg: imgPrice,
    namehotel: "The Empire Hotel",
    location: "55 New Street, Grand Lane, New York City, NY 11201",
    price: "$55 - $350",
    direction: "Get Directions >",
  },
  {
    id: 2,
    img: img2,
    pin: imgPin,
    priceimg: imgPrice,
    namehotel: "The Royal Hotel",
    location: "88 Old Street, Old Lane, New York City, NY 11205",
    price: "$120-$666",
    direction: "Get Directions >",
  },
  {
    id: 3,
    img: img3,
    pin: imgPin,
    priceimg: imgPrice,
    namehotel: "The Earlington Hotel",
    location: "99 New Street, Old Lane, New York City, NY 11221",
    price: "$200-$1500",
    direction: "Get Directions >",
  },
];


const CardHotel = ({ img, hotel, buy, locationHotel, directionPrice, gps, price }) => {
  return (
    <ContainerCardHotel>
      <div>
        <ImgHotel src={img} alt="" />
      </div>
      <BottomHotel>
        <h5>{hotel}</h5>
        <div>
          <img src={gps} alt="" />
          <p>{locationHotel}</p>
        </div>
        <div>
          <img src={price} alt="des" />
          <p>{buy}</p>
        </div>
        <div>
          <GetDirection href="#">{directionPrice}</GetDirection>
        </div>
      </BottomHotel>
    </ContainerCardHotel>
  );
};

export const DirectionHotels = () => {
  return (
    <WraperHotel>
      {
        infoHotel.map ((card) => (
          <CardHotel
            key={card.id}
            img={card.img}
            gps={card.pin}
            price={card.priceimg}
            hotel={card.namehotel}
            locationHotel={card.location}
            buy={card.price}
            directionPrice={card.direction}
          />
        ))
      }
    </WraperHotel>
  );
};
