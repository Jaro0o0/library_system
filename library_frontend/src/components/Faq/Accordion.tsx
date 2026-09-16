


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function AccordionComponent({ id, accordionTitle, accordionQuestion, scrollRef }) {
  return (
    <>
        
        <Accordion id={id} className="mb-3 bg-gray-100! rounded-2xl!" elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 3 }}>
            <Typography component="span">{accordionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 5 }}>{accordionQuestion}</AccordionDetails>
        </Accordion>
    </>
    
  );
}

export default AccordionComponent;