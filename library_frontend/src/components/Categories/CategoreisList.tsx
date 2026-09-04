import Tolkien_Img from '../../assets/images/recommendList/tolkien.jpg'
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Container from '../common/Container';

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
        name: 'mystery',
        img: Tolkien_Img
    },
    {
        name: 'thriller',
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
        name: 'historical fiction',
        img: Tolkien_Img
    },
    {
        name: 'crime fiction',
        img: Tolkien_Img
    },
    {
        name: 'dystopian fiction',
        img: Tolkien_Img
    },
    {
        name: 'biography',
        img: Tolkien_Img
    },
    {
        name: 'autobiography',
        img: Tolkien_Img
    },
    {
        name: 'poetry',
        img: Tolkien_Img
    },
    {
        name: 'drama',
        img: Tolkien_Img
    },
    {
        name: 'comedy',
        img: Tolkien_Img
    },
    {
        name: 'tragedy',
        img: Tolkien_Img
    },
    {
        name: 'satire',
        img: Tolkien_Img
    },
    {
        name: 'psychological fiction',
        img: Tolkien_Img
    },
    {
        name: 'historical',
        img: Tolkien_Img
    },
]




function CategoriesList() {
    return ( 
        <Container>
            <div className='grid grid-cols-4 gap-6'>
                {categoriesList.map((item,index)=> {
                    return (
                        <div key={index} className='p-4 shadow-md'>
                            <img src={item.img} className='w-full object-cover rounded-xl'/>
                            <h3 className='text-xl font-bold'>{item.name}</h3>
                            <Button variant="contained" endIcon={<SendIcon />} className='!bg-green-400'> Send </Button>
                                                                            
                                                                            
                        </div>
                    )
                })}
            </div>
        </Container>
     );
}

export default CategoriesList;