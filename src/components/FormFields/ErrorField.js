import styles from './Fields.module.css'

const ErrorField = (props) => {
    return <div className={styles.error}>{props.children}</div>
}

export default ErrorField;

