import Container from '../components/common/Container';
import { useState } from 'react';
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from '../animations/commonAnimations';
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

        
            <div className="w-full h-screen overflow-hidden z-20">
                {/* FANTASY_PAGE */}
            
              
                    <Container>
                        {/* TEXT_BOX */}
                        <div className='mb-3  mt-6 text-center'>
                            <h1 className='text-2xl font-bold mb-1 md:text-3xl'>{ title }</h1>
                            {/* COUNTER */}
                            <h2 className='text-2xl md:text-3xl'>{choose.length}/3</h2>
                        </div>
                        
                        
                                {/* Grid */}
                                <motion.div className="grid grid-cols-3 gap-2 md:gap-6"
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportConfig}
                                    >
                                    {authors.map((author, index) => {
                                        return(
                                            <motion.div
                                                key={index}
                                                
                                                className={`p-2 md:p-4 ${choose.includes(author.name) ? "bg-green-300/50" : "bg-white" } flex flex-col items-center rounded-xl shadow-xl cursor-pointer`}
                                                variants={fadeInUp}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                onClick={() => toggleAuthor(author.name)}
                                            
                                            >
                                                <span className='text-center text-xs md:text-base'>{author.name}</span>
                                                <img src={author.img} alt='author' className='mt-1 size-16 rounded-full object-cover md:size-28'/>

                                            </motion.div>
                                        )
                                    })}
                            </motion.div>
                            <div className='mt-3 flex justify-center'>
                                <Button variant="contained" size="large"  className="!bg-green-400 !text-white disabled:!bg-gray-400 disabled:!text-white"  disabled={choose.length <= 0 } onClick={() => onSubmit?.(choose)}>submit</Button>
                            </div>
                        </Container>
                </div>
        
        </>
     );
}

export default RecomendedList;
