import styles from '../styles/header.module.css'
import Link from 'next/link'

export function Header () {
    return (
        <>
            <header>
                <ul className={styles.navbar}>
                    <Link className={styles.navitem} href='./'>Home</Link>
                    <Link className={styles.navitem} href='./todos'>ToDos</Link>
                    <Link className={styles.navitem} href='./about'>About</Link>
                </ul>
            </header>
        </>
    )
}