import styles from "../page.module.css";
import { hero } from "../_content";

/** ヒーローセクション。キャッチコピー・サブコピー・CTA を表示する。 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroInner}>
        <p className={styles.heroSub}>{hero.subCopy}</p>
        <h1 id="hero-heading" className={styles.heroTitle}>
          {hero.catchCopy}
        </h1>
        <div className={styles.heroCtas}>
          <a className={styles.buttonPrimary} href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a className={styles.buttonSecondary} href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
