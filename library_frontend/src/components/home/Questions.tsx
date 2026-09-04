import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Container from '../common/Container';


function Questions() {
    const id = "questions";
    return ( 
        <div>
        <Container>
            {/* TEXT_BOX */}
            <div className='flex justify-center'>
                <h2 className='text-3x'>Do you have questions?</h2>
            </div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls={`${id}-panel1-content`}
                id={`${id}-panel1-header`}
                >
                <Typography component="span">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`${id}-panel2-content`}
                id={`${id}-panel2-header`}
                >
                <Typography component="span">Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
        </div>
     );
}

export default Questions;