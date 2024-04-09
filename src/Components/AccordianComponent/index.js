import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "./accordianComponent.css";
const ExpandMoreIcon=()=>{
    return(
        <div className='expand-icon'>
            <img className='expand-img' src='plus.png' alt=''/>
        </div>
    )
}
const AccordianComponent=({question,answer})=>{
    return(
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='accordian-heading'
        >
          <Typography className='heading-text'>{question}</Typography>
        </AccordionSummary>
        <AccordionDetails  className='accordian-text-container'>
          <Typography className='accordian-text'>
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
}
export default AccordianComponent;