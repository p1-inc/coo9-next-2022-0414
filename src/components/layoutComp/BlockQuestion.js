/* eslint-disable */
import { useState, useEffect, useRef } from 'react';


import s from '../../components/Main.module.scss'

import { styled } from '@mui/material/styles';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// import {
//     Box,
//     Button,
//     Dialog,
//     DialogActions
// } from '@mui/material';







export default function BlockQuestions({ title, body, color, noarrow }) {


    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `5px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));


    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(180deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(2),
        },
    }));


    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '5px solid rgba(0, 0, 0, .125)',
    }));



    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };




    const [isExpanded, setIsExpanded] = useState(false);


    const handleExpand = () => {
        setIsExpanded(!isExpanded)

    }

    // useEffect(() => { }, [
    //     console.log(isExpanded)
    // ])

    const noExpandStyle = {
        opacity: '0',
        visibility: 'hidden',
        height: '0',
        padding: '0 1rem 0 1rem',
        border: 'none',
        transition: '.3s ease-in-out',
    }

    const upsidedownStyle = {
        transform: 'rotate(180deg)',
    }


    return (
        <>

            < div div className={`${s.blockquestions} `} onClick={handleExpand}>

                <div className={`${s.wrapper} ${color} `}>
                    <div className={s.icon} style={!isExpanded ? null : upsidedownStyle}  >
                        <ExpandMoreIcon fontSize='large' />
                    </div>
                    <div className={s.title}>{title}</div>
                </div>


                <div className={`${s.bodyWrapper} ${color}`} style={isExpanded ? null : noExpandStyle}>
                    <div className={`${s.body}`} >
                        {isExpanded && body}
                    </div>
                </div>
            </div>


        </>


    )
}
