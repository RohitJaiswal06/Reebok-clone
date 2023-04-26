import { Carousel } from 'antd';
import C1 from '../Images/C1.jpg';
import C2 from '../Images/C2.jpg';
import C3 from '../Images/C3.jpg';
import C4 from '../Images/C4.jpg';
const contentStyle = {
  height: '650px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carous = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img className='banner' src={C1} alt='c1/jpg' /></h3>
    </div>
    <div>
        <h3 style={contentStyle}><img className='banner' src={C2} alt='c2/jpg' /></h3>
    </div>
    <div>
        <h3 style={contentStyle}><img className='banner' src={C3} alt='c3/jpg' /></h3>
    </div>
    <div>
        <h3 style={contentStyle}><img className='banner' src={C4} alt='c4/jpg' /></h3>
    </div>
  </Carousel>
);
export default Carous;