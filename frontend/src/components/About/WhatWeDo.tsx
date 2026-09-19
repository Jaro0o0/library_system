import Container from "../common/Container";
import CommonHeading from "../common/CommonHeading";
import AboutAccordion from './AboutAccordion'
import {motion} from 'framer-motion'
import { fadeInUp,viewportConfig } from '../../animations/commonAnimations';

import Img from '../../assets/images/aboutImages/about-img.jpg'

function WhatWeDo() {
    return ( 
        <div>
            <Container>
                {/* TEXT_BOX */}
                <motion.div className="mb-2 py-10"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}>
                
                
                    <CommonHeading>What we do</CommonHeading>
                    <h2 className='text-4xl font-bold text-gray-900 mb-3'>Everything you need to discover your next great read.</h2>
                    <p className="text-gray-500 leading-relaxed mb-6">From endless genres to easy borrowing and reading on any device — we've built a platform that puts your next favorite book just a few clicks away.</p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* accordion */}
                    <div className="pr-4">
                        <AboutAccordion/>
                    </div>
                    {/* Img */}
                    <div>
                        <img src={Img} className="w-full h-[420px] md:h-[520px] lg:h-[700px] object-cover object-bottom rounded-2xl shadow-lg"/>
                    </div>
                </div>
            </Container>
        </div>
     );
}

export default WhatWeDo;