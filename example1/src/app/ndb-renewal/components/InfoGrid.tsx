import styles from "./InfoGrid.module.css";

export interface InfoGridItem {
  title: string;
  description: string;
}

interface InfoGridProps {
  items: readonly InfoGridItem[];
  variant: "card" | "underline";
}

export default function InfoGrid({ items, variant }: InfoGridProps) {
  return (
    <ul className={`${styles.list} ${styles[variant]}`}>
      {items.map((item) => (
        <li key={item.title} className={styles.item}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.itemDescription}>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
