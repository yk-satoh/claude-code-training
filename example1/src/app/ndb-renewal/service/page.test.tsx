import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import ServiceMenuPage from "./page";

describe("/ndb-renewal/service ページ", () => {
  const html = renderToStaticMarkup(<ServiceMenuPage />);

  it("ページが描画できること", () => {
    expect(html.length).toBeGreaterThan(0);
  });

  it("ページタイトルの見出しが表示されること", () => {
    expect(html).toContain("サービスメニュー");
  });

  it("3つのサービス詳細の見出しが表示されること", () => {
    expect(html).toContain("情報システムの開発・導入サービス");
    expect(html).toContain("開発・保守・運用サービス");
    expect(html).toContain("コンサルテーションサービス");
  });

  it("各サービスの業務内容が表示されること", () => {
    expect(html).toContain("要件定義の支援");
    expect(html).toContain("アプリケーションの保守・運用支援");
    expect(html).toContain("プロジェクト管理支援");
  });

  it("トップページへ戻る導線が表示されること", () => {
    expect(html).toContain('href="/ndb-renewal"');
    expect(html).toContain("トップページに戻る");
  });
});
