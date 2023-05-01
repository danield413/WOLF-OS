import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components'

const Container = styled.div`
  
  padding: 30px;
  height: 60vh;

  & .image {
    width: 400px;
    margin: 0 auto;
  }
`

const ImageItems = [
  {
    id: 1,
    src: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    alt: "imagen 1"
  },
  {
    id: 2,
    src: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
    alt: "imagen 2"
  },
  {
    id: 3,
    src: "https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI",
    alt: "imagen 3"
  },
  {
    id: 4,
    src: "https://fastly.picsum.photos/id/44/4272/2848.jpg?hmac=a0rRK2VqTNYMvxqfQjFI65m4ZzMGnKRJzHvrJovjoQQ",
    alt: "imagen 4"
  },
  {
    id: 5,
    src: "https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
    alt: "imagen 5"
  }
]

const Images = () => {
  return (
    <Container>
      <Slider settings={ {dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1}}>
            {ImageItems.map((item) => (
              <div key={item.id} className='image-container'>
                <img src={item.src} alt={item.alt} className='image'/>
              </div>
            ))}
      </Slider>
    </Container>
  )
}

export default Images