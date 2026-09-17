


import Hero_Img from '../../assets/images/heroImages/categories-hero-img.jpg'
import Header from '../common/Header';
import { Button } from '@mui/material';
import CommonHeading from '../common/CommonHeading';
import { motion} from 'framer-motion';
import { fadeInUp } from '../../animations/commonAnimations';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import useGetUser from '../../hooks/useGetUser';
import { handleGetStartedButton } from '../../utils/handleGetStartedButton';

function CategoriesHero() {

 
    const {userName} = useGetUser();
    const navigate = useNavigate();



    return ( 
      <>
        <Header/>
        <div className="h-[70vh] relative flex items-center">
              <img src={Hero_Img } className='absolute inset-0 w-full h-full object-cover object-center'/>
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
                      Find the products that are right for you - all ain one intuitive place.
                  </p>
                  <Button component={Link} to={userName ? `users/${userName}` : '/login'}  className="primary-button w-fit"  variant='contained'>Get Started</Button>
              </motion.div>
        </div>
       </>
     );
}

export default CategoriesHero;