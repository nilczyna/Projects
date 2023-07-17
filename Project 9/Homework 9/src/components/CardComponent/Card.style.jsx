import styled from "styled-components";

export const CardComponentStyle = styled.div`
  display: flex;
  border-radius: 10px;
  min-height: 400px;
  height: 100%;
  max-width: 500px;
  width: 600px;
  box-shadow: 0px 0px 3px 0px rgba(116, 118, 130, 0.49);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
