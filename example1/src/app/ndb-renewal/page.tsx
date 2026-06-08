import type { Metadata } from "next";
import styles from "./page.module.css";
import { site } from "./_content";
import { SiteHeader } from "./_components/SiteHeader";
import { Hero } from "./_components/Hero";
import { ServiceSection } from "./_components/ServiceSection";
import { FeatureSection } from "./_components/FeatureSection";
import { RecruitSection } from "./_components/RecruitSection";
import { NewsSection } from "./_components/NewsSection";
import { ContactSection } from "./_components/ContactSection";
import { SiteFooter } from "./_components/SiteFooter";

export const metadata: Metadata = {
  title: `${site.companyName} | コーポレートサイト改善モック`,
  description:
    "公開情報を参考にした研修用のコーポレートサイト改善モックです。",
};

/**
 * /ndb-renewal ページ本体。
 * 各セクションコンポーネントを縦に並べるだけの構成にし、
 * 文言は _content.ts、見た目は page.module.css に分離している。
 */
export default function NdbRenewalPage() {
  return (
    // 全体レイアウト(layout.tsx)は <html lang="en"> のまま全ページ共通で使うため変更しない。
    // 本ページのコンテンツは日本語なので、このサブツリーに lang="ja" を付けて
    // スクリーンリーダーの読み上げ言語を正しくする。
    <div id="top" className={styles.page} lang="ja">
      <SiteHeader />
      <main className={styles.main}>
        <Hero />
        <ServiceSection />
        <FeatureSection />
        <RecruitSection />
        <NewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
