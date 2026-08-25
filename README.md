# WAN TO TOKYO

愛犬と行ける東京のおでかけスポットを探せるサイト（MVP・フロントエンド試作）。

## 開発の始め方

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## 現在の状態

このMVPは **ダミーデータ**（`lib/data.ts`）で動いています。
Supabaseへの実データ接続は次のフェーズで行います。

## 主なページ

- `/` トップページ
- `/search` 検索結果一覧（絞り込み対応）
- `/facilities/[slug]` 施設詳細
- `/favorites` お気に入り（ブラウザ保存）
