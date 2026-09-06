import { Container, Button } from '@mui/material';
import Tolkien_Img from '../../assets/images/recommendList/tolkien.jpg'
import CommonHeading from '../common/CommonHeading';





function HowItWorks() {
    return (  
        <>
        <Container>
            <div className='mb-2 py-10 text-center'>
                <CommonHeading>How it works</CommonHeading>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">Three simple steps to find your perfect read</h2>
                <p className="text-gray-500 mt-3 max-w-xl mx-auto leading-relaxed">
                    From browsing to borrowing — get the most out of your library in just a few moments.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
               
                    
                    {/* TExt_col */}
                    <div>
                        <div className='flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8'>
                            <div className='mb-4'>
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 font-bold text-xl mb-5">1</span>
                                <h3 className='text-2xl font-bold text-gray-900 mb-3'>Not sure what to read next?</h3>
                                <p className="text-gray-500 leading-relaxed">Explore our personalized recommendations tailored to your tastes and discover your next favorite book.</p>
                            </div>
                            <Button className='!bg-green-400 !rounded-lg !font-semibold mt-auto w-fit' variant='contained'>Get Started</Button>
                        </div>
                    </div>
                    {/* Img_col */}
                    <div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                        <img src={Tolkien_Img} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'/>
                    </div>
                    {/* Img_col */}
                    <div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                        <img src={Tolkien_Img} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'/>
                    </div>
                    {/* TExt_col */}
                    <div>
                        <div className='flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8'>
                            <div className='mb-4'>
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 font-bold text-xl mb-5">2</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Track your reading journey</h3>
                                <p className="text-gray-500 leading-relaxed">Keep a record of every book you have read, rate your favorites, and build a personal library that grows with you.</p>
                            </div>
                            <Button className='!bg-green-400 !rounded-lg !font-semibold mt-auto w-fit' variant='contained'>Get Started</Button>
                        </div>
                    </div>
                    {/* TExt_col */}
                    <div>
                        <div className='flex flex-col h-full bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8'>
                            <div className='mb-4'>
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 text-green-500 font-bold text-xl mb-5">3</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Join a community of book lovers</h3>
                                <p className="text-gray-500 leading-relaxed">Share your thoughts, write reviews, and connect with fellow readers who share your passion for great literature.</p>
                            </div>
                            <Button className='!bg-green-400 !rounded-lg !font-semibold mt-auto w-fit' variant='contained'>Get Started</Button>
                        </div>
                    </div>
                    {/* Img_col */}
                    <div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                        <img src={Tolkien_Img} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'/>
                    </div>
                  
            </div>
        </Container>   
        </>
    );
}

export default HowItWorks;