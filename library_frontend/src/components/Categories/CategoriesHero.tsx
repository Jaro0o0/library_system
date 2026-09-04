import Hero_Img from '../../assets/images/heroImages/categories-hero-img.jpg'
import Header from '../common/Header';
import { Button } from '@mui/material';

function CategoriesHero() {
    return ( 
      <>
        <Header/>
        <div className="h-[60vh]">
              <img src={Hero_Img } className='w-full h-full object-cover  relative'/>
              {/* TEXT_BOX */}
              <div className='absolute top-1/3 left-1/3 -translate-1/2'>
                  <h1 className='text-3xl font-bold text-white mb-4'>Discover everything you need in one place.<br></br> Browse our categories and find the products that are right for you</h1>
                  <p className='mb-8'>Find best plan for you</p>
                  <Button className='!bg-green-400' variant='contained' size='large'>Try now</Button>
              </div>
        </div>
       </>
     );
}

export default CategoriesHero;