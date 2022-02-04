import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Cart = () => {

    return (
        <Container>
            <Navbar />
            <Anouncement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINOUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>You Wishlist</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src = {'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png'}/>
                                <Details>
                                    <ProductName><b>Product: </b> JESSIE CAP</ProductName>
                                    <ProductId><b>ID: </b> A13855432</ProductId>
                                    <ProductColor color="grey"/>
                                    <ProductSize><b>Size: </b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 14.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src = {'https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png'}/>
                                <Details>
                                    <ProductName><b>Product: </b> HAKURA T-SHIRT</ProductName>
                                    <ProductId><b>ID: </b> C13859302</ProductId>
                                    <ProductColor color="brown"/>
                                    <ProductSize><b>Size: </b> L</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>1</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 23.99</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 29.98</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -2.98</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 29.98</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding:'10px'})}

`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 20px;
    font-weight: 600;
    cursor: pointer;
    border: ${prpos=>prpos.type === "filled" && 'none'};
    background-color: ${prpos=>prpos.type === "filled" ? "black" : "transparent"};
    color: ${prpos=>prpos.type === "filled" && 'white'};
    ${mobile({ padding:'10px'})}

`;

const TopTexts = styled.div`
    ${mobile({ display:'none'})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:'column'})}
`;

const Info = styled.div`
    flex:3;
`;


const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection:'column'})}
`;

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin:'5px 15px'})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    margin-bottom: 20px;
    ${mobile({ marginBottom:'20px'})}
`;

const Hr = styled.hr`
    border: none;
    height: 1px;
    background: #eee;
`;

const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 400px;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type && '500'};
    font-size: ${props => props.type && '24px'};

`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

export default Cart;
