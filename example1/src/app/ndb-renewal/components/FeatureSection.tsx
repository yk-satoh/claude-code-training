import styles from "./FeatureSection.module.css";
import InfoGrid, { type InfoGridItem } from "./InfoGrid";

const FEATURES: readonly InfoGridItem[] = [
  {
    title: "ライフサイクル全般を支援",
    description:
      "企画・設計から開発・導入、運用・保守まで、情報システムの一連の工程に対応できる体制を整えています。",
  },
  {
    title: "お客様先でのオンサイト支援",
    description:
      "お客様の現場に常駐し、状況の変化を間近で捉えながら、必要な対応をその場で進められることが強みです。",
  },
  {
    title: "業務ノウハウ・経験の活用",
    description:
      "これまでのプロジェクトで培った業務知識やプロジェクト管理の経験を活かし、円滑な進行をサポートします。",
  },
];

export default function FeatureSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>私たちの特徴</h2>
      <InfoGrid items={FEATURES} variant="underline" />
    </section>
  );
}
