import Tolkien_Img from '../../assets/images/recommendList/tolkien.jpg'
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Container from '../common/Container';
import { Link } from 'react-router';


const categoriesList = [
    {
        name: 'fantasy',
        img: Tolkien_Img
    },
    {
        name: 'science fiction',
        img: Tolkien_Img
    },
    {
        name: 'horror',
        img: Tolkien_Img
    },
    {
        name: 'romance',
        img: Tolkien_Img
    },
    {
        name: 'adventure',
        img: Tolkien_Img
    },
    {
        name: 'biography',
        img: Tolkien_Img
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
                            <img src={item.img} className='w-full object-cover rounded-xl mb-4'/>
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