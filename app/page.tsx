import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Shadcn UI Test</h1>

      <Button>Click me</Button>

      <Card className="w-80">
        <CardHeader>
          <CardTitle>Sample Card</CardTitle>
        </CardHeader>
        <CardContent>
          This is a simple card component.
        </CardContent>
      </Card>
    </main>
  )
}
