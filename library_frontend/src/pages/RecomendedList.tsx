import Container from '../components/common/Container';
import { useState } from 'react';
import { motion } from "framer-motion";
import recomendedListAnimation from '../animations/recomendedListAnimation';
import toast from "react-hot-toast";
import { Button } from '@mui/material';
import Section from '../components/common/Section';

type Author = {
    name: string;
    img: string;
};

type RecomendedListProps = {
    title: string;
    authors: Author[];
    onSubmit: (authors: string[]) => void;
};

function RecomendedList({ title, authors, onSubmit }: RecomendedListProps) {

    const [choose,setChoose] = useState<string[]>([]);

    const toggleAuthor = (authorName: string) => {
        if (choose.includes(authorName)) {
            setChoose(choose.filter(name => name !== authorName));
            return;
        }

        if (choose.length >= 3) {
            toast.error("You can choose only 3 authors");
            return;
        }

        setChoose([...choose, authorName]);
    };

    return ( 
        <>

        <Section>
            <div className="w-full h-screen z-20">
                
            {/* FANTASY_PAGE */}
          
                    <Container>
                    {/* TEXT_BOX */}
                    <div className='mb-2 text-3xl text-center mb-4'>
                        <h1 className='text-3xl font-bold mb-2'>{ title }</h1>
                        {/* COUNTER */}
                        <h2 className=' text-4xl'>{choose.length}/3</h2>
                    </div>
                    
                    
                            {/* Grid */}
                            <motion.div className="grid grid-cols-3 gap-6 "
                                variants={recomendedListAnimation.container}
                                initial="hidden"
                                whileInView="show"
                                
                                viewport={{ once: true, amount: 0.15 }}>
                                {authors.map((author, index) => {
                                    return(
                                        <motion.div
                                            key={index}
                                            
                                            className={`p-9 ${choose.includes(author.name) ? "bg-black" : "bg-amber-50" } flex items-center   flex flex-col rounded-2xl shadow-xl cursor-pointer`}
                                            variants={recomendedListAnimation.item}
                                            whileHover={recomendedListAnimation.hover}
                                            onClick={() => toggleAuthor(author.name)}
                                        
                                        >
                                            <span>{author.name}</span>
                                            <img src={author.img} alt='author' className='rounded-full object-cover w-50 h-50'/>

                                        </motion.div>
                                    )
                                })}
                        </motion.div>
                        <div className='flex justify-center mt-4'>
                            <Button variant="contained" size="large" className='!bg-green-400 !text-white' disabled={choose.length !== 3} onClick={() => onSubmit?.(choose)}>submit</Button>
                        </div>
                    </Container>
            
            </div>
        </Section>
        </>
     );
}

export default RecomendedList;
