import React, { useState } from "react";
import styled from "styled-components";

// use ES6 default parameter (=[]) to prevent undefined
const ProductImages = ({ images = [] }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  return (
    <Wrapper>
      <img src={mainImg?.url} alt="main image" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image?.url}
              key={image?.id}
              alt="other images"
              onClick={() => setMainImg(images[index])}
              className={`${image.url === mainImg.url ? "active" : ""}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-grey-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;