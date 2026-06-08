import styles from "./ServiceSection.module.css";
import InfoGrid, { type InfoGridItem } from "./InfoGrid";

const SERVICES: readonly InfoGridItem[] = [
  {
    title: "開発・導入サービス",
    description:
      "お客様の業務やご要望をお伺いしながら、システムの企画・設計から開発・導入までを一貫してご支援します。",
  },
  {
    title: "オンサイトサービス",
    description:
      "お客様先に常駐し、現場の状況に寄り添いながら開発や運用をサポート。距離の近さを活かした対応を心がけています。",
  },
  {
    title: "コンサルテーションサービス",
    description:
      "業務上の課題整理から改善のご提案まで、技術的な知見を活かしてお客様の意思決定を後押しします。",
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className={styles.section}>
      <h2 className={styles.heading}>サービス紹介</h2>
      <p className={styles.description}>
        お客様の課題やフェーズに合わせて、3つのサービスを組み合わせてご提供しています。
      </p>
      <InfoGrid items={SERVICES} variant="card" />
    </section>
  );
}
