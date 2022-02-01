import React from 'react';
import styled from 'styled-components';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Product = ({item}) => {
    return (
        <Container>
            <Circule/>
            <Image src = { item.img }/>
            <Info>
                <Icon bg = {"#e0c4ff"}>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon bg = {'#b6dcff'}>
                    <SearchOutlined/>
                </Icon>
                <Icon bg = {"#ffb6a6"}>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    );
};

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.1);
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circule = styled.div`
    position: absolute;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background-color: white;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.bg};
        transform: scale(1.1);
    }
`;

export default Product;
