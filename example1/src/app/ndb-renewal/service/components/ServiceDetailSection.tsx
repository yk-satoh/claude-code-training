import styles from "./ServiceDetailSection.module.css";

export interface ServiceDetail {
  title: string;
  description: string;
  items: readonly string[];
}

interface ServiceDetailSectionProps {
  detail: ServiceDetail;
}

export default function ServiceDetailSection({ detail }: ServiceDetailSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{detail.title}</h2>
      <p className={styles.description}>{detail.description}</p>
      <ul className={styles.list}>
        {detail.items.map((item) => (
          <li key={item} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
