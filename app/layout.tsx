import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "느린아이 | 한 걸음씩, 아이의 속도로",
  description:
    "발달 지연·경계선 지능·학습 장애 아동이 스스로 해내는 경험을 쌓도록 설계된 수학 학습 도구 21종. 숫자 익히기·덧셈·구구단·시계 보기·비교하기·패턴 인지·소근육 발달 훈련까지. 학부모가 집에서 바로 활용할 수 있습니다.",
  keywords: [
    "느린 학습자 수학",
    "발달 지연 아이 수학 학습",
    "경계선 지능 학습 도구",
    "특수 교육 수학",
    "학습 장애 수학 훈련",
    "느린 아이 학습 지원",
    "초등 수학 기초 연습",
    "수 개념 기초 학습",
    "구구단 천천히 배우기",
    "숫자 쓰기 연습",
    "시계 보기 연습",
    "덧셈 기초 연습",
    "소근육 발달 훈련",
    "발달 장애 아동 학습",
    "특수 교사 수업 도구",
    "인지 학습 훈련",
    "색깔 인지 학습",
    "패턴 인식 훈련",
    "수 세기 연습",
    "아동 수학 학습 도구",
  ],
  openGraph: {
    title: "느린 아이를 위한 수학 학습 도우미",
    description:
      "발달 지연·경계선 지능·학습 장애 아동이 자신의 속도로 수학의 기초를 차근차근 쌓도록 설계된 학습 도구입니다.",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://starguys.github.io/slowmath_landing/og-image.png",
        width: 1200,
        height: 630,
        alt: "느린아이 시리즈 — 느리지만 올바른 방향으로, 한 걸음씩 나아갑니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://starguys.github.io/slowmath_landing/og-image.png"],
  },
  verification: {
    other: {
      "naver-site-verification": "96f9abd3db28c71203b7f8ca7538184fec3fe90e",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
