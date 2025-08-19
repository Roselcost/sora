import styles from "@/styles/Button.module.scss";
export default function Button(props: {
  type?: "normal";
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <button
        style={props.type === "normal" ? { fontSize: "14px" } : {}}
        onClick={() => props.onClick()}
        className={styles.button}
      >
        {props.children}
      </button>
    </>
  );
}
