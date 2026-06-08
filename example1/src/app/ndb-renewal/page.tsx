import type { Metadata } from "next";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import ServiceSection from "./components/ServiceSection";
import FeatureSection from "./components/FeatureSection";
import RecruitSection from "./components/RecruitSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "日本デェイブレイク株式会社",
  description:
    "お客様と共に、情報技術で未来を創る。日本デェイブレイク株式会社のコーポレートサイト改善モック（研修用）。",
};

export default function NdbRenewalPage() {
  return (
    <main className={styles.page}>
      <Hero />
      <ServiceSection />
      <FeatureSection />
      <RecruitSection />
      <NewsSection />
      <ContactSection />
    </main>
  );
}
