import React from 'react';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory();

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style = {{ color: "grey", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo onClick={() => history.push('/')} >HAYA.</Logo>
                </Center>
                <Right>
                    <MenuItem onClick={() => history.push('/register')}>REGISTER</MenuItem>
                    <MenuItem onClick={() => history.push('/login')}>SIGN IN</MenuItem>
                    <MenuItem onClick={() => history.push('/cart')} >
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartOutlinedIcon/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    height: 60px;
    ${mobile({ height:"50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Center = styled.div`
    flex:1;
    text-align: center;
`;
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({flex:2, justifyContent:"center"})}

`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display:"none"})}

`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border:none;
    ${mobile({ width:"50px"})}

`;

const Logo = styled.h1`
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    ${mobile({ fontSize:"24px"})}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize:"12px", marginLeft:'10px'})};
`;
export default Navbar;
