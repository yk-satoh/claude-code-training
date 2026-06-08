import styles from "../page.module.css";
import { site } from "../_content";

/** フッター。社名と研修用モックである旨を表示する。 */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.footerName}>{site.companyName}</p>
        <p className={styles.footerNameEn}>{site.companyNameEn}</p>
        <p className={styles.footerNotice}>{site.mockNotice}</p>
      </div>
    </footer>
  );
}
