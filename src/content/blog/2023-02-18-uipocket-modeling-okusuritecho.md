---
title: モデリング練習 - お薬手帳
description: PIPocket 掲載アプリのモデリング - お薬手帳
author: IMAMURA Shohei
publishDate: 2023-02-19
coverSVG: ../images/svg/undraw/undraw_process.svg
socialImage: ../images/undraw/undraw_process.png
categories:
  - Modeling
tags:
  - uipocket
  - rdra
  - plantuml
  - diagram
---

# モデリング練習

---
## 概要

#### 対象
**お薬手帳**

ポイントが貯まる！ワクチン接種記録や血圧手帳など機能多数

#### 参考URL
https://ui-pocket.com/apps/okusuritecho/


---

## モデリング

### 用語集／用語関連図（ドメインモデル図）

```plantuml
@startuml

' === ドキュメント設定 ===
right footer s.imamura
' mainframe mainframe
title 用語集／用語関連図
left to right direction
scale max 2048 width

' === スタイル ===
skinparam {
    ' === 共通設定 ===
    shadowing false
    ' linetype ortho
    backgroundColor whitesmoke
    arrow {
        color DarkBlue
        thickness 0.5
        fontSize 10
    }
    title {
        FontSize 14
        ' FontColor blue
        BorderThickness 10
        BorderColor transparent
    }

    ' === 要素別設定 ===
    rectangle {
        BackgroundColor business
        BorderColor #000
        RoundCorner 25
        BorderThickness 0.6
        fontColor black
        fontSize 14
    }
    actor {
        fontColor black
        fontSize 12
    }
    card {
        BorderColor #999999
        BorderThickness 0.6
        roundCorner 10
        fontColor black
        fontSize 12
    }
    collections {
        BorderColor #aaaaaa
        BorderThickness 0.5
        fontColor black
        fontSize 12
    }
    component {
        BackgroundColor white
        BorderThickness 0.5
        BorderColor #666666
        fontColor black
        fontSize 11
    }
    rectangle {
        BackgroundColor white
        BorderThickness 0.5
        BorderColor #666666
        fontColor black
        fontSize 11
    }
}

rectangle デバイス設定関連 {
  card デバイス設定 [
    デバイス設定
    --
    通知許可設定
    写真・動画アクセス設定
  ]
}

rectangle アカウント関連 {
  card EPARKアカウント [
    EPARKアカウント
    --
    ID
    メールアドレス
    --
    パスワード
    姓
    名
    せい
    めい
    生年月日
    性別
    電話番号
    携帯電話番号
    郵便番号
    住所
    メールマガジン受信設定
  ]

  card 会員情報 [
    会員情報
    --
    呼び出し名
    ニックネーム
    プロフィール画像
    血液型
    身長
    体重
    既往歴
    妊娠・授乳
  ]

  card アレルギーや副作用 [
    アレルギーや副作用
    --
    アレルギー
    副作用
    お薬名や食品名など
    状態やメモ
    服用日
    画像
  ]
  card 保険証受給証 [
    保険証受給証
    --
    記号
    番号
    保険者・受給証番号など
  ]
  card 自動連係中の医療機関
  card 家族情報
  card 招待コード

  ' 内部関連
  EPARKアカウント -- 会員情報
  会員情報 -- アレルギーや副作用
  会員情報 -- 保険証受給証

  自動連係中の医療機関 -- EPARKアカウント
  会員情報 -- 家族情報
  家族情報 -- 招待コード

  ' 外部関連
  デバイス設定 --- EPARKアカウント
}

rectangle EPARKポイント関連 {
  card ポイントアクション [
    ポイントアクション
    --
    タイトル
    獲得ポイント数
    獲得条件
    獲得上限回数
    ポイント付与制約
  ]
  collections ポイントアクション一覧 [
    今月のポイントアクション
  ]
  card 達成済みアクション

  card 現在の所有ポイント [
    現在の所有ポイント
    所持ポイント
  ]

  ' コレクション
  ポイントアクション一覧 - ポイントアクション
  ' 内部関連
  ポイントアクション -- 達成済みアクション

  ' 外部関連
  現在の所有ポイント -- EPARKアカウント
  達成済みアクション --- EPARKアカウント
}

rectangle 病院関連 {
  collections 病院一覧 [
    病院一覧
    --
    お気に入りの病院一覧
    フリーワード検索結果
    地図検索結果
    絞り込み条件による検索結果
  ]
  card 病院一覧件数
  card 病院 [
    病院
    --
    名前
    住所
    電話番号
    オンライン診療予約可能
    ネット予約可能
    営業時間
  ]
  card 診療科目
  card お気に入りの病院

  ' コレクション
  病院一覧 - 病院

  ' 内部関連
  診療科目 -- 病院
  病院一覧 -- 病院一覧件数
  病院 -- お気に入りの病院

  ' 外部関連
  お気に入りの病院 --- EPARKアカウント
}

rectangle 薬局関連 {
  collections 薬局一覧 [
    薬局一覧
    --
    かかりつけの薬局一覧
    フリーワード検索結果
    地図検索結果
    絞り込み条件による検索結果
  ]
  card 薬局一覧件数
  card 薬局 [
    薬局
    --
    薬局名
    画像
    店舗情報QRコード
    営業時間
    臨時営業時間
    調剤窓口営業時間
    予約受付時間
    住所
    電話番号
    FAX番号
    駐車場有無
    URL
  ]
  card 提供しているサービス
  card 使用可能なカードの種類
  card かかりつけの薬局

  ' コレクション
  薬局一覧 - 薬局
  ' 内部関連
  薬局一覧 -- 薬局一覧件数
  薬局 -- 提供しているサービス
  薬局 -- 使用可能なカードの種類
  薬局 -- かかりつけの薬局
  ' 外部関連
  かかりつけの薬局 --- EPARKアカウント

}

rectangle ヘルプ関連 {
  card ヘルプ [
    ヘルプ
    --
    質問
    回答
  ]
  collections ヘルプ一覧 [
    ヘルプ一覧
    --
    注目の質問
    よくあるご質問
    ヘルプ検索結果
  ]

  card タグ
  card 大分類
  card 中分類
  card ヘルプページへの評価 [
    ヘルプページへの評価
    --
    ご意見・ご要望
  ]

  ' コレクション
  ヘルプ一覧 - ヘルプ
  ' 内部関連
  大分類 -- 中分類
  中分類 -- ヘルプ
  タグ -- ヘルプ
  ヘルプ -- ヘルプページへの評価
}

rectangle お問い合わせ関連 {
  card お問い合わせ [
    お問い合わせ
    --
    お名前
    電話番号
    Email
    都道府県
    お問い合わせの種類
    お問い合わせ内容
  ]
}

rectangle お知らせ関連 {
  card お知らせ [
    お知らせ
    --
    日時
    タイトル
    本文
  ]
  collections お知らせ一覧 [
    医療機関のお知らせ一覧
    運営のお知らせ一覧
  ]
  card カテゴリ
  card 既読

  ' コレクション
  お知らせ一覧 - お知らせ
  ' 内部関連
  カテゴリ -- お知らせ
  お知らせ -- 既読

  ' 外部関連
  薬局 --- お知らせ
  既読 --- EPARKアカウント
}

@enduml

```

---

### 気になったこと

- 「現在の所有ポイント」と「所持ポイント」は同義か？
- 「ポイント」は全て「EPARKポイント」と同義か？
- 「お薬手帳ポイント一覧」の"一覧"とは何の一覧か？
- 「今月のポイントアクション」と「今月獲得できるポイント」は同義か？
- ポイントの単位は「pt」と「ポイント」で同義か？
- 「登録済みの病院」と「お気に入りの病院」は同義か？
- 「使用可能なカードの種類」が「0」表記となるケースがあるが、想定通りか？
- 「提供しているサービス」という見出しが重複しているが、想定通りか？
- 「施設」と「医療機関」は同義か？
