import styled from "styled-components";
import img from "../../assets/image-product-desktop.jpg";

export const ImageSection = styled.div`
  background-image: url(${img});
  width: 50%;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 0 0 10px;
  @media (max-width: 600px) {
    width: 100%;
    min-height: 326px;
    height: 100%;
    border-radius: 10px 10px 0 0;
    background-position: 50% 34%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
