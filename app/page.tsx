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
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1200&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
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

    setTimeout(() => {
      setMessage("")
    }, 2000)
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-amber-50">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 text-center sticky top-0 z-10">
        <h1 className="text-xl font-bold">
          テーブル1番 いらっしゃいませ！
        </h1>

        <p className="text-sm text-gray-600">
          カフェテリアへようこそ！
        </p>
      </header>

      {/* ホーム */}
      {currentPage === "home" && (
        <div className="w-full max-w-md p-4 space-y-6">
          <Card>
            <CardContent className="p-4 space-y-4">
              <Button
                onClick={() => setCurrentPage("menu")}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900"
              >
                ご注文
              </Button>

              <Button
                onClick={() => setCurrentPage("takeout")}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900"
              >
                テイクアウト注文
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 grid grid-cols-1 gap-4">
              <Button
                onClick={() => setCurrentPage("history")}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900"
              >
                注文履歴
              </Button>

              <Button
                onClick={() => setCurrentPage("staff")}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900"
              >
                店員を呼ぶ
              </Button>

              <Button
                onClick={() => setCurrentPage("checkout")}
                className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900"
              >
                お会計
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* メニュー画面 */}
      {(currentPage === "menu" ||
        currentPage === "takeout") && (
        <div className="w-full max-w-7xl p-4 flex flex-col lg:flex-row gap-6">
          {/* 左側 メニュー */}
          <div className="flex-1 space-y-10">
            <Button
              variant="outline"
              onClick={() => setCurrentPage("home")}
              className="mb-2"
            >
              ← トップへ戻る
            </Button>

            <h2 className="text-3xl font-bold text-center">
              {currentPage === "menu"
                ? "店内メニュー"
                : "テイクアウトメニュー"}
            </h2>

            {/* メッセージ */}
            {message && (
              <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-xl text-center font-semibold shadow">
                {message}
              </div>
            )}

            {Object.entries(menuData).map(([genre, items]) => (
              <section key={genre} className="space-y-4">
                <h2 className="text-2xl font-bold text-amber-900">
                  {genre}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <Card
                      key={item.id}
                      className="overflow-hidden shadow-md hover:shadow-xl transition"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />

                      <CardContent className="p-4 space-y-3">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.name}
                          </h3>

                          <p className="text-amber-700 font-bold">
                            ¥{item.price}
                          </p>
                        </div>

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

          {/* 右側 注文リスト */}
          <div className="w-full lg:w-[350px]">
            <Card className="sticky top-24 shadow-xl">
              <CardContent className="p-4 space-y-4">
                <h2 className="text-2xl font-bold">
                  注文リスト
                </h2>

                {orderList.length === 0 ? (
                  <p className="text-gray-500">
                    まだ商品が追加されていません
                  </p>
                ) : (
                  <>
                    <div className="space-y-3 max-h-[500px] overflow-y-auto">
                      {orderList.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between border-b pb-2"
                        >
                          <span>{item.name}</span>
                          <span>¥{item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between font-bold text-xl pt-4 border-t">
                      <span>合計</span>

                      <span>
                        ¥
                        {orderList.reduce(
                          (sum, item) => sum + item.price,
                          0
                        )}
                      </span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* 注文履歴 */}
      {currentPage === "history" && (
        <div className="w-full max-w-md p-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">
                注文履歴
              </h2>

              {orderList.length === 0 ? (
                <p className="text-gray-500">
                  注文履歴はまだありません
                </p>
              ) : (
                orderList.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>{item.name}</span>
                    <span>¥{item.price}</span>
                  </div>
                ))
              )}

              <Button
                onClick={() => setCurrentPage("home")}
                className="w-full"
              >
                戻る
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 店員呼び出し */}
      {currentPage === "staff" && (
        <div className="w-full max-w-md p-4">
          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <h2 className="text-2xl font-bold">
                店員を呼びました
              </h2>

              <p className="text-gray-600">
                店員がまもなく伺います。
              </p>

              <Button
                onClick={() => setCurrentPage("home")}
                className="w-full"
              >
                戻る
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* お会計 */}
      {currentPage === "checkout" && (
        <div className="w-full max-w-md p-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-bold">
                お会計
              </h2>

              <div className="space-y-2">
                {orderList.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>{item.name}</span>
                    <span>¥{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between font-bold text-xl pt-4">
                <span>合計</span>

                <span>
                  ¥
                  {orderList.reduce(
                    (sum, item) => sum + item.price,
                    0
                  )}
                </span>
              </div>

              <Button
                onClick={() => setCurrentPage("home")}
                className="w-full"
              >
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