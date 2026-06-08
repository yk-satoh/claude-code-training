import styles from "../page.module.css";

type ServiceCardProps = {
  title: string;
  description: string;
};

/** サービス1件分のカード。ServiceSection から props で受け取って表示する。 */
export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>
    </article>
  );
}
