import Image from "next/image";
import styles from "./main.module.css"
import OpenAI from 'openai';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import NavButtons from "@/components/navbuttons";
import { query_ai } from "@/lib/actions";

const chat_modifiers = [
    ["admissions","Focus on admission criteria, application process, and deadlines."],
    ["programs","List and describe available academic programs, including undergraduate and graduate options."],
    ["financial aid","Explain the financial aid process, types of aid available, and eligibility criteria"],
    ["campus","Describe campus faciliities, student housing, and recreational opportunities."],
    ["student life","Provide information on student organizations, events, and support services."],
  ]

export default function Home() {

 return (
    <div className={styles.container}>
      <div className={styles.background_image}> </div>
      <div className={styles.side_bar}>
        <div className={styles.project_info} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src="/cougars4.png" width={200} height={200}/>

        </div>
        <div className={styles.button_group}>
          <NavButtons/>
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
