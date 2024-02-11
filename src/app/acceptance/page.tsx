import Image from "next/image";
import styles from "./main.module.css"
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import NavButtons from "@/components/navbuttons";
import { query_ai } from "@/lib/actions";


export default function Home() {
 return (
    <div className={styles.container}>
      <div className={styles.background_image}> </div>
      <div className={styles.side_bar}>
        <div className={styles.project_info} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image alt="" src="/cougars4.png" width={200} height={200}/>

        </div>
        <div className={styles.button_group}>
          <NavButtons/>
        </div>
      </div>
      <div className={styles.main_content}>
       
        
      </div>
    </div>
  );

}
