import styles from "../page.module.css";
import { features } from "../_content";

/** 会社の特徴セクション。3つの特徴を一覧で表示する。 */
export function FeatureSection() {
  return (
    <section id="features" className={styles.sectionAlt} aria-labelledby="features-heading">
      <div className={styles.sectionInner}>
        <h2 id="features-heading" className={styles.sectionTitle}>
          会社の特徴
        </h2>
        <ul className={styles.featureList}>
          {features.map((feature) => (
            <li key={feature.id} className={styles.featureItem}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
