
import Container from "../common/Container";
import  {Button } from "@mui/material"
import CommonHeading from "../common/CommonHeading"
import { fadeInUp, viewportConfig } from '../../animations/commonAnimations';

import { motion } from "framer-motion";
import {Link} from "react-router";


const features = [
  {
        title: 'Borrow books in seconds',
        description:
        'Browse the catalog and borrow available books with just a few clicks.',
        icon: '📚',
    },
    {
        title: 'Easy returns',
        description:
        'Return your books quickly and keep track of due dates without hassle.',
        icon: '⏳',
    },
    {
        title: 'Your reading history, all in one place',
        description:
        'Keep a clear record of the books you’ve borrowed and returned.',
        icon: '📖',
    },
    {
        title: 'Recommendations made for you',
        description:
        'Get book recommendations based on your reading history.',
        icon: '🔍',
    },
]

function Features() {

   



    




    return (
        <section id="features" className="w-full px-4 py-20 bg-slate-50">
            <Container>
                <motion.div className="text-center mb-14"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                  >
                   <CommonHeading>
                        Why Book Tracker
                   </CommonHeading>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                        A smarter way to manage your reading
                    </h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Keep track of the books you borrow, discover recommendations based on your reading history, and find more authors you’ll love — all in one place.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div
                             key={feature.title}
                            className=" bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col items-center  "
                        >
                           
                        
                            <span
                                className=" mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 text-2xl  "
                                role="img"
                                aria-hidden="true"
                            >
                                {feature.icon}
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 mt-4">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 mt-2 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-14">
                    <Button component={Link} to='/plans' className="primary-button"  variant='contained'>See plans</Button>
                </div>
                
               
            </Container>
        </section>
    )
}

export default Features
