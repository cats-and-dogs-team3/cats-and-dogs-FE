import react from "react";
import styled from "styled-components";

function Slider() {
  return (
    <StyledSlider>
      <p>애기야 그만자.. 나두 졸려.. </p>
    </StyledSlider>
  );
}
export default Slider;

const StyledSlider = styled.div`
  width: 90%;
  height: 400px;
  background-image: url("https://product.cdn.cevaws.com/var/storage/images/media/adaptil-2017/images/www-ww/shutterstock_395310793-3-2/3547034-1-www-WW/shutterstock_395310793-3-2.jpg");
  background-position: 0, 300px;
  margin: 20px auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;
