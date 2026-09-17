import Img from '../../assets/images/plansImages/plans-img.jpg'
import Container from '../common/Container';
import CommonHeading from '../common/CommonHeading';
import { Button } from '@mui/material';
import { motion} from 'framer-motion';
import { useNavigate } from 'react-router';
import useGetUser from '../../hooks/useGetUser';
import { handleGetStartedButton } from '../../utils/handleGetStartedButton';

import { fadeInUp,viewportConfig  } from '../../animations/commonAnimations';




function PlansHow() {

    const userName = useGetUser();
    const navigate = useNavigate();


    return ( 
        <Container>
            <motion.div className=" grid grid-cols-1 md:grid-cols-2 gap-8"
                   variants={fadeInUp}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                    duration: 0.5,
                                    delay: 0.5,
                                    },
                                }}
                            viewport={viewportConfig}>
            
            
                <div className='  p-4 overflow-hidden '
                   
                                
                     
                >
                    <img src={Img } alt='coffe' className='w-full h-full object-cover rounded-2xl'/>
                </div>
                <div className='p-8'>
                    <CommonHeading>Try free</CommonHeading>
                    <h2 className='text-4xl font-bold text-gray-900 mb-3'>Try it now for free</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">Join thousands of readers already growing their library with our platform. Get unlimited access to your favorite titles, personalized recommendations, and exclusive member perks. Cancel anytime, no strings attached.</p>
                     <Button onClick={ () => handleGetStartedButton(navigate, userName) } className="primary-button w-fit"  variant='contained'>Get Started</Button>
                </div>

            </motion.div>
        </Container>
     );
}

export default PlansHow;