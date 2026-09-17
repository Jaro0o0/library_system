import { Container, Button } from '@mui/material';
import CommonHeading from '../common/CommonHeading';
import {Link }from 'react-router';
import { fadeInUp, viewportConfig, gridAnimate, gridItemsAnimate } from '../../animations/commonAnimations';
import { motion } from "framer-motion";
import useGetUser from '../../hooks/useGetUser';

import First_IMG from '../../assets/images/homeGridImages/grid-img-one.jpg'
import Second_IMG from '../../assets/images/homeGridImages/grid- img-two.jpg'
import Third_IMG from '../../assets/images/homeGridImages/grid-img-three.jpg'






function HowItWorks() {

    const userName = useGetUser();

    return (  
        <>
        <Container>
            {/* TEXT_BOX */}
            <motion.div className='mb-2 py-10 text-center'
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}>

                <CommonHeading>How it works</CommonHeading>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Three simple steps to find your perfect read</h2>
                <p className="text-gray-500 mt-3 max-w-xl mx-auto leading-relaxed">
                    From browsing to borrowing.
                </p>
            </motion.div>
            {/* Grid */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                variants={ gridAnimate}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
              
               
                    
                    {/* TExt_col */}
                    <div>
                        <div className='flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8'>
                            <div className='mb-4'>
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 font-bold text-xl mb-5">1</span>
                                <h3 className='text-2xl font-bold text-gray-900 mb-3'>Create your free account</h3>
                                <p className="text-gray-500 leading-relaxed">Sign up in just a few moments and get full access to the library's resources.</p>
                            </div>
                            <Button component={Link} to={`users/${userName}`} className="primary-button w-fit"  variant='contained'>Get Started</Button>
                        </div>
                    </div>
                    {/* Img_col */}
                    <motion.div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                        variants={gridItemsAnimate}
                                
                        whileHover={{
                            scale: 1.05,
                            transition: {
                            duration: 0.2,
                            ease: "easeInOut",
                            },
                        }}
                    
                    >
                        <img src={First_IMG} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'/>
                    </motion.div>
                    {/* Img_col */}
                    <motion.div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                        variants={gridItemsAnimate}
                                
                        whileHover={{
                            scale: 1.05,
                            transition: {
                            duration: 0.2,
                            ease: "easeInOut",
                            },
                        }}
                    
                    >
                        <img src={Second_IMG} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'/>
                    </motion.div>
                    {/* TExt_col */}
                    <div>
                        <div className='flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8'>
                            <div className='mb-4'>
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 font-bold text-xl mb-5">2</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Discover the book that's right for you</h3>
                                <p className="text-gray-500 leading-relaxed">Find titles that best match your preferences — thanks to automatic recommendations.</p>
                            </div>
                            <Button component={Link} to={`users/${userName}`} className="primary-button w-fit" variant='contained'>Get Started</Button>
                        </div>
                    </div>
                    {/* TExt_col */}
                    <div>
                        <div className='flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8'>
                            <div className='mb-4'>
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 font-bold text-xl mb-5">3</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Enjoy easy access</h3>
                                <p className="text-gray-500 leading-relaxed">Borrow and read comfortably, whenever and wherever you want.</p>
                            </div>
                            <Button component={Link} to={`users/${userName}`} className="primary-button w-fit"  variant='contained'>Get Started</Button>
                        </div>
                    </div>
                    {/* Img_col */}
                    <motion.div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                        variants={gridItemsAnimate}
                                
                        whileHover={{
                            scale: 1.05,
                            transition: {
                            duration: 0.2,
                            ease: "easeInOut",
                            },
                        }}
                    
                    >
                        <img src={Third_IMG } className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'/>
                    </motion.div>
                   
                  
            </motion.div>
        </Container>   
        </>
    );
}

export default HowItWorks;