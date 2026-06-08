/**
 * /ndb-renewal ページで使用する文言を一元管理するファイル。
 *
 * 方針:
 * - 公開情報(ndbnet.co.jp のトップページ)から読み取れる文言は、各定義のインラインコメントで
 *   「公開情報」由来であることを明記する。
 * - 研修用に補った見出しや News などのサンプルは、文言そのものとUI表示(「研修用サンプル」表記など)で
 *   明示し、架空の実績・数字・取引先・制度を作らない。
 * - これにより「どれが公式由来の文言か」をレビューで追跡できるようにする。
 */

/** サイト全体の基本情報 */
export const site = {
  // タスク記載の表記を踏襲する(日本語正式名称を勝手に断定しない)
  companyName: "日本デェイブレイク株式会社",
  // フッターの英語表記は現行サイトの公開情報
  companyNameEn: "Nippon Day Break.co.,ltd",
  // 本ページが研修用モックである旨の注意書き
  mockNotice: "本ページは研修用に作成したコーポレートサイト改善モックです。",
} as const;

/** ナビゲーション項目(ページ内アンカー) */
export const navItems = [
  { label: "サービス", href: "#services" },
  { label: "会社の特徴", href: "#features" },
  { label: "採用", href: "#recruit" },
  { label: "News", href: "#news" },
  { label: "お問い合わせ", href: "#contact" },
] as const;

/** ヒーローセクション(キャッチコピーは公開情報) */
export const hero = {
  catchCopy: "お客様と共に、情報技術で未来を創る。",
  subCopy: "We are the company that supports the future.",
  // CTA の遷移先は実在しない URL を避け、ページ内アンカーにする
  primaryCta: { label: "お問い合わせ", href: "#contact" },
  secondaryCta: { label: "採用情報を見る", href: "#recruit" },
} as const;

/** サービス紹介(名称・説明は公開情報を意味を変えない範囲で整形) */
export const services = [
  {
    id: "development",
    title: "開発・導入サービス",
    description:
      "情報システムの要件定義支援から、設計・製造・テスト、移行・導入までを一貫して支援します。",
  },
  {
    id: "onsite",
    title: "オンサイトサービス",
    description:
      "情報システムの企画・開発・導入・移行に関わる業務を、お客様のロケーションで支援します。",
  },
  {
    id: "consultation",
    title: "コンサルテーションサービス",
    description:
      "システム開発・運用で培った業務ノウハウやプロジェクト管理経験をもとに、情報システムの基本構想立案や推進計画の策定を支援します。",
  },
] as const;

/** 会社の特徴(現行サイトの「ライフサイクル全般を一貫してサポート」を起点に3点へ整理) */
export const features = [
  {
    id: "lifecycle",
    title: "ライフサイクル全般を支援",
    description:
      "要件定義から設計・開発・テスト、導入・運用まで、情報システムのライフサイクル全般を一貫して支援します。",
  },
  {
    id: "onsite-support",
    title: "お客様先での支援",
    description:
      "お客様のロケーションで業務に寄り添い、現場の状況に合わせた支援を行います。",
  },
  {
    id: "know-how",
    title: "業務ノウハウとプロジェクト管理",
    description:
      "システム開発・運用で培った業務ノウハウとプロジェクト管理の経験を活かして支援します。",
  },
] as const;

/** 採用向けメッセージ(ジュニアエンジニアにも伝わる言葉。架空の制度・数字は載せない) */
export const recruit = {
  heading: "これからエンジニアを目指す方へ",
  lead: "私たちは、お客様と一緒に情報システムをつくり、育てていく会社です。",
  body: "システムは「つくって終わり」ではありません。要件を整理し、設計し、つくり、テストし、現場に届け、運用していく。その一連の流れを、先輩と一緒に経験しながら学べる環境を目指しています。専門用語が分からない段階からでも、一歩ずつ理解を積み上げていけます。",
  cta: { label: "採用についてお問い合わせ", href: "#contact" },
} as const;

/**
 * News(研修用サンプル)。
 * 現行サイトには実在のお知らせがあるが、架空の実績・日付を作らないため、
 * ここではサンプルである旨を明示したダミーを置く。実装後に内容を差し替える前提。
 */
export const news = {
  notice: "以下は研修用のサンプル表示です。実際のお知らせ内容ではありません。",
  items: [
    { id: "n1", label: "サンプル", text: "コーポレートサイトの改善モックを公開しました。" },
    { id: "n2", label: "サンプル", text: "サービス紹介ページの構成を見直しました。" },
    { id: "n3", label: "サンプル", text: "採用情報の掲載内容を更新しました。" },
  ],
} as const;

/** お問い合わせ導線(実在しない問い合わせ先を作らない) */
export const contact = {
  heading: "お問い合わせ",
  lead: "サービスや採用に関するご相談を承ります。",
  note: "※本ページは研修用モックのため、送信機能は実装していません。",
  cta: { label: "お問い合わせフォームへ", href: "#contact" },
} as const;
