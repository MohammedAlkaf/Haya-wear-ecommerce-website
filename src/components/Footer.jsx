import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>INTIMATE WEAR.</Logo>
                <Desc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Desc>
                <SocialContainer>
                    <SocialIcon bg = {'#3b5999'}>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon bg = {'#e4406f'}>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon bg = {'#55acee'}>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon bg = {'#e60023'}>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>
                    Useful links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                    <ContactItem>
                        <Room style={{marginRight:"10px"}}/> 1010 Saint-Catherine St W, Montreal, Quebec H3G 1P3
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight:"10px"}}/> +1 514 1352 1234
                    </ContactItem>
                    <ContactItem>
                        <MailOutline style={{marginRight:"10px"}} /> contact@intimatewear.com
                    </ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: ${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const SocialContainer = styled.div`
    display: flex;
`;

const ContactItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


export default Footer;