import styles from "./chat.module.css";

export default function ChatMessage({ messages }) {
    return (
        <>
            
            <ul className={styles.container}>
                {messages.map((message, index) => {
                    const messageClass = index % 2 === 0 ? styles.user : styles.bot;
                    const role = index % 2 === 0 ? "You" : "Cougar Helper";
                    
                    return (
                        <li key={index} className={messageClass}>
                            <h5>{role}</h5>
                            <p className={styles.message_bubble}>{message}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
