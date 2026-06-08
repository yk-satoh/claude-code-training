import styles from "./RecruitSection.module.css";

export default function RecruitSection() {
  return (
    <section id="recruit" className={styles.section}>
      <h2 className={styles.heading}>採用情報</h2>
      <p className={styles.lead}>
        これからエンジニアとしての一歩を踏み出す方も、安心して挑戦できる環境を目指しています。
      </p>
      <p className={styles.body}>
        私たちは、技術力だけでなく「お客様と向き合う姿勢」を大切にしています。先輩社員と一緒に実際のプロジェクトに関わりながら、
        わからないことは相談しつつ、少しずつ経験を積んでいくことができます。情報システムに関わる仕事を通じて、
        お客様の課題解決に貢献したいという方をお待ちしています。
      </p>
      <a className={styles.cta} href="#contact">
        お問い合わせはこちら
      </a>
    </section>
  );
}
