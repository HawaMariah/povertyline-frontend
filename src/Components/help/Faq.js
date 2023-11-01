import React, { useContext } from 'react'
import { dataContext } from '../../data/DataContextProvider'
import {Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io"

function Faq() {
  const { faqData } = useContext(dataContext)
  console.log(faqData)

  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const displayQuestions = faqData.map(({ id, question, answer }) => {
    return (
      <Accordion key={id} open={open === id}>
        <AccordionHeader onClick={() => handleOpen(id)}>
          <div className="flex">
            <span className="">{question}</span> <IoIosArrowDown className="text-left ml-3" size="1.5rem" />
          </div>
        </AccordionHeader>
        <AccordionBody>
          {answer}
        </AccordionBody>
      </Accordion>
     
    )
  })

  return (
    <div className="faq">
    <h3 className="text-2xl text-center font-bold mb-4">Frequently Asked Questions</h3>

    <div className="border py-3 px-5 rounded-lg">
      {displayQuestions}
    </div>
  
  </div>
  )
}

export default Faq