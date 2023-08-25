import styles from '../componentcss/style.module.css'

const Button = ({text})=>{
    return(
        <button className={styles.button}>{text}</button>
    )
}

export default Button