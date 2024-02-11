import Image from "next/image";
import styles from "./main.module.css"
import OpenAI from 'openai';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const chat_modifiers = [
    ["admissions","Focus on admission criteria, application process, and deadlines."],
    ["programs","List and describe available academic programs, including undergraduate and graduate options."],
    ["financial aid","Explain the financial aid process, types of aid available, and eligibility criteria"],
    ["campus","Describe campus faciliities, student housing, and recreational opportunities."],
    ["student life","Provide information on student organizations, events, and support services."],
  ]

export default function Home() {
  const is_pending = async (query) => {
    'use server'
    const { pending } = useFormStatus();

    return pending;
  }
  const query_ai = async (query) => {
    "use server"

    const user_message = query.get('message');
     
    const messages = [
      {role: "system", content: "You are a knowledgeable assistant about the University of Houston, providing information on admissions, programs, campus life, and more. Your responses should be consise, accurate, and helpful. Only provice information about the University of Houston and nothing else. If you're able to. Provide a link to relevant infomration on the offical univesity of houston's website." },
      {role: "user", content: user_message }
    ]
    
    for ( let modifier in chat_modifiers) { 
      if (!user_message.toLowerCase().includes(chat_modifiers[modifier][0])) { continue; }
      messages.splice(1,0,{role: "system", content: chat_modifiers[modifier][1]});
    }
    const openai = new OpenAI();
    const chatCompletion = await openai.chat.completions.create({
      messages: messages, 
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion.choices[0].message.content);
    return chatCompletion;
  }

 return (
    <div className={styles.container}>
      <div className={styles.background_image}> </div>
      <div className={styles.side_bar}>
        <div className={styles.project_info} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src="/cougars4.png" width={200} height={200}/>

        </div>
        <div className={styles.button_group}>
          <button className={styles.button}> AI Advisor Bot </button>
          <button className={styles.button}> AI Disability Bot </button>
          <button className={styles.button}> Help Me Pick The Major </button>
          <button className={styles.button}> AI Acceptance Bot</button>
        </div>
      </div>
      <div className={styles.main_content}>
        <div className={styles.example_prompts}>
          <button className={styles.prompt_button}>
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
        <form action={query_ai} className={styles.input_combo}>
          <input name="message" type="text" className={styles.input_text} placeholder="Ask me anything about University of Houston"/>
          <input type="button" className={styles.input_button}  value="Ask"/>
        </form>
      </div>
    </div>
  );

}
