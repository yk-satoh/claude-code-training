import styles from "../page.module.css";
import { news } from "../_content";

/** News セクション。研修用サンプルである旨を明示して一覧を表示する。 */
export function NewsSection() {
  return (
    <section id="news" className={styles.sectionAlt} aria-labelledby="news-heading">
      <div className={styles.sectionInner}>
        <h2 id="news-heading" className={styles.sectionTitle}>
          News
        </h2>
        <p className={styles.newsNotice}>{news.notice}</p>
        <ul className={styles.newsList}>
          {news.items.map((item) => (
            <li key={item.id} className={styles.newsItem}>
              <span className={styles.newsBadge}>{item.label}</span>
              <span className={styles.newsText}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
