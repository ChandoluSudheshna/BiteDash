import { Col, Container, Row, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MENU_IMG } from "../utils/constants";

const MenuCard = ({name, price, finalPrice, rating, ratingCount, description, menuImg}) => {
    return(
        <Container>
            <Row>
                <Col sm={8}>
                    <p className="menuRowName">{name}</p>
                    {(price != null || finalPrice != null) && (
                    <p>
                        {price !=null && !isNaN(price) && 
                            (<span className={` 
                            ${finalPrice != null && !isNaN(finalPrice)?
                             'menuRowPrice' : 'MenuRowFinalPrice'}`}>
                                ₹ {price}
                        </span>)}
                        {finalPrice != null && !isNaN(finalPrice) && 
                            (<span className="menuRowFinalPrice"> ₹ {finalPrice}
                        </span>)}
                    </p>)}                
                    {rating && <p className="menuRowRating">★ {rating}<span style={{color:'black'}}>({ratingCount})</span></p>}
                    <p className="menuRowDesc">{description}</p>
                </Col>
                <Col sm={4} className="menu_col2">
                    <img src={MENU_IMG+menuImg} className="menu_Image"/>
                    <Button className="menuButton">ADD</Button>
                    <p>Customisable</p>
                </Col>
            </Row>
            <hr className="solid"></hr>
        </Container>
    )
}

export default MenuCard;