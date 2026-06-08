import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>お問い合わせ</h2>
      <p className={styles.body}>
        サービスに関するご相談、採用に関するお問い合わせなど、お気軽にご連絡ください。
        担当者より折り返しご案内いたします。
      </p>
      <p className={styles.note}>※ 本ページは研修用モックのため、お問い合わせ機能は実装していません。</p>
    </section>
  );
}
