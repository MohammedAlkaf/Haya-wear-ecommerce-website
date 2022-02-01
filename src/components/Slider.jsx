import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Slider = () => {
    const [ slideIndex, setSlideIndex ] = useState(0);
    const handleClick = (direction) => {
        if( direction === 'left'){
            setSlideIndex( slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
        }
        else {
            setSlideIndex( slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction = "left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper index = {slideIndex}>
                {
                    sliderItems.map( (item) => {
                        return (
                            <Slide bg = {item.bg} key = { item.id }>
                                <ImgContainer>
                                    <Image src = {item.img}/>
                                </ImgContainer>
                                <InfoContainer>
                                    <Title>{item.title}</Title>
                                    <Desc>{item.desc}</Desc>
                                    <Button>SHOP NOW</Button>
                                </InfoContainer>
                            </Slide>
                        )
                    })
                }
            </Wrapper>
            <Arrow direction = "right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #e9e7e7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin:auto;
    cursor: pointer;
    opacity: 0.5;
    left: ${ props => props.direction === "left" && '10px'};
    right: ${ props => props.direction === "right" && '10px'};
    z-index: 2;
    &:hover{
        opacity:1;
    };

    transition: opacity 0.3s ease;
`;

const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: transform 1.5s ease;
    transform: translateX(${props => props.index * -100 }vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    /* flex:1; */
    width:50%;
    /* border: 1px solid red; */
    overflow: hidden;
`;

const Image = styled.img`
    height: 80%;
    width: 100%;
    object-fit:cover;
`;

const InfoContainer = styled.div`
    /* flex:1; */
    width:50%;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin:50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
`;


export default Slider;
