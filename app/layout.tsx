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
    <html
      lang="zh-CN"
      className="h-full antialiased"
      style={{ backgroundColor: "#05070b", colorScheme: "dark" }}
    >
      <head>
        <link rel="stylesheet" href="/fallback.css" />
      </head>
      <body
        className="min-h-full"
        style={{
          minHeight: "100%",
          margin: 0,
          backgroundColor: "#05070b",
          color: "#f8fafc",
        }}
      >
        {children}
      </body>
    </html>
  );
}
