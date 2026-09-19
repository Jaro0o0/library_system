import Hero_IMG from '../../assets/images/heroImages/plans-hero-img.jpg'
import CommonHeading from '../common/CommonHeading';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/commonAnimations';




function PlansHero() {

    

    return (

        <div className="w-full h-[70vh] relative flex items-center">
            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none z-12'/>
            <img src={Hero_IMG} alt='plans-hero-img'  className='absolute inset-0 w-full h-full object-cover object-top'/>
            
            {/* TEXT_BOX */}
            <motion.div className="container mx-auto max-w-9xl  p-4 z-20"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
            
            >
                    <CommonHeading>Plans</CommonHeading>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                       Find the perfect plan for your reading journey
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                        Compare our plans and choose the one that fits your needs  flexible
                    </p>
                   
           
            </motion.div>
        </div>

      );
}

export default PlansHero;