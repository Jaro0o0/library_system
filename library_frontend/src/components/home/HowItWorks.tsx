import { Container, Button } from '@mui/material';
import Tolkien_Img from '../../assets/images/recommendList/tolkien.jpg'
import CommonHeading from '../common/CommonHeading';





function HowItWorks() {
    return (  
        <>
        <Container>
            <div className='mb-2'>
                <CommonHeading>How it works</CommonHeading>
                <h2 className="text-xl text-gray-600 mt-2">Three simple steps to find your perfect read</h2>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2  gap-6  ">
             
                
                    
                    {/* TExt_col */}
                    <div>
                        <div className='flex flex-col h-full pt-4 pr-4'>
                            <div className='mb-2'>
                                <h3 className='text-3xl mb-2'>Not sure what to read next?</h3>
                                <p>Explore our personalized recommendations tailored to your tastes and discover your next favorite book.</p>
                            </div>
                            <Button className='!bg-green-400' variant='contained'>Get Started</Button>
                        </div>
                    </div>
                    {/* Img_col */}
                    <div>
                        <img src={Tolkien_Img} className='w-full h-full object-cover'/>
                    </div>
                    {/* Img_col */}
                    <div>
                        <img src={Tolkien_Img} className='w-full h-full object-cover'/>
                    </div>
                    {/* TExt_col */}
                    <div>
                        <div className='flex flex-col h-full pt-4 pr-4'>
                            <div>
                                <h3>Track your reading journey</h3>
                                <p>Keep a record of every book you have read, rate your favorites, and build a personal library that grows with you.</p>
                            </div>
                            <Button className='!bg-green-400' variant='contained'>Get Started</Button>
                        </div>
                    </div>
                    {/* TExt_col */}
                    <div>
                        <div className='flex flex-col h-full pt-4 pr-4'>
                            <div>
                                <h3>Join a community of book lovers</h3>
                                <p>Share your thoughts, write reviews, and connect with fellow readers who share your passion for great literature.</p>
                            </div>
                            <Button className='!bg-green-400' variant='contained'>Get Started</Button>
                        </div>
                    </div>
                    {/* Img_col */}
                    <div>
                        <img src={Tolkien_Img} className='w-full h-full object-cover'/>
                    </div>
                  
                    
                
              
            
            </div>
        </Container>
        </>
    );
}

export default HowItWorks;