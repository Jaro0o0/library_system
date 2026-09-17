import Img from '../../assets/images/aboutImages/about-us-img.jpg'
import Container from '../common/Container';
import CommonHeading from '../common/CommonHeading';
import { Button } from '@mui/material';
import {motion} from 'framer-motion'
import { fadeInUp,viewportConfig } from '../../animations/commonAnimations';
import { useNavigate } from 'react-router';
import useGetUser from '../../hooks/useGetUser';



function AboutSection() {

    const navigate = useNavigate();
    const { userName } = useGetUser();


    return (

         <Container>
            <motion.div className=" grid grid-cols-1 md:grid-cols-2 gap-8"
               variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}>
           
              
            
            
                <div className='  p-4 overflow-hidden '
            
                                
                     
                >
                    <img src={Img } alt='coffe' className='w-full h-full object-cover rounded-2xl'/>
                </div>
                <div className='p-8'>
                    <CommonHeading>About us</CommonHeading>
                    <h2 className='text-4xl font-bold text-gray-900 mb-3'>Book Tracker</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">Book Tracker helps you take control of your reading life. Browse our catalog and borrow your next favorite book in just a few clicks, keep a clear record of everything you've borrowed and returned, and discover new titles through recommendations tailored to your reading history.</p>
                    <Button variant='contained' onClick={() => userName ? navigate(`/users/${userName}`) : navigate('/login')} className='primary-button'>Try now</Button>
                </div>

            </motion.div>
        </Container>


      );
}

export default AboutSection;