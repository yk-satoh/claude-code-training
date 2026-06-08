import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>日本デェイブレイク株式会社</p>
      <h1 className={styles.heading}>お客様と共に、情報技術で未来を創る。</h1>
      <p className={styles.lead}>
        企画・設計から開発・導入、運用・保守まで。情報システムのライフサイクル全体に寄り添い、
        お客様のビジネスを技術の面から支えます。
      </p>
      <div className={styles.ctas}>
        <a className={styles.primary} href="#services">
          サービスを見る
        </a>
        <a className={styles.secondary} href="#recruit">
          採用情報
        </a>
      </div>
    </section>
  );
}
