import styles from "./NewsSection.module.css";

interface NewsItem {
  /** 表示用の日付文字列(例: "2026.04.01") */
  date: string;
  /** <time> の dateTime に渡す機械可読な日付(ISO 8601形式) */
  isoDate: string;
  title: string;
}

// 研修用モックのお知らせ。実際の発表内容や実績を示すものではない。
const NEWS: readonly NewsItem[] = [
  { date: "2026.04.01", isoDate: "2026-04-01", title: "コーポレートサイトをリニューアルしました" },
  { date: "2026.03.03", isoDate: "2026-03-03", title: "会社説明会の開催予定を更新しました" },
  { date: "2026.02.02", isoDate: "2026-02-02", title: "新年度の事業方針について公開しました" },
];

export default function NewsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>News</h2>
      <ul className={styles.list}>
        {NEWS.map((news) => (
          <li key={news.isoDate} className={styles.item}>
            <time dateTime={news.isoDate} className={styles.date}>
              {news.date}
            </time>
            <span className={styles.title}>{news.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
