import {
  BacgroundFooter,
  ContainFooter,
  TopFooter,
  BottomFooter,
  FlexCards,
  Cards,
} from "../css-styled/footer.compomponent.js";
import light from "../../assets/img/logo-light2.png";

export const Footer = () => {
  return (
    <BacgroundFooter>
      <ContainFooter>
        <TopFooter>
          <div>
            <img
              style={{ width: "179px" }}
              src={light}
              alt=""
            />
          </div>
          <FlexCards>
            <Cards>
              <h5>Addres</h5>
              <p>
                2096 New Market, New <br /> Road North Carolina, USA
              </p>
            </Cards>
            <Cards>
              <h5>Call Us</h5>
              <div>
                <a href="">@cualquiera.com</a>
                <br />
                <a href="">(+123)123-35463</a>
              </div>
            </Cards>
            <Cards>
              <h5>Follow Us</h5>
              <p>icons</p>
            </Cards>
          </FlexCards>
        </TopFooter>
        <BottomFooter>
          <div>
            <p>© 2021 Evenio, All Rights Reserved. Developed By reacthemes</p>
          </div>
        </BottomFooter>
      </ContainFooter>
    </BacgroundFooter>
  );
}
