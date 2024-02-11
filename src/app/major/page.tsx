"use client"
import Image from "next/image";
import styles from "./main.module.css";
import { useState } from "react";
import NavButtons from "@/components/navbuttons";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const questions = [
  { content: "I like to build things", type: "R" },
  { content: "I am a practical person", type: "R" },
  //{ content: "I like working outdoors", type: "R" },
  { content: "I like to do puzzles", type: "I" },
  { content: "I enjoy science", type: "I" },
  //{ content: "I like working with numbers or charts", type: "I" },
  { content: "I like to play instruments or sing", type: "A" },
  { content: "I am a creative person", type: "A" },
  { content: "I like helping people", type: "S" },
  { content: "I like to work in teams", type: "S" },
  { content: "I would like to start my own business", type: "E" },
  { content: "I like selling things", type: "E" },
  { content: "I like to do filing or typing", type: "C" },
  { content: "I am good at keeping records of my work", type: "C" },

];

export default function Majors() {
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));
  const [majorRecommendation, setRecommendations] = useState("");
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false); // New state variable for loading

  async function onSubmit(answers) {
    // The information chat gpt expects
    let score = {
      R: answers[0] + answers[1],
      I: answers[2] + answers[3],
      A: answers[4] + answers[5],
      S: answers[6] + answers[7],
      E: answers[8] +answers[9],
      C: answers[10] + answers[11]
    };

    const response = await fetch('/api/major', {
      method: 'POST',
      body: JSON.stringify(score)
    })
 
 
       // Chat GPT response
       const data = await response.json()
       return data;
  }
  
  const updateAnswer = async (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
    setIndex(index + 1); // Go to next question, stop at the endddsad

    if (index < questions.length - 1) { return; }
    setLoading(true); // Start loading
    const chatgpt_response = await onSubmit(answers);
    console.log(chatgpt_response)
    setRecommendations(chatgpt_response);
     

  };
  // Simplified handlers for yes/no actions
  const handleYes = async () => await updateAnswer(1);
  const handleNo = async () => await updateAnswer(0);

  // Navigation handlers (for future use if needed)
  const goNext = () => setIndex((current) => (current + 1) % questions.length);
  const goBack = () => setIndex((current) => (current === 0 ? questions.length - 1 : current - 1));

  return (
    <div className={styles.container}>
      <div className={styles.background_image}></div>
      <div className={styles.side_bar}>
        <div className={styles.project_info} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image alt="" src="/cougars4.png" width={200} height={200}/>
        </div>
        <div className={styles.button_group}>
          <NavButtons />
        </div>
      </div>
      <div className={styles.main_content}>
      <h1 className={styles.title}>Help Me Pick My Major OR AI RAICEC test</h1>
        { index != questions.length &&
        <article className={styles.card }> {/* Hide this when index == questions.length */}
          <header className={styles.card_header}>
            {index + 1}. {questions[index].content}
          </header>
          <main className={styles.card_body}>
          <button style={{backgroundColor: 'green', color: 'white', padding: '20px 20px', borderRadius: '3px', opacity: "0.9"}} onClick={handleYes}>Yes</button>
          <button style={{backgroundColor: 'red', color: 'white', padding: '20px 20px', borderRadius: '3px', opacity: "0.9"}} onClick={handleNo}>No</button>
          </main>
          {/* <footer className={styles.card_footer}>
            <div className={styles.card_navigation_buttons}>
              <button onClick={goBack} className={styles.card_button_first}>Back</button>
              <button onClick={goNext}>Next</button>
            </div>
          </footer> */}
        </article>
        }
        {/*
        Holland Code 
        R.A.I.S.E.C
        https://www.careerkey.org/fit/personality/holland-code-assessment-riasec
        */}
        
        {loading && majorRecommendation == "" && <ClipLoader className={styles.centered} color="#ff0000" loading={loading} size={150} />}
        <article> { /* Hide this when index != questions.length */ }
          {majorRecommendation.split("\n").map((line,key) => {
            return (
              <p key={key}> {line} </p>
            )
          })}
        </article>
        
      </div>
    </div>
  );
}
