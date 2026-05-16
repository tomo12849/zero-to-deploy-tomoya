import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-amber-50">
      {/* Header */}
      <header className="w-full bg-white shadow p-4 text-center">
        <h1 className="text-xl font-bold">テーブル1番 いらっしゃいませ！</h1>
        <p className="text-sm text-gray-600">カフェテリアへようこそ！</p>
      </header>

      {/* Main */}
      <div className="w-full max-w-md p-4 space-y-6">
        <Card>
          <CardContent className="p-4 space-y-4">
            <Button className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
              ご注文
            </Button>
            <Button className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
              テイクアウト注文
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 grid grid-cols-1 gap-4">
            <Button className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
              注文履歴
            </Button>
            <Button className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
              店員を呼ぶ
            </Button>
            <Button className="w-full h-12 text-lg bg-amber-300 hover:bg-amber-400 text-amber-900">
              お会計
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 p-4">
        © 2026 Cafeteria System
      </footer>
    </main>
  )
}
