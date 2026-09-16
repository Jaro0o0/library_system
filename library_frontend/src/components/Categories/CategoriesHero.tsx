


import Hero_Img from '../../assets/images/heroImages/categories-hero-img.jpg'
import Header from '../common/Header';
import { Button } from '@mui/material';
import CommonHeading from '../common/CommonHeading';
import { motion} from 'framer-motion';
import { fadeInUp } from '../../animations/commonAnimations';


function CategoriesHero() {

 




    return ( 
      <>
        <Header/>
        <div className="h-[60vh] relative flex items-center">
              <img src={Hero_Img } className='absolute inset-0 w-full h-full object-cover'/>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none" />
              {/* TEXT_BOX */}
              <motion.div className="container mx-auto max-w-9xl  p-4 z-20"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
              >
                    <CommonHeading>
                        categories
                    </CommonHeading>
                  <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                      Discover everything you need in one place.
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                      Find the products that are right for you - all in one intuitive place.
                  </p>
                  <Button className='!bg-green-500 hover:!bg-green-400' variant='contained' size='large'>Try now</Button>
              </motion.div>
        </div>
       </>
     );
}

export default CategoriesHero;