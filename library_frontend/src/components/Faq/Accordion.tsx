import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import Container from '../common/Container';

function AccordionComponent({ accordionTitle, accordionQuestion }) {
    return ( 
            <div className='p-8 mb-8'>
                  {/* TEXT_BOX */}
                        <div className='mb-4'>
                            <h1 className='text-3xl'>{accordionQuestion}</h1>
                        </div>



                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}  
                            >
                            <Typography component="span">{accordionQuestion}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            {accordionTitle}
                            </AccordionDetails>
                        </Accordion>
                </div>
     );
}

export default AccordionComponent;