import { Card, Img } from "../../css-styled/sponsor.compomponent"


export const CardSpon = ({imgCard}) => {
  return (
    <Card>
        <Img src={imgCard} alt="des" />
    </Card>
  )
}
