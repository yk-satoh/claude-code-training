import styles from "../page.module.css";
import { contact } from "../_content";

/** お問い合わせ導線セクション。研修用モックのため送信機能は持たない。 */
export function ContactSection() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.sectionInner}>
        <h2 id="contact-heading" className={styles.sectionTitle}>
          {contact.heading}
        </h2>
        <p className={styles.contactLead}>{contact.lead}</p>
        <a className={styles.buttonPrimary} href={contact.cta.href}>
          {contact.cta.label}
        </a>
        <p className={styles.contactNote}>{contact.note}</p>
      </div>
    </section>
  );
}
