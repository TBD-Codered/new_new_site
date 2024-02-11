import styles from "./chat.module.css";

export default function ChatMessage({messages}){
    return (
        <div>
            {messages.length}
            <ul className={styles.container}>
                {messages.map((message,index)=> { 
                    return (<li className={(index%2==0)? styles.user : styles.bot}key={index}>
                        <h5>{(index%2==0)? "You" : "Cougar Helper"}</h5>
                        <p className={styles.message_bubble}>{message}</p>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}