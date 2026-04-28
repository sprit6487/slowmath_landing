import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.slowkids.net"),
  alternates: {
    canonical: "/",
  },
  title: "느린아이 | 한 걸음씩, 아이의 속도로",
  description:
    "발달 지연·경계선 지능·학습 장애 아동이 스스로 해내는 경험을 쌓도록 설계된 수학 학습 도구 25종. 숫자 익히기·덧셈·뺄셈·구구단·시계 보기·비교하기·패턴 인지·소근육 발달 훈련까지. 학부모가 집에서 바로 활용할 수 있습니다.",
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
    title: "느린아이 시리즈 — 한 걸음씩, 아이의 속도로",
    description:
      "발달 지연·경계선 지능·학습 장애 아동이 자기 속도로 수학의 기초를 쌓는 25개 학습 도구. 무료로 바로 사용해보세요.",
    images: ["https://starguys.github.io/slowmath_landing/og-image.png"],
  },
  verification: {
    other: {
      "naver-site-verification": [
        "96f9abd3db28c71203b7f8ca7538184fec3fe90e",
        "93dafd43863565fa114f78ca17c0ebbbe34695ed",
      ],
      "msvalidate.01": "D10CD3141F96886AF21FEC7813782631",
    },
  },
};

const SITE_URL = "https://www.slowkids.net";
const APP_BASE = "https://sprit6487.github.io/slowmath_all";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "느린아이",
  alternateName: "느린아이 시리즈",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "발달 장애·경계선 지능·학습 장애 아동이 자신의 속도로 수학의 기초를 차근차근 쌓도록 설계된 학습 도구입니다.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "느린아이 시리즈",
  alternateName: "Slow Kids",
  url: SITE_URL,
  inLanguage: "ko-KR",
  description:
    "발달 지연·경계선 지능·학습 장애 아동을 위한 25개의 수학·인지·소근육 학습 도구.",
  publisher: {
    "@type": "Organization",
    name: "느린아이",
    url: SITE_URL,
  },
};

const appCatalog = [
  // 기초 인지
  { slug: "color", name: "색깔 익히기", desc: "색깔 이름을 보고·듣고·고르며 색 인지 능력을 키워요." },
  { slug: "linedraw", name: "선 긋기", desc: "직선·곡선·나선을 따라 그리며 손의 안정성을 키워요." },
  { slug: "dot2dot", name: "점선 따라 그리기", desc: "주어진 점-선 연결을 따라 그리며 시지각과 소근육을 키워요." },
  { slug: "colorcopy", name: "똑같이 맞추기", desc: "제시된 색 격자 패턴을 그대로 따라 만들며 시지각을 훈련해요." },
  { slug: "pattern", name: "패턴 연습", desc: "반복되는 규칙에서 빠진 것을 찾는 패턴 인식을 훈련해요." },
  // 수 개념
  { slug: "number", name: "숫자 익히기", desc: "1부터 100까지 숫자를 보고·듣고·고르며 익혀요." },
  { slug: "numberdraw", name: "숫자 쓰기", desc: "0~9 숫자를 올바른 순서로 쓰는 법을 연습해요." },
  { slug: "dice", name: "세기", desc: "손가락·주사위·카드 무늬를 세며 수 감각을 키워요." },
  { slug: "counting", name: "우리말 세기", desc: "한 명·두 마리·세 대… 우리말로 세는 말과 숫자를 짝지어요." },
  { slug: "matching", name: "숫자 매칭", desc: "숫자와 동그라미의 개수를 연결하며 수와 양을 연결해요." },
  // 수 관계
  { slug: "comparing", name: "비교하기 기초", desc: "크기·길이·높이·두께·양을 비교하며 수학 언어를 익혀요." },
  { slug: "comparing2", name: "비교하기 기초 2", desc: "위·아래·안·밖 등 공간 관계를 비교하며 익혀요." },
  { slug: "clock", name: "시계 보기", desc: "아날로그·디지털 시계를 읽는 법을 시·30분·15분 단위로 배워요." },
  // 덧셈 전 개념
  { slug: "combining", name: "모으기 연습", desc: "두 수를 합쳐 하나의 수를 만드는 수 합성을 연습해요." },
  { slug: "splitting", name: "가르기 연습", desc: "하나의 수를 두 부분으로 나누는 수 분해를 연습해요." },
  { slug: "complement", name: "보수 연습", desc: "10을 채우는 짝꿍 수(보수)를 익혀요." },
  // 덧셈
  { slug: "plusone", name: "더하기 1", desc: "수 배열판으로 +1 덧셈을 직관적으로 익혀요." },
  { slug: "plustwo", name: "더하기 2", desc: "2 더하기를 배열판과 건너뛰기로 시각화해서 배워요." },
  { slug: "plusthree", name: "더하기 3", desc: "3 더하기를 여러 학습 모드로 반복 연습해요." },
  { slug: "easy", name: "한 자리 덧셈", desc: "가장 쉬운 단계부터 시작하는 한 자리 덧셈 연습." },
  { slug: "circle", name: "한 자리 덧셈 연습", desc: "고르기·쌓기·채우기 세 가지 방식으로 덧셈을 연습해요." },
  // 뺄셈
  { slug: "minusone", name: "빼기 1", desc: "수 배열판으로 -1 뺄셈을 직관적으로 익혀요." },
  { slug: "minustwo", name: "빼기 2", desc: "2 빼기를 배열판과 거꾸로 건너뛰기로 시각화해서 배워요." },
  { slug: "minusthree", name: "빼기 3", desc: "3 빼기를 여러 학습 모드로 반복 연습해요." },
  // 곱셈
  { slug: "timestables", name: "구구단 연습", desc: "2~9단 구구단을 충분한 생각 시간과 함께 천천히 익혀요." },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "느린아이 시리즈 학습 도구",
  description: "발달 지연·경계선 지능·학습 장애 아동을 위한 25개의 수학·인지 학습 도구",
  numberOfItems: appCatalog.length,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  itemListElement: appCatalog.map((app, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "EducationalApplication",
      name: app.name,
      url: `${APP_BASE}/slowmath_${app.slug}/`,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      inLanguage: "ko-KR",
      description: app.desc,
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
      },
      publisher: {
        "@type": "Organization",
        name: "느린아이",
        url: SITE_URL,
      },
    },
  })),
};

const jsonLdBlocks = [organizationJsonLd, websiteJsonLd, itemListJsonLd];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {jsonLdBlocks.map((block, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(block).replace(/</g, "\\u003c"),
            }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
