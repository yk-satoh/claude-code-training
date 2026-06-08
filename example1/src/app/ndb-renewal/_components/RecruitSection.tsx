import styles from "../page.module.css";
import { recruit } from "../_content";

/** 採用向けセクション。ジュニアエンジニアにも伝わる言葉で会社を紹介する。 */
export function RecruitSection() {
  return (
    <section id="recruit" className={styles.section} aria-labelledby="recruit-heading">
      <div className={styles.sectionInner}>
        <h2 id="recruit-heading" className={styles.sectionTitle}>
          {recruit.heading}
        </h2>
        <p className={styles.recruitLead}>{recruit.lead}</p>
        <p className={styles.recruitBody}>{recruit.body}</p>
        <a className={styles.buttonPrimary} href={recruit.cta.href}>
          {recruit.cta.label}
        </a>
      </div>
    </section>
  );
}
