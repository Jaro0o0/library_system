import Container from '../components/common/Container';
import { useState } from 'react';
import { motion } from "framer-motion";
import recomendedListAnimation from '../animations/recomendedListAnimation';
import toast from "react-hot-toast";
import { Button } from '@mui/material';
import Section from '../components/common/Section';

//lib
import fantasyAuthors from '../lib/Authors/fantasyAuthors';

// import sciFiAuthors from '../lib/Authors/sciFiAuthors';












function RecomendedList({ title, authors, onSubmit }) {

    const [choose,setChoose] = useState<string[]>([]);
    const [count,setCount] = useState(0);
    const [pageType,setPageType] = useState("fantasy");
  

    //Heanbdles
    const submitHandler = () => {
    if(count === 0){
        toast.error("You must choose minimal one author");
    }
    }


    const countHandler = () => {
        if(count >= 3 ) {
            toast.error("You can choose only 3 authors");
        }
    }

   

    const fantasyButtonHandler = () => {
        onSubmit?.();
        setPageType("sci-fi")
    }

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
                        <h2 className=' text-4xl'>{count}/3</h2>
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
                                            onClick={() => {
                                                setChoose(prev => {
                                                    if(prev.includes(author.name)){
                                                        setCount(c => Math.max(c - 1, 0))
                                                        return prev.filter(name => name !== author.name)
                                                    }
                                                    if(prev.length >= 3){
                                                        countHandler();
                                                        return prev;
                                                    }
                                                    setCount(c => Math.min(c + 1, 3))
                                                    return [...prev, author.name]
                                                })
                                            }}
                                            variants={recomendedListAnimation.item}
                                        
                                        >
                                            <span>{author.name}</span>
                                            <img src={author.img} alt='author' className='rounded-full object-cover w-50 h-50'/>

                                        </motion.div>
                                    )
                                })}
                        </motion.div>
                        <div className='flex justify-center mt-4'>
                            <Button variant="contained" size="large" className='!bg-green-400 !text-white' disabled={count === 0} onClick={() => { submitHandler(); fantasyButtonHandler(); }}>submit</Button>
                        </div>
                    </Container>
            


            {/* SCI-FI_PAGE */}
            { pageType === "sci-fi" &&
                <Container>
                    <div></div>
                </Container>
            }

            </div>
        </Section>
        </>
     );
}

export default RecomendedList;