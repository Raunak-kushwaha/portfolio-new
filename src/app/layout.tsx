import type { Metadata } from "next"
import { Header } from "@/components/Header"
import "./globals.css"

export const metadata: Metadata = {
  title: "Raunak Kushwaha — Designer & Developer",
  description: "The portfolio of Raunak Kushwaha, a UI/UX designer and full-stack developer based in India.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
