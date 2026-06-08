import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import NdbRenewalPage from "./page";

describe("/ndb-renewal ページ", () => {
  const html = renderToStaticMarkup(<NdbRenewalPage />);

  it("ページが描画できること", () => {
    expect(html.length).toBeGreaterThan(0);
  });

  it("ヒーローの見出しが表示されること", () => {
    expect(html).toContain("お客様と共に、情報技術で未来を創る。");
  });

  it("サービス紹介が3件表示されること", () => {
    expect(html).toContain("開発・導入サービス");
    expect(html).toContain("オンサイトサービス");
    expect(html).toContain("コンサルテーションサービス");
  });

  it("採用向けセクションが表示されること", () => {
    expect(html).toContain("採用情報");
    expect(html).toContain("これからエンジニアとしての一歩を踏み出す方も");
  });

  it("お問い合わせ導線が表示されること", () => {
    expect(html).toContain("お問い合わせ");
    expect(html).toContain("サービスに関するご相談、採用に関するお問い合わせなど");
  });

  it("CTAのアンカーリンクが対応するセクションのidを指していること", () => {
    expect(html).toContain('href="#services"');
    expect(html).toContain('id="services"');
    expect(html).toContain('href="#recruit"');
    expect(html).toContain('id="recruit"');
    expect(html).toContain('href="#contact"');
    expect(html).toContain('id="contact"');
  });

  it("Newsが3件すべて表示されること", () => {
    expect(html).toContain("コーポレートサイトをリニューアルしました");
    expect(html).toContain("会社説明会の開催予定を更新しました");
    expect(html).toContain("新年度の事業方針について公開しました");
  });
});
