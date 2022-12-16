import styled from "styled-components"

export const Img = styled.img`
  width: ${({wd}) => wd || '50rem'};
  height: ${({hg}) => hg || '40rem'};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.50);
  border-radius: 2rem;
`