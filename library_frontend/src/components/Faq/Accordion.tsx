import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import Container from '../common/Container';

function AccordionComponent() {
    return ( 
            <div className='p-8 mb-8'>
                  {/* TEXT_BOX */}
                        <div>
                            <h1 className='text-3xl'>Questions</h1>
                        </div>



                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}  
                            >
                            <Typography component="span">Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                       
                            >
                            <Typography component="span">Accordion 2</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                         
                            >
                            <Typography component="span">Accordion Actions</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                            <AccordionActions>
                            <Button>Cancel</Button>
                            <Button>Agree</Button>
                            </AccordionActions>
                        </Accordion>
                </div>
     );
}

export default AccordionComponent;