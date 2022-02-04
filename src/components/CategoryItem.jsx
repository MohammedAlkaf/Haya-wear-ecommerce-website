import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useHistory } from 'react-router-dom';

const CategoryItem = ({item}) => {
    const history = useHistory();

    return (
        <Container>
            <Image src = {item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button onClick={()=> history.push('/products')}>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    flex:1;
    margin: 3px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height:"30vh"})}
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Title = styled.h1`
    color: white;
    margin: 20px;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1);
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    font-size: 16px;
    color:grey;
    cursor: pointer;
    font-weight: 600;
`;

export default CategoryItem;
