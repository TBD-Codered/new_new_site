"use client"
import Image from "next/image";
import styles from "./main.module.css";
import NavButtons from "@/components/navbuttons";
import { useState } from "react";
import Modal from 'react-modal';



export default function Home() {
  const [showModal,setModal] = useState(false);

  function show_disability_modal(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div className={styles.container}>
      <Modal
  isOpen={showModal}
  onRequestClose={closeModal}
  contentLabel="Mobility Disability Information"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: 1000,'position': 'fixed',
      'top': 0,
      'left': 384,
      'right': 100,
      'bottom': 100,
      'display': 'flex',
      'align-items': 'center',
      'width': '75%',
      'height': '100%',
    },
    content: {
      color: 'black',
      
    },
  }}
>
<button onClick={closeModal} style={{
    position: 'absolute', 
    top: '10px', // 
    right: '50px',
    background: 'none', 
    fontSize: '2.5em',
    color: 'red',
  }}>X</button>
  <header>
  <h1 style={{fontSize: '1.4em', color: 'black'}}>
  <center>Accessibility Resources & Navigation Guide</center>
</h1>
    </header>
    <main>
        <section id="general-resources">
            <h2><b>General Resources</b></h2>
            <p>For students requiring assistance, we offer a range of services and resources tailored to accommodate various needs:</p>
            <ul>
                <li style={{fontSize: '18px', color: 'blue'}}><a href="https://uh.edu/accessibility/accommodations/" target="_blank">Academic Accommodations</a></li>
                <li style={{fontSize: '18px', color: 'blue'}}><a href="https://uh.edu/accessibility/resources/campus-health-care/" target="_blank">On-Campus Healthcare</a></li>
            </ul>
            <div>.</div>
            <h2><b>Health and Support Services</b></h2>
            <ul>
                <li>Student Health Center: (713) 743-5151</li>
                <li>Counseling and Psychological Services: (713) 743-5454</li>
                <li>Speech, Language, and Hearing Clinic: (713) 743-0915 or (713) 743-2898</li>
                <li>University Eye Institute: (713) 743-2020</li>
                <li style={{fontSize: '18px', color: 'blue'}}><a href="https://uh.edu/accessibility/resources/off-campus-health-care/">Off-Campus Healthcare</a></li>
            </ul>
        </section>
        <section id="navigation-parking">
        <div>.</div>
            <h2><b>Campus Navigation and Parking</b></h2>
            <p>Find wheelchair-accessible locations, disability parking, ramps, and more through our detailed campus maps.</p>
            <h3>Disability Parking and Access</h3>
            <ul>
            <li style={{fontSize: '18px', color: 'blue'}}><a href="https://uh.edu/parking/_images/maps/visitor-parking-map_19-20.png" target="_blank">General Parking Information</a></li>
            <li style={{fontSize: '18px', color: 'blue'}}><a href="https://uh.edu/parking/accessible-parking/dvparking.php" target="_blank">Accessible Parking Details</a></li>
            </ul>
            <div>.</div>
            <h2><b>Specific Route Information</b></h2>
            <ul>
            <li style={{fontSize: '17px', color: 'blue'}}><a href="https://www.uh.edu/maps/#/find/SPG" target="_blank">Disability Parking Space Near Stadium (Stadium Parking Garage) 597</a></li>
            <li style={{fontSize: '17px', color: 'blue'}}><a href="https://www.uh.edu/maps/#/find/CRWC" target="_blank">Campus Recreation and Wellness Center 522</a></li>
                <li style={{fontSize: '17px', color: 'blue'}}><a href="https://www.uh.edu/maps/#/find/BKD" target="_blank">Burdette Keeland Jr. Design & Exploration Center</a></li>
                <li style={{fontSize: '17px', color: 'blue'}}><a href="https://www.uh.edu/maps/#/find/LOT19C" target="_blank">Student Parking near Law Building</a></li>
            </ul>
        </section>
    </main>
</Modal>
  
      <div className={styles.background_image}> </div>
      <div className={styles.side_bar}>
        <div className={styles.project_info} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://miniature-computing-machine-9vxj4gxjq3j4q-3000.app.github.dev/ ">
          <Image alt="a" src="/cougars4.png" width={200} height={200}/>
          </a>
        </div>
        <div className={styles.button_group}>
         <NavButtons/>
        </div>
      </div>
      <div className={styles.main_content}>
      <div className={styles.example_prompts}>
        <form onSubmit={show_disability_modal} className="popup-content">
          <button className={styles.prompt_button}>
            <label><b>Blindness disability</b></label>
            <p>Speech to Speech University Information/Handicap Parking</p>
          </button>
          <button className={styles.prompt_button}>
            <label><b>Mobility Disability</b></label>
            <p>University Information/Handicap Parking/University resources</p>
          </button>
        </form>
      </div>
        
      </div>
    </div>
  );

}
