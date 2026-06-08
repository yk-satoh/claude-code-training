import styles from "./ServiceIntro.module.css";

export default function ServiceIntro() {
  return (
    <section className={styles.intro}>
      <p className={styles.eyebrow}>SERVICE MENU</p>
      <h1 className={styles.heading}>サービスメニュー</h1>
      <p className={styles.lead}>
        情報システムのライフサイクル全体を支えるために、開発・導入からオンサイトでの支援、
        コンサルテーションまで、お客様の状況に合わせたサービスをご用意しています。
      </p>
    </section>
  );
}
