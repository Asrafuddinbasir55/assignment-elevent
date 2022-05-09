import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import UseInventory from '../../hooks/UseInventory';
import Product from '../Product/Product';
import Produc2 from '../Product/Product2';
import Product2 from '../Product/Product2';



// use hooks
const Home = () => {
    const[inventory,setInventory] = UseInventory();
   
    return (
        <div>
          
          <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://ibb.co/jGPjhLb"
                alt="First slide"
                />
                


            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/kqGX6Hr/Samsung-Galaxy-A73-5-G-White.jpg"
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/HN6wFpn/banner-3.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
<Container>


              
                
               <Row>
                 <h2 className='web-title text-primary text-center py-5'>Inventory Items</h2>
                 <Product></Product>
               </Row>
              
           </Container>
             <div className='text-center my-5 review-button'>
             <Link  to='/inventory'>See All Inventory</Link>
             
             </div>
            
             <img
                className="d-block w-100"
                src="https://i.ibb.co/kGmg3H6/Samsung-Galaxy-A53-5-G-Blue-Price-in-Bangladesh.jpg"
                alt=""
                />
             {/* <Row>
                 <h2 className='web-title text-primary text-center py-5'>Product Items</h2>
                  <Product2></Product2>
               </Row> */}
        </div>
    );
};

export default Home;