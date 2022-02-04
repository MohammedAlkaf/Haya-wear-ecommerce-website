import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Anouncement from '../components/Anouncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { useParams } from "react-router";
import { popularProducts } from '../data';

const Product = () => {

    const { product_id } = useParams();
    const item = popularProducts.find( ({ id }) => id === Number(product_id) );

    return (
        <Container>
            <Navbar/>
            <Anouncement/>

            <Wrapper>
                <ImageContainer>
                    <Image src = {item.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Lorem Ipsum</Title>
                    <Desc>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle> Color: </FilterTitle>
                            <FilterColor color = "black" />
                            <FilterColor color = "darkblue" />
                            <FilterColor color = "grey" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size: </FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>
                            ADD TO CART
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <Newsletter/>
            <Footer/>
        </Container>
    );
};

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding:"10px", flexDirection:'column'})}
`;

const ImageContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height:"40vh"})}

`;

const Title = styled.h1`
    font-weight: 200;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({ padding:"10px"})}
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width:"100%"})}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    border: 2px solid teal;
    cursor: pointer;
    &:hover{
        background-color: #f8f4f4;
    }
`;

const FilterSizeOption= styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width:"100%"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4;
    }
`;


export default Product;
