import React, { useContext } from "react";
// import { dataContext } from '../../data/DataContextProvider'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";

function Faq() {
  //   const { faqData } = useContext(dataContext)

  const faqData = [
    {
      id: 2011,
      question: "How do I close account?",
      answer:
        "Instead of closing your account, you have the option to pause your alerts. You can also set your resume to private so that your information is not searchable on Indeed. \n\n If you wish to use Indeed again after closing your account, you can create a new account using the same or any other email address, however, you will not have access to any of your original information.",
    },
    {
      id: 2012,
      question: "How do I reset my password?",
      answer:
        "If you would like to reset your password, please visit the Sign In link in the upper right corner of any Indeed page.\n\n Click Forgot Your Password? at the bottom of the login box, then enter the email address associated with your Indeed account and click Submit. \n\nCheck your spam or junk folder if you don't see the email in your inbox. Be sure to click the link as soon as you receive it - it's valid for 24 hours.",
    },
    {
      id: 2013,
      question: "I can't Sign in to My account?",
      answer:
        "If you would like to reset your password, please visit the Sign in link in the upper right-hand corner of any Indeed page. \n\n Click Forgot Your Password? at the bottom of the login box, enter the email address associated with your Indeed account and click Submit. Check your spam or junk folder if you don't see the email in your inbox.  \n\n If you accidentally created an Indeed account with a typo in your email or if you no longer have access to the email address, unfortunately, you will not be able to recover the password for the account and will need to create a new account. ",
    },
    {
      id: 2021,
      question: "How can I upload my cv using GigHunt app?",
      answer: "Use the upload feature in the user's page to upload your cv",
    },
    {
      id: 2022,
      question: "How to apply for a job in GigHunt?",
      answer:
        "We are so happy you are choosing to use GigHunt to assist in your job search! Please note that GigHunt does not operate as a recruiting service, but rather functions as a job search engine. \n\n To apply for jobs on GigHunt, first navigate to our homepage. Here you will find a search bar, you can enter your desired keywords related to the type of job you’re looking for, a company name, or industry you would like to work in.Once you have your search set up, click  view  details.",
    },
    {
      id: 2023,
      question: "Improving Your GigHunt Job Searches (Tips and Help)",
      answer:
        " Employers post hundreds of new jobs every month. Sifting through so many jobs can be hard, frustrating, and sometimes stressful. Our goal in this article is to help you maximize your job search and connect you to the right employers.To do that use keyword combinations in the search bar",
    },
  ];
  console.log(faqData);

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const displayQuestions = faqData.map(({ id, question, answer }) => {
    return (
      <>
        
        <Accordion key={id} open={open === id} >
          <AccordionHeader onClick={() => handleOpen(id)}>
            <div className="flex ">
              <span className="">{question}</span>{" "}
              <IoIosArrowDown className="text-left ml-3" size="1.5rem" />
            </div>
          </AccordionHeader>
          <AccordionBody>{answer}</AccordionBody>
        </Accordion>
      </>
    );
  });

  return (
    <>
    <div className="">
    <div className="faq mt-20 px-16 ">
      <h3 className="text-3xl text-center font-bold mb-10">
        Frequently Asked Questions
      </h3>

      <div className="border py-3 px-5 rounded-lg  pt-10 pb-10">{displayQuestions}</div>
    </div>
    </div>
    </>
  );
}

export default Faq;
