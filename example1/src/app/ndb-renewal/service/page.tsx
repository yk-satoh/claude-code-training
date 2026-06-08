import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import ServiceIntro from "./components/ServiceIntro";
import ServiceDetailSection, { type ServiceDetail } from "./components/ServiceDetailSection";

export const metadata: Metadata = {
  title: "サービスメニュー | 日本デェイブレイク株式会社",
  description:
    "日本デェイブレイク株式会社のサービスメニュー（研修用モック）。開発・導入、オンサイト、コンサルテーションの3つのサービスをご紹介します。",
};

const SERVICE_DETAILS: readonly ServiceDetail[] = [
  {
    title: "情報システムの開発・導入サービス",
    description:
      "要件定義から設計・製造・テスト、移行・導入まで、システム構築の各工程を幅広く支援します。製造業や金融業など、高い可用性が求められる現場での実績を活かして取り組みます。",
    items: ["要件定義の支援", "設計・製造・テスト", "移行・導入の支援"],
  },
  {
    title: "開発・保守・運用サービス(オンサイト)",
    description:
      "お客様先に常駐し、企画・開発・導入・移行を現場で支援するとともに、稼働後のアプリケーション保守・運用やITインフラの運用管理にも対応します。",
    items: [
      "企画・開発・導入・移行の現地支援",
      "アプリケーションの保守・運用支援",
      "ITインフラの運用管理",
    ],
  },
  {
    title: "コンサルテーションサービス",
    description:
      "システム開発における基本構想の立案や推進計画の作成、プロジェクト管理の支援、提案書の作成や検査対応まで、技術的な知見を活かしてお客様の取り組みを後押しします。",
    items: [
      "システム開発支援(基本構想の立案・推進計画の作成)",
      "プロジェクト管理支援(EVMの活用)",
      "提案書作成・検査対応の支援",
    ],
  },
];

export default function ServiceMenuPage() {
  return (
    <main className={styles.page}>
      <p className={styles.backLink}>
        <Link href="/ndb-renewal">← トップページに戻る</Link>
      </p>
      <ServiceIntro />
      {SERVICE_DETAILS.map((detail) => (
        <ServiceDetailSection key={detail.title} detail={detail} />
      ))}
    </main>
  );
}
