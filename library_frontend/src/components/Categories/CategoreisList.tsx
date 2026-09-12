import Tolkien_Img from '../../assets/images/recommendList/tolkien.jpg'
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Container from '../common/Container';
import { Link } from 'react-router';


import Fantasy_IMG from '../../assets/images/categoriesImages/fantasy-img.jpg'
import Sci_FI_IMG from '../../assets/images/categoriesImages/sci-fi-img.jpg'
import Horror_IMG from '../../assets/images/categoriesImages/horror-img.jpg'
import Romance_IMG from '../../assets/images/categoriesImages/romance-img.jpg'
import Adventure_IMG from '../../assets/images/categoriesImages/adventure-img.jpg'
import Feynman_IMG from '../../assets/images/categoriesImages/Richard-Feynman-img.jpg'


const categoriesList = [
    {
        name: 'fantasy',
        img: Fantasy_IMG
    },
    {
        name: 'science fiction',
        img: Sci_FI_IMG
    },
    {
        name: 'horror',
        img: Horror_IMG
    },
    {
        name: 'romance',
        img: Romance_IMG
    },
    {
        name: 'adventure',
        img: Adventure_IMG
    },
    {
        name: 'biography',
        img: Feynman_IMG
    },
  
    
]




function CategoriesList() {
    return ( 
        <Container>
            {/* Gird */}
            <div className='grid grid-cols-3 gap-6'>
                {categoriesList.map((item,index)=> {
                    return (
                        <div key={index} className='p-4 shadow-md'>
                            <div className='relative'>
                                {/* Overlay */}
                                <div className='absolute inset-0  bg-green-300/10  pointer-events-none'></div>
                                <img src={item.img} className='w-full object-cover rounded-xl mb-4 h-[400px]'/>
                            </div>

                            <h3 className='text-xl font-bold mb-2'>{item.name}</h3>
                            <Button variant="contained" endIcon={<SendIcon />}  component={Link}  to={`/categories/${item.name}`} className='!bg-green-400'> Send </Button>
                                                                            
                                                                            
                        </div>
                    )
                })}
            </div>
        </Container>
     );
}

export default CategoriesList;