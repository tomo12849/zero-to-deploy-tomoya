"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const menuData = {
  主菜: [
    {
      id: 1,
      name: "ハンバーグプレート",
      price: 980,
      image:
        "https://cdn.pakutaso.com/shared/img/thumb/SAWA_hanbagu_TP_V.jpg",
    },
    {
      id: 2,
      name: "チキンカレー",
      price: 850,
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "カルボナーラ",
      price: 920,
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  飲み物: [
    {
      id: 4,
      name: "アイスコーヒー",
      price: 420,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "カフェラテ",
      price: 480,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "オレンジジュース",
      price: 380,
      image:
        "https://jaec-mikkabi.s3-ap-northeast-1.amazonaws.com/uploads/blog_article/thumbnail/123/webp_large_thumb_thumbnail.png.webp",
    },
  ],

  デザート: [
    {
      id: 7,
      name: "ショートケーキ",
      price: 550,
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "パンケーキ",
      price: 720,
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "バニラアイス",
      price: 350,
      image:
        "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG0LBjzJUpfPUffCSKSZN0qscsh4j1ABgT7rGC_LRO6k-XnxbcTeqgkLbvsrjjOCHzcW_S9-TryFnHrTvR3GhNWYXsq210caC1QD8_kwDuzMQFXnll8a50r2CBagWlyh5JA==/18303?errorImage=false",
    },
  ],
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")
  const [orderList, setOrderList] = useState<any[]>([])
  const [message, setMessage] = useState("")

  const addToOrder = (item: any) => {
    setOrderList((prev) => [...prev, item])
    setMessage(`${item.name} を注文しました！`)

    setTimeout(() => setMessage(""), 2000)
  }

  const callStaff = () => {
    setCurrentPage("staff")
    setMessage("店員を呼びました")
    setTimeout(() => setMessage(""), 2000)
  }

  const goCheckout = () => {
    setCurrentPage("checkout")
    setMessage("お会計画面へ移動しました")
    setTimeout(() => setMessage(""), 2000)
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-amber-50">

      {/* Header */}
      <header className="w-full bg-white shadow p-4 text-center sticky top-0 z-10">
        <h1 className="text-xl font-bold">テーブル1番 いらっしゃいませ！</h1>
        <p className="text-sm text-gray-600">カフェテリアへようこそ！</p>
      </header>

      {/* 固定メッセージ */}
      {message && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-xl text-center font-semibold shadow-lg">
          {message}
        </div>
      )}

      {/* ホーム */}
      {currentPage === "home" && (
        <div className="w-full max-w-md p-4 space-y-6">
          <Card>
            <CardContent className="p-4 space-y-4">
              <Button onClick={() => setCurrentPage("menu")}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
                ご注文
              </Button>

              <Button onClick={() => setCurrentPage("takeout")}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
                テイクアウト注文
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 grid grid-cols-1 gap-4">
              <Button onClick={() => setCurrentPage("history")}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
                注文履歴
              </Button>

              <Button onClick={callStaff}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
                店員を呼ぶ
              </Button>

              <Button onClick={goCheckout}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
                お会計
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* メニュー */}
      {(currentPage === "menu" || currentPage === "takeout") && (
        <div className="w-full max-w-7xl p-4 flex flex-col lg:flex-row gap-6">

          <div className="flex-1 space-y-10">
            <Button variant="outline" onClick={() => setCurrentPage("home")}>
              ← トップへ戻る
            </Button>

            <h2 className="text-3xl font-bold text-center">
              {currentPage === "menu" ? "店内メニュー" : "テイクアウトメニュー"}
            </h2>

            {Object.entries(menuData).map(([genre, items]) => (
              <section key={genre} className="space-y-4">
                <h2 className="text-2xl font-bold text-amber-900">{genre}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {items.map((item: any) => (
                    <Card key={item.id} className="overflow-hidden shadow-md">
                      <img src={item.image} className="w-full h-48 object-cover" />
                      <CardContent className="p-4 space-y-3">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-amber-700 font-bold">¥{item.price}</p>

                        <Button
                          onClick={() => addToOrder(item)}
                          className="w-full bg-amber-300 hover:bg-amber-400 text-amber-900"
                        >
                          注文リストへ追加
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* カート */}
          <div className="w-full lg:w-[350px]">
            <Card className="sticky top-24">
              <CardContent className="p-4 space-y-4">
                <h2 className="text-2xl font-bold">注文リスト</h2>

                {orderList.map((item, i) => (
                  <div key={i} className="flex justify-between border-b pb-2">
                    <span>{item.name}</span>
                    <span>¥{item.price}</span>
                  </div>
                ))}

                <div className="flex justify-between font-bold text-xl pt-4">
                  <span>合計</span>
                  <span>
                    ¥{orderList.reduce((sum, i) => sum + i.price, 0)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* 履歴 */}
      {currentPage === "history" && (
        <div className="p-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">注文履歴</h2>

              {orderList.length === 0 ? (
                <p>履歴なし</p>
              ) : (
                orderList.map((item, i) => (
                  <div key={i} className="flex justify-between border-b py-2">
                    <span>{item.name}</span>
                    <span>¥{item.price}</span>
                  </div>
                ))
              )}

              <Button onClick={() => setCurrentPage("home")} className="mt-4 w-full">
                戻る
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 店員 */}
      {currentPage === "staff" && (
        <div className="p-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold">店員を呼びました</h2>
              <p>すぐに伺います</p>

              <Button onClick={() => setCurrentPage("home")} className="mt-4 w-full">
                戻る
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 会計 */}
      {currentPage === "checkout" && (
        <div className="p-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">お会計</h2>

              {orderList.map((item, i) => (
                <div key={i} className="flex justify-between border-b py-2">
                  <span>{item.name}</span>
                  <span>¥{item.price}</span>
                </div>
              ))}

              <div className="flex justify-between font-bold text-xl mt-4">
                <span>合計</span>
                <span>
                  ¥{orderList.reduce((sum, i) => sum + i.price, 0)}
                </span>
              </div>

              <Button onClick={() => setCurrentPage("home")} className="mt-4 w-full">
                戻る
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 p-4">
        © 2026 Cafeteria System
      </footer>
    </main>
  )
}