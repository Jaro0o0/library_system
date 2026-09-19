import { Link } from 'react-router'
import { motion } from 'framer-motion'
import heroVideo from '../../assets/videos/hero-video.mp4'
import CommonHeading from '../common/CommonHeading'
import { fadeInUp} from '../../animations/commonAnimations'
import usegetUserStatus from '../../hooks/useGetUserStatus'
import { Button } from '@mui/material'
import Container from '../common/Container'






function Hero() {

    const isUserLogin = usegetUserStatus();


    return (
        <>
        <div className="w-full min-h-screen relative flex items-center">
            
        
                <video
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none" />

                <Container>
                    {/* INNER */}
                    <motion.div
                        className="relative z-10 w-full  "
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                    >

                        <div className="max-w-2xl">
                            {/* HEADING */}
                            <CommonHeading>
                                Your personal library
                            </CommonHeading>
                            

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Track reading with{' '}
                                <span className="text-green-400">Book Tracker</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 mt-6 leading-relaxed">
                            Browse our extensive catalog and borrow your favorite books with just a few clicks.
                            </p>

                            {/* If User is not login  */}
                            <div className="flex flex-wrap gap-4 mt-8">
                            {isUserLogin ? (
                                <>
                                    <Button component={Link}  to="/register"  className="primary-button">
                                    Create free account
                                    </Button>
                                    <Button component={Link} to="/login"  className="primary-button">
                                        Log in
                                    </Button>
                                
                                </>
                                )
                                : (
                                    <Button className="!bg-green-400  !text-white !font-semibold  !rounded-lg">Start Browsing</Button>
                                )
                            }
                            </div>

                            <ul className="flex flex-wrap gap-6 mt-10 text-sm text-slate-400">
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400" aria-hidden="true">✓</span>
                                    Free account
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400" aria-hidden="true">✓</span>
                                    personalized recommendations
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-green-400" aria-hidden="true">✓</span>
                                    rental history
                                    
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </Container>
        </div>
        
        </>
    )
}

export default Hero
