import React ,{useEffect}from 'react'
import CarouselPosts from './carouselPosts'
import HeadMagazin from './headMagazin'
import CardsPosts from './cardsPosts'
import {Col,Row,Container} from 'react-bootstrap'

export default function Magazin(){
    return(
        <>
<Container>
  <Row>
  <Col md={{ span: 6, offset: 4 }}><HeadMagazin/></Col>
  </Row>
  <Row>
  <Col  md={{ span: 6, offset: 2 }}><CarouselPosts/></Col>
  </Row>
  <Row>
  <Col  md={{ span: 6, offset: 2 }}><CardsPosts/></Col>
  </Row>
</Container>
        
        </>
    )
}