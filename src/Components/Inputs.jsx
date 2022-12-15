import React from 'react'
import styled from 'styled-components'
import ReactInputMask from 'react-input-mask'
import inputMask from 'react-input-mask'

export default function Inputs(props) {

  return (
    <Form>
        <NameDiv>
            <Headers >CARDHOLDER NAME

                <InputNameNumb  onChange={(e) => props.setName(e.target.value)} value={props.name} type={"text"} pattern="^[a-zA-Z]+$" maxLength={20} id='FullName'/>
            </Headers>
        </NameDiv>
        <NameDiv>
            <Headers>CARD NUMBER
             <InputNameNumb onChange={(e) => props.setNumber(e.target.value)} value={props.number} maskChar={null} mask={'**** **** **** ****'} placeholder='e.g. 1234 5678 9123 0000' pattern='\d*'  />
            </Headers>
        </NameDiv>
        <InputDirections>
            <div>
                <Headers>EXP. DATE (MM/YY) 
                    <MMYYDiv>
                        <InputMMYY onChange={(e) => props.setDateDay(e.target.value)} value={props.dateday} type="numbers" maxLength={2} placeholder='MM'/>
                        <InputMMYY  onChange={(e) => props.setDateYear(e.target.value)} value={props.dateyear} type="numbers" maxLength={2} placeholder='YY'/>
                    </MMYYDiv>
                </Headers>
            </div>
            <div>
                <Headers>
                    CVC
                <div>
                    <InputCVC  onChange={(e) => props.setCVC(e.target.value)} value={props.cvc} type="numbers" maxLength={3} placeholder='e.g. 123' /> 
                </div>

                </Headers>
            </div>
        </InputDirections>
        <ButtonConfirm> Confirm </ButtonConfirm>
    </Form>
  )
}

const NameDiv = styled.div`
    margin-bottom: 20px;
    display: flex;;
    flex-direction: column;
    width: 100%;
    
`

const Form = styled.form`
   width:327px;
   margin-top: 290px;
   
   
   @media (min-width: 1024px) {
        
        max-width: 390px;
        width: 390px;
        margin-top: 50px;
    }
`

const Headers = styled.label`
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 9px;
    margin-top: 0px;
`

const InputNameNumb = styled(ReactInputMask)`
    font-family: 'Space Grotesk';
    padding-left: 16px;
    width: 100%;
    
    height: 45px;
    border: 1px solid #DFDEE0;
    border-radius: 8px;

    &:focus{
        border: 1px solid #610595;
    }
    ::placeholder{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
        color: #21092F;
        mix-blend-mode: normal;
        opacity: 0.25;
    }
    @media (min-width:1024px) {
        width: 100%;
    }
`

const InputMMYY = styled.input`
    font-family: 'Space Grotesk';
    max-width: 80px;
    height: 45px;
    width: 72px;
    border: 1px solid #DFDEE0;
    border-radius: 8px;
   
    ::placeholder{
        padding-left: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
        color: #21092F;
        mix-blend-mode: normal;
        opacity: 0.25;
    }

    @media (min-width:1024px) {
        width: 100%;
    }
`

const InputCVC = styled.input`
    font-family: 'Space Grotesk';
    max-width: 191px;
    width: 152px;
    height: 45px;
    border: 1px solid #DFDEE0;
    border-radius: 8px;
    padding-left: 16px;
    ::placeholder{
        
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
        color: #21092F;
        mix-blend-mode: normal;
        opacity: 0.25;
    }

    @media (min-width:1024px) {
        width: 100%;
    }
`

const InputDirections = styled.div`
    display: flex;
    gap: 24px;
   

    @media (min-width:1024px){
        gap:25px;
    }
    

`

const MMYYDiv = styled.div`
    display:flex;
    gap: 8px;

`

const ButtonConfirm = styled.button`
    font-family: 'Space Grotesk';
    width: 100%;
    height:53px;
    background: #21092F;
    border-radius: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    margin-top:28px ;
    @media (min-width:1024px) {
        width: 100%;
    }
`