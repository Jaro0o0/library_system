import Container from "../common/Container";
import { Button } from "@mui/material";
import CommonHeading from "../common/CommonHeading";
import { fadeInUp, viewportConfig,gridAnimate,gridItemsAnimate } from '../../animations/commonAnimations';
import { motion } from "framer-motion";
import { Link }from "react-router";
import useGetUser from "../../hooks/useGetUser";



const premiumData = [
    {
        name: 'Individual',
        price: '30',
        account: '1'

    },
    {
        name: 'Student',
        price:'40',
        account: '2'
    },
    {
        name: 'Duo',
        price:'50',
        account: '3'
    },
]


function Premium() {


    const { userName  } = useGetUser();


    return ( 
        <>
        <Container>
            {/* TEXT_BOX */}
            <motion.div className="text-center mb-12 py-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                >
                <CommonHeading>Plans</CommonHeading>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Explore more possibilities</h2>
                <p className="text-slate-500 mt-3 max-w-xl mx-auto">Unlock unlimited reading, audiobooks and offline access with a Premium plan.</p>
            </motion.div>
            {/* Grid */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                variants={gridAnimate}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}


            >
                {premiumData.map((item, index) => {
                    return(
                        <motion.div key={index} className="shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 rounded-2xl p-8 relative flex flex-col justify-between min-h-[560px] h-full bg-white"
                                variants={gridItemsAnimate}
                                
                                whileHover={{
                                    scale: 1.05,
                                    transition: {
                                    duration: 0.2,
                                    ease: "easeInOut",
                                    },
                                }}

                                           
                        >
                            {/* for_month */}
                            <div className="px-4 py-1.5 max-w-[160px] w-full bg-gradient-to-r from-green-400 to-green-500 text-white text-sm font-semibold rounded-lg absolute -top-0 left-0 shadow-md ">
                                <span>0 PLN for 3 months</span>
                            </div>
                            {/* Title_BOx */}
                            <div className="mt-10">
                                  <h3 className="text-2xl font-bold text-slate-900 mt-3">{item.name}</h3>
                                  <span className="text-slate-500 text-sm">{`then ${item.price} PLN per month`}</span>
                            </div>
                            <div className="p-4 border-b border-slate-100 bg-slate-50 rounded-xl">
                                 <span className="text-3xl font-bold text-slate-900">0 PLN</span>
                                   <span className="text-slate-500 block text-sm mt-1">{`then ${item.price} PLN per month`}</span>
                            </div>
                            {/* List */}
                            <div className="mt-6 mb-10" >
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                                        <span>{`${item.account} Premium accoun`}t</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                                        <span>Cancel at any time</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <Button component={Link} to={ userName  ? `/users/${userName }` : '/login'} className="primary-button " variant="contained">try now</Button>
                            <p className="mt-6 text-xs text-slate-400 leading-relaxed">{`0 PLN for 3 months, then ${item.price} PLN per month. Offer available only to users who have not yet used Premium.` }</p>

                        </motion.div>

                    )
                }) }
                

            </motion.div>
        </Container>
        </>
     );
}

export default Premium;