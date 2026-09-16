import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const accordionData = [
    {
        title: 'Discover new titles',
        desc: 'Browse thousands of books across every genre — from fantasy and sci-fi to romance and biography — curated to help you find your next favorite read.'
    },
    {
        title: 'Borrow with ease',
        desc: 'Reserve and borrow books in just a few clicks. No lines, no waiting — your book is ready the moment you need it.'
    },
    {
        title: 'Track your reading',
        desc: "Keep a history of everything you've read and borrowed, and get personalized recommendations based on your taste."
    },
    {
        title: 'Read anywhere',
        desc: "Access your library from any device. Pick up right where you left off, whether you're at home or on the go."
    },
]



function AboutAccordion() {

       
 
        return ( 

                 <div className='p-8 mb-8 bg-white/5 rounded-2xl shadow-sm'>
            


                        {accordionData.map((item,index) => {
                            return (
                                    <Accordion key={index} className="mb-3 !bg-gray-100 !rounded-2xl" 
                                         elevation={0}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}  
                                            sx={{ p:3 ,
                                            }}
                                        >
                                            <Typography component="span" className="font-medium text-lg">{item.title}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className=" text-slate-400" 
                                            sx={{ p:5 }}
                                        >
                                                {item.desc}
                                        </AccordionDetails>
                                        
                                    </Accordion> 
                            )
                        })}
                       
                </div>


     );
}

export default AboutAccordion;