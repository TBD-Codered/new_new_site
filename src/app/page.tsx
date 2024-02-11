"use client"


import Image from "next/image";
import styles from "./main.module.css"
import { useState } from "react";
import { query_ai } from "@/lib/actions";
import NavButtons from "@/components/navbuttons";

export default function Home() {
  const [chatting, setChatting] = useState(false);
  const [chatMessages, setMessages] = useState([]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/query', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    console.log(data);
  }

 return (
    <div className={styles.container}>
      <div className={styles.background_image}> </div>
      <div className={styles.side_bar}>
        <div className={styles.project_info} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image alt="a" src="/cougars4.png" width={200} height={200}/>

        </div>
        <div className={styles.button_group}>
         <NavButtons/>
        </div>
      </div>
      <div className={styles.main_content}>
        <div className={styles.example_prompts}>
          <button aria-hidden={chatting} className={styles.prompt_button}>
            <label>Popular Question</label>
            <p>Computer Science Degree plan at the University of Houston</p>
          </button>
          <button className={styles.prompt_button}>
            <label>Popular Question</label>
            <p>Tuition rates for in-state undergraduate student?</p>
          </button>
          <button className={styles.prompt_button}>
            <label>Popular Question</label>
            <p>How many social clubs at the University?</p>
          </button>
          <button className={styles.prompt_button}>
            <label>Popular Question</label>
            <p>How do I contact the University Office of Admission?</p>
          </button>
        </div>
        <form onSubmit={onSubmit} className={styles.input_combo}>
          <input name="message" type="text" className={styles.input_text} placeholder="Ask me anything about University of Houston"/>
          <input type="button" className={styles.input_button}  value="Ask"/>
        </form>
      </div>
    </div>
  );

}
