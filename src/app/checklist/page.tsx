import Image from "next/image";
import NavButtons from "@/components/navbuttons";
import styles from "./checklist.module.css";

export default function Checklist(){
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
        
        Check list
        
      </div>
    </div>
    )
}