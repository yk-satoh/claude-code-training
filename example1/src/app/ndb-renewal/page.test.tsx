import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import NdbRenewalPage from "./page";
import { hero, services, recruit, contact } from "./_content";

/**
 * /ndb-renewal ページの画面仕様を固定するテスト。
 *
 * 追加依存を避けるため、@testing-library ではなく react-dom/server の
 * renderToStaticMarkup でページを HTML 文字列へ描画し、内容を検証する。
 * (今回のページは全て同期的な Server Component なので同期レンダリングできる)
 */
describe("/ndb-renewal ページ", () => {
  const html = renderToStaticMarkup(<NdbRenewalPage />);

  it("ページコンポーネントが描画できること", () => {
    expect(html).toBeTruthy();
    expect(html.length).toBeGreaterThan(0);
  });

  it("ヒーローの見出し(キャッチコピー)が h1 として表示されること", () => {
    // 見出しタグ(h1)の中にキャッチコピーが入っていることを確認する
    expect(html).toMatch(new RegExp(`<h1[^>]*>${hero.catchCopy}</h1>`));
  });

  it("サービス3件が表示されること", () => {
    // 文言定数側が3件であることを保証したうえで、各サービス名が描画されていることを確認
    expect(services).toHaveLength(3);
    for (const service of services) {
      expect(html).toContain(service.title);
    }
  });

  it("採用向けセクションが表示されること", () => {
    expect(html).toContain('id="recruit"');
    expect(html).toContain(recruit.heading);
  });

  it("お問い合わせ導線が表示されること", () => {
    expect(html).toContain('id="contact"');
    expect(html).toContain(contact.cta.label);
  });
});
