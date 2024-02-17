import React from 'react'
import Layout from '../components/LayoutComp/Layout'
// import { useAuth } from '../context/auth'
import Image from './../images/bggg.jpg'
import Image1 from './../images/keyfeat_coopval.png'
import Image2 from './../images/coopprin_mutassis.png'
import Image3 from './../images/mechanism.png'
import Image4 from './../images/nabard.png'
import Abhishek from './../images/abhishek.png'
import Aditya from './../images/sachin.png'
import Deepak from './../images/deepak.png'
import Rekha from './../images/rekha.png'
import Vishal from './../images/vishal.png'
import BestServices from './../images/best_services.png'
import Categories from './../images/categories.png'
import { useNavigate } from 'react-router-dom'


const Homepage = () => {
  // const [auth, setAuth] = useAuth()

  const navigate = useNavigate()
  const bgStylling = {
    position: 'relative',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.41), rgba(0, 0, 0, 0.4)), url(${Image})`,
    minHeight: '500px',
    height: 'auto',
    width: '100%',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  };
  return (
    <Layout>
      <div style={bgStylling}>
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center text-white text-center"
          style={{height: '90vh'}}>
          <div>
            <h1>FPO KHANAWALI</h1>
            <br />
            <h3>KHANAWALI KISHAN UTPADAK SAGATHAN PRODUCER COMPANY LIMITED</h3>
            <h5 className='small'>
              Our raw material is sourced from our cultivation partner, a Farmer
              Producer Organization (FPO) comprising of more than 1000+ farmers.
              Our production facility is strategically located in close
              proximity with the farmers so that we can ensure the produce is
              fresh when it reaches our facility for best quality.
            </h5>
            <br />
            <div>
              <h5>Purchase our Organic products now</h5>
              <button className='pnf-btn' onClick={(e) => {e.preventDefault(); navigate('/products')}}>🛒Shop now</button>
            </div>
          </div>
        </div> 
      </div>
      </div>
      <div className='container mt-1 mb-3'>
        <img src={BestServices} alt='best_services' width={'100%'} height={'auto'}/>
      </div>
        <div className='mt-4 text-center'>
          <h3 className='text-primary'><b>Board of Directors</b></h3>
          <div className='container director-box '>
          <div className='text'>
            <img src={Abhishek} alt='abhishek' width={'200px'} height={'250px'}/>
            <h5 className='mt-2 text-primary'>Abhishek</h5>
            <h6>CEO/Chairman</h6>
          </div>
          <div>
            <img src={Aditya} alt='aditya' width={'200px'} height={'250px'}/>
            <h5 className='mt-2 text-primary'>Aditya</h5>
            <h6 className='mb-3'>Director</h6>
          </div>
          <div>
            <img src={Deepak} alt='deepak' width={'200px'} height={'250px'}/>
            <h5 className='mt-2 text-primary'>Deepak</h5>
            <h6 className='mb-3'>Director</h6>
          </div>
          <div>
            <img src={Rekha} alt='Rekha' width={'200px'} height={'250px'}/>
            <h5 className='mt-2 text-primary'>Rekha</h5>
            <h6 className='mb-3>'>Director</h6>
          </div>
          <div>
            <img src={Vishal} alt='Vishal' width={'200px'} height={'250px'}/>
            <h5 className='mt-2 text-primary'>Vishal</h5>
            <h6 className='mb-3>'>Director</h6>
          </div>
        </div>
      </div>
      <div className='container mt-1 mb-3'>
        <img src={Categories} alt='categories' width={'100%'} height={'auto'}/>
      </div>
      <div className='container mt-1 mb-3'>
        <img src={Image1} alt='image1' width={'100%'} height={'auto'}/>
      </div>
      <div className='container mt-1 mb-3'>
        <img src={Image2} alt='image2' width={'100%'} height={'auto'}/>
      </div>
      <div className='container mt-1 mb-3'>
        <img src={Image3} alt='image3' width={'100%'} height={'auto'} style={{maxHeight:'500px'}}/>
      </div>
      <div className='container content-box mb-3'>
        <div className='content'>
        <p className='medium'>
        Our Farmer Producer Organisation (FPO) is a legal entity formed by primary producers, viz. farmers, milk producers, fishermen, weavers, rural artisans, craftsmen. A FPO can be a producer company provides for sharing of profits/benefits among the members. In some forms like producer companies, institutions of primary producers can also become member of FPO.
        </p>
        </div>
        <img src={Image4} alt='image3' width={'50%'} height={'40%'} style={{maxHeight:'500px'}}/>
      </div>
    </Layout>
  );
}

export default Homepage;