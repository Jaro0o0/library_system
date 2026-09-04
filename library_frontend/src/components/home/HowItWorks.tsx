import Container from '../../components/common/Container';
import { Button } from '@mui/material';
import Tolkien_Img from '../../assets/images/recommendList/tolkien.jpg'

function HowItWorks() {
    return (  
        <>
        <Container>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2   ">
                {/* TExt_col */}
                <div>
                    <div className='flex flex-col gap-5 p-8'>
                        <h3>You don't know what you want to read</h3>
                        <p>Check recomeded section</p>
                        <Button variant='contained'>Get Started</Button>
                    </div>
                </div>
                {/* Img_col */}
                <div>
                    <img src={Tolkien_Img}/>
                </div>

            </div>
        </Container>
        </>
    );
}

export default HowItWorks;