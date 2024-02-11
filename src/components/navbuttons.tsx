import Link from 'next/link'
import styles from "./nav.module.css";

export default function NavButtons(){
    return (
        <>
        <Link href="/" className={styles.button}> AI Advisor Bot </Link>
        <Link href="/disability" className={styles.button}> AI Disability Bot </Link>
        <Link href="/major" className={styles.button}> Help Me Pick The Major (RAISEC)</Link>
        <Link href="/acceptance" className={styles.button}> AI Acceptance Bot</Link>
        <Link href="/checklist" className={styles.button}> New Student Cheklist</Link>
        </>
    )
}