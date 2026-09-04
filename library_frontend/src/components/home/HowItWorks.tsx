import { Container, Button } from '@mui/material';
import Tolkien_Img from '../../assets/images/recommendList/tolkien.jpg'
import CommonHeading from '../common/CommonHeading';





function HowItWorks() {
    return (  
        <>
        <Container>
            <CommonHeading>How it works</CommonHeading>
            <h2></h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2  gap-6  ">
             
                
                    
                    {/* TExt_col */}
                    <div >
                        <div className='flex flex-col  h-full pt-4 pr-4'>
                            <div className='mb-2'>
                                <h3 className='text-3xl mb-2'>You don't know what you want to read?</h3>
                                <p>Check recomeded section</p>
                            </div>
                            <Button variant='contained'>Get Started</Button>
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
                    <div >
                        <div className='flex flex-col  h-full pt-4 pr-4'>
                            <div>
                                <h3>You don't know what you want to read</h3>
                                <p>Check recomeded section</p>
                            </div>
                            <Button variant='contained'>Get Started</Button>
                        </div>
                    </div>
                      {/* TExt_col */}
                    <div >
                        <div className='flex flex-col  h-full pt-4 pr-4'>
                            <div>
                                <h3>You don't know what you want to read</h3>
                                <p>Check recomeded section</p>
                            </div>
                            <Button variant='contained'>Get Started</Button>
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