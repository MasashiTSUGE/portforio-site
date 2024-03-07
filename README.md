# portforio-site

ポートフォリオ用 web サイトのソースコードです

## ポートフォリオサイトの仕様

利用ソース

- bootstrap
- react
- rect-icons

## 階層構造

- top ページ
  - profile ページ
  - studies/works ページ
    - 制作物のカード形サムネイル
      - 制作要綱
      - 実物へのリンク
      - github リンク

## 制作要綱

- bootstrap を利用しレスポンシブ対応
- React を利用する
- 情報をコンポーネント化し、後から追記可能なようにしていきたい

## 共通コンテンツ

- ナビゲーションバー
  (SP はボタン押下で表示、PC は画面上部に表示)
  - 下部に contact、github リンク
- top へ戻るボタン
- ローディング画面

## top ページコンテンツ

- 各ページへのリンク(Nab バー)
- コンタクト(メール、github リンク)

## profile ページコンテンツ

- 自己紹介文
- 習得技術紹介

## studies/works ページ

- 追記可能な形で制作物を時系列順に掲載していく(recent-old)
- card 型サムネイルによる制作物紹介
- サムネイルをクリックするとモーダルで制作要綱を表示
  - 横長サムネイルを縦に並べる
  - PC はマウスオーバーで画面右部に詳細情報を表示

## ページ構造

JS ファイル

- index.js
  - app.js
    - header.js(ヘッダー部分):bootstrap の navbar を利用して作成、Modal コンポーネントを利用
    - main.js(メインコンテンツ):hero/about/works の 3 セクション
      - hero.js(トップ画像とページ紹介)
      - about.js(自己紹介と習得技術)
        - SkillList.js(習得技術のリストを配列化してページに生成)
      - works.js(制作物)
        - WorkSlide.js(json ファイルからカードサムネイルを生成して並べました)
        - Worksthumb.js(WorkSlide のマウスオーバーされた部分を画面右側にサムネイル表示します)
          - Modal.js(制作物をモーダルウィンドウで詳しく表示します)
    - footer.js(フッター部分です)

そのほかファイル
worksdata.json(制作物のデータを json ファイル形式にまとめ、編集を易化しています)
custom.css(bootstrap から変更した部分です)
