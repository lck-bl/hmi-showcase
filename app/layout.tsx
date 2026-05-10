import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "基于 PAD 情绪量表的 HMI 自适应设计",
  description:
    "面向毕业设计答辩与作品集展示的车机 HMI 研究型设计网站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
