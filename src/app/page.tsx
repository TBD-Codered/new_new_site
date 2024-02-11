"use client"

import Image from "next/image";
import styles from "./main.module.css"
import { useState } from "react";
import { query_ai } from "@/lib/actions";
import NavButtons from "@/components/navbuttons";
import ChatMessage from "@/components/chat_messages/chatmessages";
import { ClipLoader } from "react-spinners";




export default function Home() {
  const [chatting, setChatting] = useState(false);
  const [chatMessages, setMessages] = useState([]);

  async function onSubmit(message: any) {

    setLoading(true); // Start loading
    setChatting(true);
    const response = await fetch('/api/query', {
      method: 'POST',
      body: message,
    })
 
 
       // Handle response if necessary
       const data = await response.json()
       setMessages([...chatMessages, message, data.choices[0].message.content]);
       console.log(chatMessages);
        setLoading(false); // Stop loading
     }
  
  const handlePromptClick = (prompt: string) => {
    onSubmit(prompt);
  };

 
const [loading, setLoading] = useState(false); // New state variable for loading

 return (
    <div className={styles.container}>
      <div className={styles.background_image}> </div>
      <div className={styles.side_bar}>
        <div className={styles.project_info} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://miniature-computing-machine-9vxj4gxjq3j4q-3000.app.github.dev/">
          <Image alt="a" src="/cougars4.png" width={200} height={200}/>
          </a>

        </div>
        <div className={styles.button_group}>
         <NavButtons/>
        </div>
      </div>
      <div className={styles.main_content}>
      <div className={styles.example_prompts} style={chatting? {display:"none"} : {}}>
          <button aria-hidden={chatting} className={styles.prompt_button} onClick={() => handlePromptClick('Computer Science Degree plan at the University of Houston')}>
            <label>Popular Question</label>
            <p>Computer Science Degree plan at the University of Houston</p>
          </button>
          <button aria-hidden={chatting} className={styles.prompt_button} onClick={() => handlePromptClick('Tuition rates for in-state undergraduate student?')}>
            <label>Popular Question</label>
            <p>Tuition rates for in-state undergraduate student?</p>
          </button>
          <button aria-hidden={chatting} className={styles.prompt_button} onClick={() => handlePromptClick('How many social clubs at the University?')}>
            <label>Popular Question</label>
            <p>How many social clubs at the University?</p>
          </button>
          <button aria-hidden={chatting} className={styles.prompt_button} onClick={() => handlePromptClick('How do I contact the University Office of Admission?')}>
            <label>Popular Question</label>
            <p>How do I contact the University Office of Admission?</p>
          </button>
        </div>
        <ChatMessage messages={chatMessages}/>
        
        <div>
  {loading && <ClipLoader color="#ff0000" loading={loading} size={150} />}
</div>
        <form onSubmit={(event) => { event.preventDefault(); onSubmit(event.currentTarget.elements.message.value); }} className={styles.input_combo}>
          <input name="message" type="text" className={styles.input_text} placeholder="Ask me anything about University of Houston"/>
          <button className={styles.input_button} >Ask</button>
        </form>
      </div>
    </div>
  );

}
