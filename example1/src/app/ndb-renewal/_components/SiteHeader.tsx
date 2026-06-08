import styles from "../page.module.css";
import { navItems, site } from "../_content";

/** ページ上部のヘッダー。サイト名とページ内アンカーのナビを表示する。 */
export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a className={styles.brand} href="#top">
          {site.companyName}
        </a>
        <nav className={styles.nav} aria-label="メインナビゲーション">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
