import styled from "styled-components"

export const Like = styled.img`
  width: ${({wd}) => wd || '2rem'};
  height: ${({hg}) => hg || '2rem'};
  filter: var(--color-point2-filter)
  /* border-radius: 2rem; */
`
