import styles from "@/styles/Button.module.css";
export default function Button(props: { onClick: any; children: any }) {
  return (
    <>
      <button onClick={() => props.onClick()} className={styles.button}>
        {props.children}
      </button>
    </>
  );
}
