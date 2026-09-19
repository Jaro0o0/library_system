import Hero_Video from '../../assets/videos/about-video.mp4'
import CommonHeading from '../common/CommonHeading';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/commonAnimations';



function AboutHero() {
    return ( 
        <div className="w-full h-screen relative flex items-center">
            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none z-12'/>
            <video src={Hero_Video } autoPlay muted loop
                playsInline  className='absolute inset-0 w-full h-full object-cover  object-center'/>
            
            {/* TEXT_BOX */}
            <motion.div className="container mx-auto max-w-9xl  p-4 z-20"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
            
            
            >
                    <CommonHeading>About</CommonHeading>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                       Find the perfect plan for your reading journey
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                        Compare our plans and choose the one that fits your needs  flexible, affordable, and built for every reader
                    </p>
                    
           
            </motion.div>
        </div>
     );
}

export default AboutHero;