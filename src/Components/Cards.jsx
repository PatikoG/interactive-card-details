import FrontCard from '../images/bg-card-front.png'
import FullCircle from '../images/circle-full.png'
import CircleBorder from '../images/circle-border.png'
import styled from 'styled-components'
import BackCard from '../images/bg-card-back.png'


export default function Cards(props) {


  return (
    <TwoCards>
        <BackSide>
            <BackCardd src={BackCard} />
            <CVC>{props.cvc || "000"}</CVC>
        </BackSide>
        <FrontSide>
            <Circles>
                <FullCircledd src={FullCircle} />
                <CircleBordered src={CircleBorder} />
            </Circles>
            <Numberss>{props.number || "0000 0000 0000 0000"}</Numberss>
            <Name>{props.name || "PAATA GHARIBASHVILI"}</Name>
            <DateYear>
                <p>{props.dateday || "00 "} /</p>
                <p>{props.dateyear || " 00"} </p>
            </DateYear>
            <FrontCardd src={FrontCard}/>
        </FrontSide>
    </TwoCards>
  )
}

const CVC = styled.p`
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    text-align: right;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #FFFFFF;
    position: absolute;
    top: 45%;
    right: 10%;
`

const TwoCards = styled.div`
    position: relative;
`

const BackSide = styled.div`
   position: absolute;
   transform: translate(-118px,1px);
`


const FrontSide = styled.div`
   position: absolute;
   transform: translate(-164px,92px);
`

const DateYear = styled.p`
    display: flex;
    position: absolute;
    gap: 2px;
    top: 70%;
    right: 33%;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    text-align: right;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #FFFFFF;
    @media (min-width: 1024px) {
        top: 34%;
        right: 42.5%;
    }
`


const Name = styled.h3`
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #FFFFFF;
    position: absolute;
    top:70%;
    margin-left: 19px;
    @media (min-width:1024px) {
        top: 35%;
        margin-left: 19px;
    }
`

const Numberss = styled.p`
    position: absolute;
    top: 45%;
    margin-left: 19px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 2.2px;
    color: #FFFFFF;
    font-family: 'Space Grotesk';
    @media (min-width: 1024px) {
        top: 30%;
        margin-left: 19px;
    }
`

const FullCircledd = styled.img`
    width: 30px;
    height: 30px;
`
const CircleBordered = styled.img`
    width: 13.5;
    height: 13.5px;
`

const Circles = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    gap:10px ;
    margin-left: 19px;
    margin-top: 18px;
`

const FrontCardd = styled.img`
    margin-right: 100px;
    max-width:447px;
    width: 285px;
`

const BackCardd = styled.img`
     max-width:447px;
    width: 285px;
`