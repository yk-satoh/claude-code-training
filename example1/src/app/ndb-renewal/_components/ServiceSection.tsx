import styles from "../page.module.css";
import { services } from "../_content";
import { ServiceCard } from "./ServiceCard";

/** サービス紹介セクション。3つのサービスをカードで横並びに表示する。 */
export function ServiceSection() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <div className={styles.sectionInner}>
        <h2 id="services-heading" className={styles.sectionTitle}>
          サービス
        </h2>
        <div className={styles.cardGrid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
