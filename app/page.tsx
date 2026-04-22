// ─── SVG Icon Components ───────────────────────────────────────────────────

function IconNumbers({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="3" y="8" width="7" height="9" rx="2" fill={color} opacity=".2" />
      <text x="6.5" y="16" fontSize="7" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">1</text>
      <rect x="11" y="5" width="7" height="12" rx="2" fill={color} opacity=".35" />
      <text x="14.5" y="14" fontSize="7" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">2</text>
      <rect x="19" y="3" width="7" height="15" rx="2" fill={color} opacity=".55" />
      <text x="22.5" y="13" fontSize="7" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">3</text>
      <line x1="3" y1="22" x2="26" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDots({ color }: { color: string }) {
  const pos = [5, 14, 23];
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {pos.map((x, i) => (
        <circle key={i} cx={x} cy="14" r="4" fill={color} opacity={0.3 + i * 0.25} />
      ))}
    </svg>
  );
}

function IconMatch({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="2" y="5" width="10" height="18" rx="3" stroke={color} strokeWidth="1.8" fill={color} fillOpacity=".1" />
      <text x="7" y="17" fontSize="9" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">3</text>
      <line x1="14" y1="14" x2="18" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      <circle cx="22" cy="11" r="2.5" fill={color} opacity=".7" />
      <circle cx="22" cy="17" r="2.5" fill={color} opacity=".5" />
      <circle cx="26" cy="14" r="2.5" fill={color} opacity=".3" />
    </svg>
  );
}

function IconPlus({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {/* 2 */}
      <rect x="1" y="9" width="10" height="11" rx="2" fill={color} fillOpacity=".15" stroke={color} strokeWidth="1.4"/>
      <text x="6" y="17.5" fontSize="7.5" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">2</text>
      {/* + */}
      <line x1="13" y1="14.5" x2="16" y2="14.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="14.5" y1="13" x2="14.5" y2="16" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      {/* 3 */}
      <rect x="17" y="9" width="10" height="11" rx="2" fill={color} fillOpacity=".15" stroke={color} strokeWidth="1.4"/>
      <text x="22" y="17.5" fontSize="7.5" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">3</text>
    </svg>
  );
}

function IconArrowRight({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="8" cy="14" r="5" fill={color} fillOpacity=".2" />
      <line x1="13" y1="14" x2="22" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <polyline points="18,10 22,14 18,18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="8" y="17.5" fontSize="8" fontWeight="800" fill={color} textAnchor="middle" fontFamily="sans-serif">+1</text>
    </svg>
  );
}

function IconTen({ color, n }: { color: string; n: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="2" y="7" width="24" height="14" rx="3" fill={color} fillOpacity=".12" stroke={color} strokeWidth="1.5" />
      <text x="14" y="18" fontSize="10" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">{n}</text>
    </svg>
  );
}

function IconMerge({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="7" cy="10" r="4" fill={color} opacity=".4" />
      <circle cx="7" cy="18" r="4" fill={color} opacity=".6" />
      <path d="M11 10 L18 14 M11 18 L18 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="22" cy="14" r="5" fill={color} opacity=".8" />
    </svg>
  );
}

function IconSplit({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="6" cy="14" r="5" fill={color} opacity=".7" />
      <path d="M11 14 L17 10 M11 14 L17 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="21" cy="10" r="3.5" fill={color} opacity=".4" />
      <circle cx="21" cy="18" r="3.5" fill={color} opacity=".25" />
    </svg>
  );
}

function IconScale({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <line x1="14" y1="4" x2="14" y2="24" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="5" y1="8" x2="23" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="13" width="8" height="7" rx="2" fill={color} fillOpacity=".25" stroke={color} strokeWidth="1.5" />
      <rect x="17" y="16" width="8" height="4" rx="2" fill={color} fillOpacity=".45" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function IconLocation({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="8" y="8" width="12" height="12" rx="2" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="2.5" fill={color} opacity=".6" />
      <line x1="14" y1="3" x2="14" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="22" x2="14" y2="25" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="14" x2="6" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="14" x2="25" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconPattern({ color }: { color: string }) {
  const shapes = [
    { x: 5, y: 9, type: "circle" },
    { x: 14, y: 9, type: "rect" },
    { x: 23, y: 9, type: "circle" },
    { x: 5, y: 19, type: "rect" },
    { x: 14, y: 19, type: "?" },
    { x: 23, y: 19, type: "rect" },
  ];
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {shapes.map((s, i) =>
        s.type === "circle" ? (
          <circle key={i} cx={s.x} cy={s.y} r="3.5" fill={color} opacity={i === 4 ? 0 : 0.5} stroke={color} strokeWidth={i === 4 ? 1.2 : 0} strokeDasharray={i === 4 ? "2 1.5" : ""} />
        ) : s.type === "?" ? (
          <g key={i}>
            <rect x={s.x - 4} y={s.y - 4} width="8" height="8" rx="1.5" fill="none" stroke={color} strokeWidth="1.2" strokeDasharray="2 1.5" />
            <text x={s.x} y={s.y + 3} fontSize="6" fontWeight="700" fill={color} textAnchor="middle" fontFamily="sans-serif">?</text>
          </g>
        ) : (
          <rect key={i} x={s.x - 3.5} y={s.y - 3.5} width="7" height="7" rx="1.5" fill={color} opacity="0.5" />
        )
      )}
    </svg>
  );
}

function IconPalette({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="9" cy="10" r="4.5" fill="#E8924A" opacity=".8" />
      <circle cx="19" cy="10" r="4.5" fill={color} opacity=".7" />
      <circle cx="14" cy="19" r="4.5" fill="#4DB87A" opacity=".7" />
      <circle cx="14" cy="14" r="3" fill="white" opacity=".9" />
    </svg>
  );
}

function IconGrid({ color }: { color: string }) {
  const cells = [
    { x: 3, y: 3, fill: color, op: 0.7 },
    { x: 13, y: 3, fill: "#E8924A", op: 0.7 },
    { x: 3, y: 13, fill: "#4DB87A", op: 0.7 },
    { x: 13, y: 13, fill: color, op: 0.35 },
  ];
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="9" height="9" rx="2" fill={c.fill} opacity={c.op} />
      ))}
      <line x1="14" y1="0" x2="14" y2="28" stroke="white" strokeWidth="1.5" />
      <line x1="0" y1="14" x2="28" y2="14" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

function IconPencil({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M6 22 L8 15 L20 4 C21.5 2.5 23.5 2.5 24 4.5 C25 7 23 8 21.5 9.5 L10 21 Z" fill={color} fillOpacity=".2" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="18" y1="5.5" x2="22.5" y2="10" stroke={color} strokeWidth="1.5" />
      <line x1="6" y1="22" x2="9" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconDotLine({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="5" cy="5" r="2.5" fill={color} opacity=".4" />
      <circle cx="14" cy="5" r="2.5" fill={color} opacity=".5" />
      <circle cx="23" cy="5" r="2.5" fill={color} opacity=".6" />
      <circle cx="23" cy="14" r="2.5" fill={color} opacity=".7" />
      <circle cx="14" cy="23" r="2.5" fill={color} opacity=".8" />
      <circle cx="5" cy="23" r="2.5" fill={color} opacity=".9" />
      <polyline points="5,5 14,5 23,5 23,14 14,23 5,23" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeDasharray="3 2" />
    </svg>
  );
}

function IconWrite({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {/* 숫자 5 */}
      <text x="7" y="21" fontSize="18" fontWeight="900" fill={color} fillOpacity=".2" fontFamily="sans-serif">5</text>
      {/* 펜촉 */}
      <path d="M18 5 L23 10 L13 20 L9 21 L10 17 Z" fill={color} fillOpacity=".25" stroke={color} strokeWidth="1.3" strokeLinejoin="round"/>
      <line x1="16" y1="7" x2="21" y2="12" stroke={color} strokeWidth="1" opacity=".5"/>
      <path d="M9 21 L10 17" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function IconClock({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="11" stroke={color} strokeWidth="1.8" fill={color} fillOpacity=".08" />
      <line x1="14" y1="14" x2="14" y2="7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="14" x2="19" y2="17" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="14" cy="14" r="1.5" fill={color} />
    </svg>
  );
}

function IconMultiply({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      {/* 3 */}
      <rect x="1" y="9" width="9" height="11" rx="2" fill={color} fillOpacity=".15" stroke={color} strokeWidth="1.4"/>
      <text x="5.5" y="17.5" fontSize="7.5" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">3</text>
      {/* × */}
      <line x1="12.5" y1="12.5" x2="15.5" y2="15.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="15.5" y1="12.5" x2="12.5" y2="15.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      {/* 4 */}
      <rect x="18" y="9" width="9" height="11" rx="2" fill={color} fillOpacity=".15" stroke={color} strokeWidth="1.4"/>
      <text x="22.5" y="17.5" fontSize="7.5" fontWeight="900" fill={color} textAnchor="middle" fontFamily="sans-serif">4</text>
    </svg>
  );
}

// Value prop icons
function IconHourglass() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M10 6 H26 L18 18 L26 30 H10 L18 18 Z" fill="#5A9FD8" fillOpacity=".15" stroke="#5A9FD8" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M11 7 L25 7 L18 16 Z" fill="#5A9FD8" fillOpacity=".5" />
      <ellipse cx="18" cy="25" rx="4" ry="3" fill="#5A9FD8" fillOpacity=".4" />
    </svg>
  );
}

function IconSpeaker() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <rect x="6" y="13" width="8" height="10" rx="2" fill="#4DB87A" fillOpacity=".3" stroke="#4DB87A" strokeWidth="1.8" />
      <path d="M14 13 L22 8 L22 28 L14 23 Z" fill="#4DB87A" fillOpacity=".5" stroke="#4DB87A" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M25 12 C27.5 14.5 27.5 21.5 25 24" stroke="#4DB87A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M28 9 C32 13 32 23 28 27" stroke="#4DB87A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity=".5" />
    </svg>
  );
}

function IconStairs() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M5 28 H12 V22 H19 V16 H26 V10 H32" stroke="#E8924A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="8.5" cy="28" r="2.5" fill="#E8924A" fillOpacity=".4" />
      <circle cx="15.5" cy="22" r="2.5" fill="#E8924A" fillOpacity=".55" />
      <circle cx="22.5" cy="16" r="2.5" fill="#E8924A" fillOpacity=".7" />
      <circle cx="29" cy="10" r="2.5" fill="#E8924A" fillOpacity=".9" />
    </svg>
  );
}

function IconRepeat() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M8 18 C8 12 12 8 18 8 L24 8" stroke="#8B72C8" strokeWidth="2" strokeLinecap="round" fill="none" />
      <polyline points="20,5 24,8 20,11" stroke="#8B72C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M28 18 C28 24 24 28 18 28 L12 28" stroke="#8B72C8" strokeWidth="2" strokeLinecap="round" fill="none" />
      <polyline points="16,31 12,28 16,25" stroke="#8B72C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function IconGentle() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
      <path d="M26 9 A 12 12 0 1 0 26 27 A 10 10 0 0 1 26 9 Z" fill="#D96060" fillOpacity=".2" stroke="#D96060" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="11" cy="10" r="1.4" fill="#D96060" opacity=".7"/>
      <circle cx="8" cy="20" r="1" fill="#D96060" opacity=".5"/>
      <circle cx="30" cy="23" r="1" fill="#D96060" opacity=".5"/>
    </svg>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────

const BASE = "https://sprit6487.github.io/slowmath_all";
const ASSET_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Category = {
  id: string;
  label: string;
  Icon: React.ComponentType<{ color: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
};

type App = {
  slug: string;
  name: string;
  korName: string;
  Icon: React.ComponentType<{ color: string }>;
  category: string;
  shortDesc: string;
  value: string;
  tags: string[];
  childEffect: string;
  duration: string;
};

const categories: Category[] = [
  {
    id: "number",
    label: "수 개념 & 세기",
    Icon: IconNumbers,
    color: "#5A9FD8",
    bgColor: "#EBF4FC",
    borderColor: "#B8D8F0",
  },
  {
    id: "motor",
    label: "소근육 & 쓰기 발달",
    Icon: IconPencil,
    color: "#8B72C8",
    bgColor: "#EDE8F8",
    borderColor: "#BBA8E8",
  },
  {
    id: "compare",
    label: "비교 & 패턴 인지",
    Icon: IconScale,
    color: "#4DB87A",
    bgColor: "#E6F6EE",
    borderColor: "#90D8B0",
  },
  {
    id: "addition",
    label: "덧셈 & 수 연산",
    Icon: IconPlus,
    color: "#E8924A",
    bgColor: "#FDF0E3",
    borderColor: "#F0C898",
  },
  {
    id: "advanced",
    label: "시계 & 곱셈",
    Icon: IconClock,
    color: "#D96060",
    bgColor: "#FAE8E8",
    borderColor: "#E8A8A8",
  },
];

const apps: App[] = [
  {
    slug: "slowmath_number",
    name: "Number",
    korName: "숫자 익히기",
    Icon: IconNumbers,
    category: "number",
    shortDesc: "1부터 100까지 숫자를 보고·듣고·고르며 익혀요",
    value:
      "힌트와 음성 안내 덕분에 아이 혼자서도 도전할 수 있어요. 한국어·한자어 수 이름을 동시에 익혀 학교 수업 준비에 효과적입니다.",
    tags: ["1~100", "순서 배열", "수 이름", "빈칸 채우기"],
    childEffect: "숫자를 보고 소리 내 읽어요",
    duration: "5분",
  },
  {
    slug: "slowmath_dice",
    name: "Dice",
    korName: "세기",
    Icon: IconDots,
    category: "number",
    shortDesc: "손가락·주사위·카드 무늬를 세며 수 감각을 키워요",
    value:
      "생활 속 사물을 세는 연습으로 수 감각을 자연스럽게 익힐 수 있어요. 생각 시간 조절로 충동적 답 선택을 막고 천천히 생각하는 습관을 기릅니다.",
    tags: ["손가락 세기", "주사위", "카드 무늬", "수 감각"],
    childEffect: "손가락을 짚으며 수를 세요",
    duration: "3분",
  },
  {
    slug: "slowmath_matching",
    name: "Matching",
    korName: "숫자 매칭",
    Icon: IconMatch,
    category: "number",
    shortDesc: "숫자와 동그라미의 개수를 연결하며 수와 양을 연결해요",
    value:
      "숫자 기호와 실제 양을 연결하는 핵심 수 개념을 다질 수 있어요. 순서대로·무작위로 반복하며 자동화 단계까지 이끌어줍니다.",
    tags: ["수와 양", "수 개념", "1~20", "순서·무작위"],
    childEffect: "숫자와 개수를 연결해요",
    duration: "5분",
  },
  {
    slug: "slowmath_easy",
    name: "Easy",
    korName: "한 자리 덧셈",
    Icon: IconPlus,
    category: "addition",
    shortDesc: "가장 쉬운 단계부터 시작하는 한 자리 덧셈 연습",
    value:
      "덧셈이 처음인 아이도 부담 없이 시작할 수 있도록 4단계로 난이도를 조절해요. 충동 억제 모드로 답을 고르기 전에 충분히 생각하는 습관을 만들어줍니다.",
    tags: ["4단계", "난이도 조절", "선택형", "1자리 덧셈"],
    childEffect: "+기호를 두려워하지 않아요",
    duration: "5분",
  },
  {
    slug: "slowmath_circle",
    name: "Circle",
    korName: "한 자리 덧셈 연습",
    Icon: IconTen.bind(null, { color: "#E8924A", n: "+" }),
    category: "addition",
    shortDesc: "고르기·쌓기·채우기 세 가지 방식으로 덧셈을 연습해요",
    value:
      "같은 덧셈을 다양한 형태로 경험해 개념이 더 깊이 자리잡혀요. 시각적 구체물을 활용하기 때문에 추상적 연산이 어려운 아이에게 특히 효과적입니다.",
    tags: ["동그라미", "1~9 합", "시각 조작"],
    childEffect: "답이 자연스럽게 떠올라요",
    duration: "5분",
  },
  {
    slug: "slowmath_plusone",
    name: "Plus One",
    korName: "더하기 1",
    Icon: ({ color }) => <IconTen color={color} n="+1" />,
    category: "addition",
    shortDesc: "수 배열판·순서 예측·무작위 문제로 +1 덧셈을 익혀요",
    value:
      "'+1은 다음 수'라는 규칙을 수 배열판으로 시각화해 직관적으로 이해할 수 있어요. 1~99 범위까지 단계적으로 넓혀 자신감을 쌓아줍니다.",
    tags: ["+1 덧셈", "수 배열판", "다음 수 예측", "순서 인식"],
    childEffect: "다음 수가 머릿속에 떠올라요",
    duration: "5분",
  },
  {
    slug: "slowmath_plustwo",
    name: "Plus Two",
    korName: "더하기 2",
    Icon: ({ color }) => <IconTen color={color} n="+2" />,
    category: "addition",
    shortDesc: "2 더하기를 배열판과 건너뛰기로 시각화해서 배워요",
    value:
      "수 배열판에서 두 칸 건너뛰는 패턴이 홀짝 개념과 연결되어 확장 학습이 가능해요. 1~98 범위를 단계별로 정복하며 성취감을 경험합니다.",
    tags: ["+2 덧셈", "수 배열판", "홀짝 연결", "무작위"],
    childEffect: "홀짝의 리듬이 눈에 보여요",
    duration: "5분",
  },
  {
    slug: "slowmath_plusthree",
    name: "Plus Three",
    korName: "더하기 3",
    Icon: ({ color }) => <IconTen color={color} n="+3" />,
    category: "addition",
    shortDesc: "3 더하기를 여러 학습 모드로 반복 연습해요",
    value:
      "더하기 1·2를 익힌 후 자연스럽게 이어지는 단계로, 수 배열판 애니메이션이 연산 과정을 생생하게 보여줘요. 무작위 문제로 완전 학습을 지원합니다.",
    tags: ["+3 덧셈", "수 배열판", "무작위"],
    childEffect: "건너뛰며 수를 세요",
    duration: "5분",
  },
  {
    slug: "slowmath_combining",
    name: "Combining",
    korName: "모으기",
    Icon: IconMerge,
    category: "addition",
    shortDesc: "두 수를 합쳐 하나의 수를 만드는 수 합성을 연습해요",
    value:
      "덧셈의 의미를 '모은다'는 직관으로 이해할 수 있어요. 드래그 인터랙션으로 손과 눈을 동시에 사용해 더 오래 기억됩니다.",
    tags: ["수 합성", "드래그", "점 표현"],
    childEffect: "두 수가 하나가 되는 걸 봐요",
    duration: "5분",
  },
  {
    slug: "slowmath_splitting",
    name: "Splitting",
    korName: "가르기",
    Icon: IconSplit,
    category: "addition",
    shortDesc: "하나의 수를 두 부분으로 나누는 수 분해를 연습해요",
    value:
      "뺄셈과 덧셈의 기초가 되는 수 분해 개념을 익힐 수 있어요. 2~9까지 세 단계로 나뉘어 아이 수준에 딱 맞는 도전부터 시작할 수 있습니다.",
    tags: ["수 분해", "두 부분", "드래그"],
    childEffect: "한 수가 나뉘는 걸 이해해요",
    duration: "5분",
  },
  {
    slug: "slowmath_complement",
    name: "Complement",
    korName: "보수 연습",
    Icon: ({ color }) => <IconTen color={color} n="10" />,
    category: "addition",
    shortDesc: "10을 채우는 짝꿍 수(보수)를 세 가지 방식으로 익혀요",
    value:
      "10의 보수는 받아올림 덧셈과 뺄셈의 핵심 개념이에요. 충동 억제 기능과 다양한 연습 모드로 충분히 반복해 완전 학습에 도달할 수 있습니다.",
    tags: ["10의 보수", "받아올림 준비", "원 시각화"],
    childEffect: "10을 채우는 짝을 찾아요",
    duration: "10분",
  },
  {
    slug: "slowmath_color",
    name: "Color",
    korName: "색깔 익히기",
    Icon: IconPalette,
    category: "compare",
    shortDesc: "색깔 이름을 보고·듣고·고르며 색 인지 능력을 키워요",
    value:
      "발달 장애 아이에게 색깔 이름은 어려울 수 있어요. 단순 인식부터 순서 기억까지 단계적으로 도전해 색 어휘를 탄탄하게 쌓아줍니다.",
    tags: ["색상 인식", "색 이름", "순서 기억", "색 변별"],
    childEffect: "색 이름이 입에 붙어요",
    duration: "3분",
  },
  {
    slug: "slowmath_comparing",
    name: "Comparing",
    korName: "비교하기",
    Icon: IconScale,
    category: "compare",
    shortDesc: "크기·길이·높이·두께·양을 비교하며 수학 언어를 익혀요",
    value:
      "'더 크다', '더 짧다'를 수학적 개념과 연결해 줘요. 그림으로 직관적으로 보여주기 때문에 글을 읽지 못해도 학습할 수 있습니다.",
    tags: ["크기 비교", "길이·높이", "두께·깊이", "양 비교"],
    childEffect: "크다·작다의 말을 써요",
    duration: "3분",
  },
  {
    slug: "slowmath_comparing2",
    name: "Comparing 2",
    korName: "비교하기 2",
    Icon: IconLocation,
    category: "compare",
    shortDesc: "위·아래·안·밖 등 공간 관계를 비교하며 익혀요",
    value:
      "위치와 공간 언어를 이해하는 것은 수학 문장제의 기초예요. 도형 그림으로 공간 개념을 자연스럽게 내면화할 수 있습니다.",
    tags: ["공간 위치", "위아래", "안과 밖", "방향 비교"],
    childEffect: "위·아래·안·밖을 짚어요",
    duration: "3분",
  },
  {
    slug: "slowmath_pattern",
    name: "Pattern",
    korName: "패턴 연습",
    Icon: IconPattern,
    category: "compare",
    shortDesc: "반복되는 규칙에서 빠진 것을 찾는 패턴 인식을 훈련해요",
    value:
      "패턴 인식은 수학적 사고력의 핵심이에요. 과일·색깔·도형 패턴을 단계적으로 학습하고, 선택 잠금 기능으로 사고력을 키워줍니다.",
    tags: ["규칙 찾기", "빈칸 채우기", "과일·도형", "다음 예측"],
    childEffect: "다음에 올 것을 스스로 찾아요",
    duration: "5분",
  },
  {
    slug: "slowmath_colorcopy",
    name: "Color Copy",
    korName: "똑같이 맞추기",
    Icon: IconGrid,
    category: "compare",
    shortDesc: "제시된 색 격자 패턴을 그대로 따라 만들며 시지각을 훈련해요",
    value:
      "시지각 변별과 작업 기억을 동시에 훈련해요. 2×2부터 5×5까지 격자가 커지고 색의 수도 조절할 수 있어 아이 수준에 맞게 활용 가능합니다.",
    tags: ["색 격자", "패턴 복제", "색 조합"],
    childEffect: "시각 기억이 조금씩 늘어요",
    duration: "5분",
  },
  {
    slug: "slowmath_linedraw",
    name: "Line Draw",
    korName: "선 긋기",
    Icon: IconPencil,
    category: "motor",
    shortDesc: "직선·곡선·나선을 따라 그리며 손의 안정성을 키워요",
    value:
      "글씨 쓰기와 그림 그리기의 기초가 되는 손 조절 능력을 재미있게 훈련해요. 3단계 난이도와 음성 안내로 아이가 포기하지 않고 꾸준히 연습할 수 있도록 돕습니다.",
    tags: ["직선·곡선", "나선 패턴", "소근육", "쓰기 준비"],
    childEffect: "선 긋기가 부드러워져요",
    duration: "5분",
  },
  {
    slug: "slowmath_dot2dot",
    name: "Dot to Dot",
    korName: "점선 따라 그리기",
    Icon: IconDotLine,
    category: "motor",
    shortDesc: "번호 순서대로 점을 연결하며 순서 개념과 소근육을 함께 키워요",
    value:
      "숫자 순서를 따라 점을 잇는 활동은 수 순서 개념과 소근육 발달을 동시에 자극해요. 격자 크기와 방향 복잡도를 조절해 아이 수준에 맞게 쓸 수 있습니다.",
    tags: ["점 연결", "번호 순서", "소근육", "방향 설정"],
    childEffect: "손과 눈이 함께 움직여요",
    duration: "5분",
  },
  {
    slug: "slowmath_numberdraw",
    name: "Number Draw",
    korName: "숫자 쓰기",
    Icon: IconWrite,
    category: "motor",
    shortDesc: "0~9 숫자를 올바른 순서로 쓰는 법을 연습해요",
    value:
      "숫자 모양을 손으로 직접 써보며 형태를 몸으로 기억할 수 있어요. 점선 안내와 단계적 피드백으로 처음 쓰는 아이도 올바른 필순을 자연스럽게 익힙니다.",
    tags: ["0~9 쓰기", "점선 가이드", "소근육", "획 순서"],
    childEffect: "획 순서가 자연스러워져요",
    duration: "5분",
  },
  {
    slug: "slowmath_clock",
    name: "Clock",
    korName: "시계 보기",
    Icon: IconClock,
    category: "advanced",
    shortDesc: "아날로그 시계를 읽는 법을 시·30분·15분 단위로 배워요",
    value:
      "시계 읽기는 생활 독립에 꼭 필요한 기술이에요. 정각부터 시작해 30분·15분·45분으로 점점 세밀해지는 단계로 누구나 따라갈 수 있도록 설계되었습니다.",
    tags: ["아날로그", "디지털", "시간 읽기", "생활 독립"],
    childEffect: "시각을 읽기 시작해요",
    duration: "5분",
  },
  {
    slug: "slowmath_timestables",
    name: "Timestables",
    korName: "구구단",
    Icon: IconMultiply,
    category: "advanced",
    shortDesc: "2~9단 구구단을 충분한 생각 시간과 함께 천천히 익혀요",
    value:
      "생각 시간을 충분히 조절할 수 있어 빠른 암기가 어려운 아이도 자기 속도로 구구단을 정복할 수 있어요. 반복 노출을 통해 장기 기억으로 자연스럽게 전환됩니다.",
    tags: ["곱셈", "2~9단", "단별 학습", "반복 암기"],
    childEffect: "리듬으로 단이 외워져요",
    duration: "10분",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function AppCard({ app, cat }: { app: App; cat: Category }) {
  const url = `${BASE}/${app.slug}/`;
  const { Icon } = app;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="app-card flex rounded-2xl overflow-hidden"
      style={{
        background: "#FFFFFF",
        boxShadow: "0 2px 12px rgba(45,38,32,0.07)",
        border: `1.5px solid ${cat.borderColor}`,
        textDecoration: "none",
        minHeight: 150,
      }}
    >
      {/* Left: Screenshot — always side-by-side */}
      <div
        className="relative shrink-0 overflow-hidden"
        style={{
          width: "46%",
          background: "#F7F4F0",
          borderRight: `1.5px solid ${cat.borderColor}`,
        }}
      >
        <img
          src={`${ASSET_BASE}/screenshots/${app.slug}.png`}
          alt={`${app.korName} 메인 화면`}
          loading="lazy"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col" style={{ flex: 1, minWidth: 0 }}>
        {/* Header */}
        <div
          className="flex items-center gap-1.5 px-3 py-3"
          style={{ background: cat.bgColor, borderBottom: `1px solid ${cat.borderColor}` }}
        >
          <div
            className="flex items-center justify-center rounded-xl shrink-0"
            style={{
              width: 32,
              height: 32,
              background: "white",
              boxShadow: `0 2px 8px ${cat.color}30`,
            }}
          >
            <Icon color={cat.color} />
          </div>
          <div className="min-w-0">
            <p
              className="text-xs font-semibold tracking-wide uppercase"
              style={{ color: cat.color, opacity: 0.75 }}
            >
              {app.name}
            </p>
            <h3
              className="text-xs font-black"
              style={{ color: "#2D2620", lineHeight: 1.3 }}
            >
              {app.korName}
            </h3>
          </div>
          <div
            className="ml-auto shrink-0"
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: cat.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {/* Body */}
        <div className="px-3 flex flex-col justify-center gap-2.5" style={{ flex: 1, paddingTop: "0.875rem", paddingBottom: "0.875rem" }}>
          <p className="text-xs font-bold leading-snug" style={{ color: "#2D2620" }}>
            {app.shortDesc}
          </p>

          {/* 아이 변화 + 하루 N분 */}
          <div
            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5"
            style={{
              background: cat.bgColor,
              borderLeft: `2.5px solid ${cat.color}`,
            }}
          >
            <span
              aria-hidden
              className="shrink-0 font-black"
              style={{ color: cat.color, fontSize: "0.72rem", lineHeight: 1 }}
            >
              ↳
            </span>
            <p
              className="font-bold break-keep"
              style={{ fontSize: "0.78rem", color: cat.color, lineHeight: 1.4, flex: 1 }}
            >
              {app.childEffect}
            </p>
            <span
              className="shrink-0 font-semibold whitespace-nowrap"
              style={{ fontSize: "0.66rem", color: cat.color, opacity: 0.72 }}
            >
              · 하루 {app.duration}
            </span>
          </div>

          <p className="leading-relaxed break-keep" style={{ fontSize: "0.72rem", color: "#7B6545" }}>
            {app.value}
          </p>
        </div>
      </div>
    </a>
  );
}

function CategorySection({
  cat,
  catApps,
}: {
  cat: Category;
  catApps: App[];
}) {
  const { Icon } = cat;
  return (
    <section
      id={`cat-${cat.id}`}
      aria-labelledby={`heading-${cat.id}`}
      style={{ scrollMarginTop: 72 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="flex items-center justify-center rounded-xl"
          style={{
            width: 40,
            height: 40,
            background: cat.bgColor,
            border: `1.5px solid ${cat.borderColor}`,
          }}
        >
          <Icon color={cat.color} />
        </div>
        <h2
          id={`heading-${cat.id}`}
          className="text-xl font-black"
          style={{ color: "#2D2620" }}
        >
          {cat.label}
        </h2>
        <span
          className="ml-1 text-xs font-bold rounded-full px-3 py-1"
          style={{ background: cat.bgColor, color: cat.color }}
        >
          {catApps.length}개
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {catApps.map((app) => (
          <AppCard key={app.slug} app={app} cat={cat} />
        ))}
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Page() {
  const valueProps = [
    {
      Icon: IconStairs,
      title: "단계별 난이도",
      desc: "아이의 현재 수준에서 시작해 작은 성공을 쌓으며 올라가요",
    },
    {
      Icon: IconRepeat,
      title: "반복 학습 설계",
      desc: "같은 개념을 여러 방식으로 반복해 더 오래, 더 깊이 기억되도록 해요",
    },
    {
      Icon: IconHourglass,
      title: "충분한 생각 시간",
      desc: "답을 고르기 전 생각 시간을 조절할 수 있어 충동적 선택을 줄여줘요",
    },
    {
      Icon: IconSpeaker,
      title: "음성 안내 지원",
      desc: "글을 읽지 못하는 아이도 소리만으로 혼자서 학습할 수 있어요",
    },
    {
      Icon: IconGentle,
      title: "감각 배려 설계",
      desc: "번쩍임·갑작스러운 소리 없이, 조용한 화면으로 만들었어요",
    },
  ];

  const seoKeywords = [
    "느린 학습자 수학",
    "발달 장애 아동 교육",
    "경계선 지능 학습 도구",
    "특수 교육 수학",
    "학습 장애 수학 훈련",
    "수 개념 기초",
    "소근육 발달",
    "시계 보기 연습",
    "구구단 천천히",
    "덧셈 기초 연습",
    "패턴 인식 훈련",
    "색깔 인지 학습",
  ];

  return (
    <div style={{ background: "#F7F4F0", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <header
        className="px-4 pt-10 pb-10 sm:px-6 sm:pt-16 sm:pb-14"
        style={{
          background: "linear-gradient(160deg, #FFFAF3 0%, #FFF0D8 55%, #FFE8C4 100%)",
          borderBottom: "1px solid #EDE0C8",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>

          {/* Logo + Brand */}
          <div className="flex flex-col items-center mb-5 gap-2">
            <svg viewBox="0 0 120 100" width="68" height="57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="느린아이 거북이 로고">
              <ellipse cx="30" cy="72" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(-20 30 72)"/>
              <ellipse cx="78" cy="76" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(15 78 76)"/>
              <ellipse cx="28" cy="54" rx="9" ry="5.5" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(-10 28 54)"/>
              <path d="M18 60 L10 55" stroke="#F2DC8C" strokeWidth="4" strokeLinecap="round"/>
              <ellipse cx="55" cy="58" rx="35" ry="20" fill="#F5E6C8" stroke="#3A9B6A" strokeWidth="2"/>
              <ellipse cx="52" cy="42" rx="32" ry="28" fill="#7EDCAA" stroke="#3A9B6A" strokeWidth="2.5"/>
              <path d="M52 18 L42 32 L42 48 L52 58 L62 48 L62 32 Z" fill="none" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <line x1="42" y1="32" x2="24" y2="38" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <line x1="62" y1="32" x2="80" y2="38" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <line x1="42" y1="48" x2="26" y2="56" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <line x1="62" y1="48" x2="78" y2="56" stroke="#3A9B6A" strokeWidth="1.3" opacity=".35"/>
              <ellipse cx="42" cy="26" rx="6" ry="4" fill="white" opacity=".35" transform="rotate(-15 42 26)"/>
              <ellipse cx="62" cy="36" rx="4" ry="3" fill="white" opacity=".2"/>
              <ellipse cx="92" cy="40" rx="17" ry="15" fill="#F5E6C8" stroke="#3A9B6A" strokeWidth="2.5"/>
              <ellipse cx="82" cy="72" rx="10" ry="6" fill="#F2DC8C" stroke="#3A9B6A" strokeWidth="2" transform="rotate(10 82 72)"/>
              <circle cx="99" cy="35" r="4" fill="white" stroke="#3A9B6A" strokeWidth="1.5"/>
              <circle cx="100" cy="34" r="2.5" fill="#3A9B6A"/>
              <circle cx="101" cy="33" r="1" fill="white"/>
              <circle cx="100" cy="44" r="3.5" fill="#F0A050" opacity=".4"/>
              <path d="M94 46 Q98 50 103 46" fill="none" stroke="#3A9B6A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="font-black" style={{ fontSize: "1.6rem", letterSpacing: "-0.02em" }}>
              <span style={{ color: "#5A9FD8" }}>느린</span>
              <span style={{ color: "#E8924A" }}>아이</span>
              <span style={{ color: "#2D2620" }}> 시리즈</span>
            </p>
          </div>

          {/* Slogan */}
          <h1
            className="font-black mb-4"
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.6rem)",
              lineHeight: 1.22,
              color: "#2D2620",
              letterSpacing: "-0.03em",
            }}
          >
            느리지만 <span style={{ color: "#5A9FD8" }}>올바른</span> 방향으로
            <br />
            <span style={{ color: "#E8924A" }}>한 걸음씩</span> 나아갑니다
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(0.8rem, 2.4vw, 0.875rem)",
              color: "#7B6545",
              lineHeight: 1.7,
              marginBottom: "32px",
              wordBreak: "keep-all",
            }}
          >
            <strong style={{ color: "#4A4035" }}>발달 장애·경계선 지능·학습 장애</strong> 아동이 <strong style={{ color: "#4A4035" }}>자신의 속도로</strong> 수학의 기초를 차근차근 쌓도록 설계된 학습 도구입니다.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="#apps"
              className="inline-flex items-center gap-2 font-black rounded-full"
              style={{
                background: "#E8924A",
                color: "white",
                padding: "14px 32px",
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(232,146,74,0.35)",
                letterSpacing: "-0.01em",
              }}
            >
              학습 도구 둘러보기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M8 3v10M3 8l5 5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </header>

      {/* ── 느린아이란? ── */}
      <section
        aria-label="느린아이 소개"
        className="px-6 py-10 sm:py-12"
        style={{ borderBottom: "1px solid #EDE0C8", background: "white" }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2
            className="font-black text-lg mb-3"
            style={{ color: "#2D2620", letterSpacing: "-0.02em" }}
          >
            느린아이란?
          </h2>
          <p className="text-sm leading-loose" style={{ color: "#7B6545" }}>
            느린아이는{" "}
            <strong style={{ color: "#4A4035" }}>
              발달 장애·경계선 지능·학습 장애 아동
            </strong>
            이 수학의 기초 개념을 스스로 익힐 수 있도록 만들어진 학습 도구 모음입니다.
            <strong style={{ color: "#4A4035" }}>일반 학습 도구가 너무 빠르게</strong> 진행되어 아이가 따라가지 못한다는 학부모의 고민에서 시작했습니다.
            충분한 생각 시간, 단계적 힌트, 음성 안내를 통해{" "}
            <strong style={{ color: "#4A4035" }}>아이가 스스로 해내는 경험</strong>을 반복하고,
            그 작은 성공이 독립의 자양분이 되도록 돕습니다.
            학부모·특수교사·인지치료사의 수업 보조 도구로도 활용됩니다.
          </p>
          <div
            className="flex gap-3 mt-5"
            style={{
              borderLeft: "3.5px solid #5A9FD8",
              paddingLeft: "14px",
            }}
          >
            <p className="text-sm font-semibold leading-relaxed" style={{ color: "#5A9FD8" }}>
              카이스트 출신, 자폐스펙트럼 발달장애 아이의 아빠가 경험을 바탕으로 직접 만들었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── Empathy ── */}
      <section
        aria-label="학부모 공감"
        className="px-6 py-12 sm:py-16"
        style={{
          borderBottom: "1px solid #EDE0C8",
          background:
            "radial-gradient(900px 420px at 12% 0%, rgba(232,146,74,0.08), transparent 60%), radial-gradient(700px 360px at 95% 100%, rgba(90,159,216,0.06), transparent 60%), linear-gradient(180deg, #FFFAF2 0%, #FFF6EA 100%)",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p
            className="text-center font-semibold mb-3"
            style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C77A00" }}
          >
            Before we begin
          </p>
          <h2
            className="text-center font-black mb-3 break-keep"
            style={{ fontSize: "clamp(1.3rem, 3.6vw, 1.75rem)", color: "#2D2620", letterSpacing: "-0.02em", lineHeight: 1.3 }}
          >
            이런 말, 혼잣말처럼
            <br />
            <span style={{ color: "#E8924A" }}>해보신 적 있으신가요?</span>
          </h2>
          <p
            className="text-center leading-relaxed mb-10 break-keep"
            style={{ fontSize: "0.9rem", color: "#7B6545", maxWidth: "520px", margin: "0 auto 2.5rem" }}
          >
            수십 번 들어본 이야기일지도 모릅니다. 하지만 이 말들은 언제나 새롭게 아픕니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "학습지를 사도 두 장 넘기면 울어버려요.",
              "숫자 1부터 10까지, 몇 달째 같은 자리에 머물러 있어요.",
              "한 번 틀리면 다시는 안 하려고 해요.",
              "또래 교재는 너무 빠르고, 유아 교재는 너무 유치해요.",
            ].map((concern) => (
              <div
                key={concern}
                className="relative rounded-2xl px-6 py-5"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid #EDE0C8",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 1px 0 rgba(45,38,32,0.02)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute font-black"
                  style={{
                    top: "-14px",
                    left: "18px",
                    fontSize: "3.2rem",
                    lineHeight: 1,
                    color: "rgba(232,146,74,0.7)",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  “
                </span>
                <p
                  className="leading-loose break-keep"
                  style={{ fontSize: "0.95rem", color: "#2D2620" }}
                >
                  {concern}
                </p>
              </div>
            ))}
          </div>

          {/* Resolution — empathic response, not brand-speak */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl px-6 py-6 sm:px-7"
            style={{ background: "#2D2620", color: "#F7F4F0" }}
          >
            <div style={{ flex: 1 }}>
              <p
                className="font-black mb-1.5"
                style={{ color: "#FFFFFF", fontSize: "1.1rem", letterSpacing: "-0.02em" }}
              >
                그 마음, 저희도 알아요.
              </p>
              <p className="leading-relaxed break-keep" style={{ fontSize: "0.85rem", color: "#D9C9B0" }}>
                그래서 아이의 속도에 맞춘 21개의 작은 연습을 만들었습니다.
                한 화면, 한 걸음, 하루 5분이면 충분해요.
              </p>
            </div>
            <a
              href="#apps"
              className="shrink-0 inline-flex items-center gap-1.5 font-bold rounded-full"
              style={{
                background: "#F5E6C8",
                color: "#2D2620",
                padding: "10px 18px",
                fontSize: "0.85rem",
                textDecoration: "none",
              }}
            >
              어떻게 만들었는지 보기
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M8 3l5 5-5 5" stroke="#2D2620" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Real-usage demo video ── */}
      <section
        aria-label="아이 학습 실제 모습"
        className="px-6 py-12 sm:py-16"
        style={{
          borderBottom: "1px solid #EDE0C8",
          background:
            "linear-gradient(180deg, #FBF6ED 0%, #F7F4F0 100%)",
        }}
      >
        <div
          style={{ maxWidth: "960px", margin: "0 auto" }}
          className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center"
        >
          <div>
            <p
              className="font-semibold mb-3"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5A9FD8",
              }}
            >
              In real life
            </p>
            <h2
              className="font-black mb-5 break-keep"
              style={{
                fontSize: "clamp(1.35rem, 3.6vw, 1.8rem)",
                color: "#2D2620",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
              }}
            >
              말보다 먼저,
              <br />
              <span style={{ color: "#E8924A" }}>장면으로 보여드릴게요.</span>
            </h2>
            <p
              className="leading-loose break-keep mb-6"
              style={{ fontSize: "0.95rem", color: "#7B6545" }}
            >
              천천히 한 걸음. 화려한 반응 대신, 아이가 자신의 속도에
              머무는 장면입니다.
            </p>
            <ul
              className="flex flex-col gap-2.5"
              style={{ fontSize: "0.9rem", color: "#4A4035" }}
            >
              <li className="flex items-start gap-2 break-keep">
                <span
                  aria-hidden
                  style={{ color: "#5A9FD8", fontWeight: 900, lineHeight: 1.6 }}
                >
                  ·
                </span>
                조용한 화면, 충분히 생각할 시간
              </li>
              <li className="flex items-start gap-2 break-keep">
                <span
                  aria-hidden
                  style={{ color: "#E8924A", fontWeight: 900, lineHeight: 1.6 }}
                >
                  ·
                </span>
                틀려도 다시, 작게 반복하며 쌓이는 자신감
              </li>
              <li className="flex items-start gap-2 break-keep">
                <span
                  aria-hidden
                  style={{ color: "#4DB87A", fontWeight: 900, lineHeight: 1.6 }}
                >
                  ·
                </span>
                아이가 스스로 터치하고 확인하는 순간들
              </li>
            </ul>
          </div>

          <div
            className="relative mx-auto overflow-hidden rounded-2xl"
            style={{
              width: "100%",
              maxWidth: "320px",
              aspectRatio: "406 / 720",
              background: "#EDE0C8",
              boxShadow: "0 22px 48px rgba(45,38,32,0.16)",
              border: "1px solid #EDE0C8",
            }}
          >
            <video
              src={`${ASSET_BASE}/video/learning-demo.mp4`}
              poster={`${ASSET_BASE}/video/learning-demo.jpg`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="느린아이 앱으로 학습하는 아이의 실제 모습"
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── Value Props ── */}
      <section
        aria-label="느린아이 학습 도구의 특징"
        className="px-6 py-10 sm:py-12"
        style={{
          background: "white",
          borderBottom: "1px solid #EDE0C8",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p
            className="text-center font-black mb-8"
            style={{ color: "#2D2620", fontSize: "1.15rem", letterSpacing: "-0.02em" }}
          >
            느린아이 학습 도구가 다른 이유
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center gap-3 rounded-2xl p-5"
                style={{ background: "#F7F4F0" }}
              >
                <v.Icon />
                <h3
                  className="font-black text-sm"
                  style={{ color: "#2D2620", letterSpacing: "-0.01em" }}
                >
                  {v.title}
                </h3>
                <p
                  className="leading-relaxed break-keep"
                  style={{ fontSize: "0.8rem", color: "#7B6545", lineHeight: 1.6 }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sticky Nav ── */}
      <nav
        aria-label="카테고리 바로가기"
        style={{
          background: "rgba(247,244,240,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #EDE0C8",
          padding: "10px 16px",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div className="overflow-hidden">
          <div className="marquee-track flex" style={{ width: "max-content" }}>
            {[...categories, ...categories, ...categories, ...categories].map((cat, i) => (
              <a
                key={`${cat.id}-${i}`}
                href={`#cat-${cat.id}`}
                className="nav-pill flex items-center gap-1.5 text-xs font-bold rounded-full px-4 py-2 whitespace-nowrap shrink-0"
                style={{
                  background: cat.bgColor,
                  color: cat.color,
                  border: `1px solid ${cat.borderColor}`,
                  textDecoration: "none",
                  marginRight: 12,
                }}
              >
                <cat.Icon color={cat.color} />
                <span>{cat.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main id="apps" className="px-4 sm:px-6 py-10 sm:py-14" style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ── 어디서 시작할까요? ── */}
        <section aria-labelledby="start-heading" className="mb-16">
          <h2
            id="start-heading"
            className="font-black mb-2"
            style={{ fontSize: "1.2rem", color: "#2D2620", letterSpacing: "-0.02em" }}
          >
            어디서 시작할까요?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#7B6545" }}>
            아이의 현재 수준에 맞는 도구를 바로 찾아보세요
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                level: "1단계",
                label: "숫자와 색깔을 아직 몰라요",
                desc: "수 감각의 출발점. 숫자 이름·색깔 이름·눈으로 세기부터 시작해요.",
                color: "#5A9FD8",
                bg: "#EBF4FC",
                border: "#B8D8F0",
                apps: [
                  { name: "숫자 익히기", slug: "slowmath_number" },
                  { name: "세기", slug: "slowmath_dice" },
                  { name: "색깔 익히기", slug: "slowmath_color" },
                ],
              },
              {
                level: "2단계",
                label: "연필 쥐기·쓰기가 힘들어요",
                desc: "글씨 쓰기 전 꼭 필요한 손 조절 능력과 눈-손 협응을 차근차근 키워요.",
                color: "#E8924A",
                bg: "#FDF0E3",
                border: "#F0C898",
                apps: [
                  { name: "선 긋기", slug: "slowmath_linedraw" },
                  { name: "점선 따라 그리기", slug: "slowmath_dot2dot" },
                  { name: "숫자 쓰기", slug: "slowmath_numberdraw" },
                ],
              },
              {
                level: "3단계",
                label: "비교·규칙 찾기가 어려워요",
                desc: "크기 비교, 위치 언어, 반복 패턴으로 수학적 사고력의 기초를 닦아요.",
                color: "#4DB87A",
                bg: "#E6F6EE",
                border: "#90D8B0",
                apps: [
                  { name: "비교하기", slug: "slowmath_comparing" },
                  { name: "비교하기 2", slug: "slowmath_comparing2" },
                  { name: "패턴 연습", slug: "slowmath_pattern" },
                ],
              },
              {
                level: "4단계",
                label: "숫자는 알지만 더하기가 어려워요",
                desc: "수와 양을 연결하고, 합치고 나누는 경험을 통해 덧셈 개념을 쌓아요.",
                color: "#8B72C8",
                bg: "#EDE8F8",
                border: "#BBA8E8",
                apps: [
                  { name: "숫자 매칭", slug: "slowmath_matching" },
                  { name: "모으기", slug: "slowmath_combining" },
                  { name: "가르기", slug: "slowmath_splitting" },
                  { name: "한 자리 덧셈", slug: "slowmath_easy" },
                ],
              },
            ].map((step) => (
              <div
                key={step.level}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: `1.5px solid ${step.border}`,
                  boxShadow: "0 2px 12px rgba(45,38,32,0.06)",
                }}
              >
                {/* Card header */}
                <div className="px-5 py-4" style={{ background: step.bg }}>
                  <span
                    className="text-xs font-black rounded-full px-2.5 py-1 mb-2 inline-block"
                    style={{ background: step.color, color: "white" }}
                  >
                    {step.level}
                  </span>
                  <h3
                    className="font-black text-base"
                    style={{ color: "#2D2620", letterSpacing: "-0.01em" }}
                  >
                    {step.label}
                  </h3>
                </div>
                {/* Card body */}
                <div className="px-5 py-4">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#7B6545" }}>
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.apps.map((app) => (
                      <a
                        key={app.slug}
                        href={`${BASE}/${app.slug}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold rounded-full px-2.5 py-1"
                        style={{
                          fontSize: "0.7rem",
                          background: step.bg,
                          color: step.color,
                          border: `1px solid ${step.border}`,
                          textDecoration: "none",
                        }}
                      >
                        {app.name}
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden>
                          <path d="M2 5h6M5 2l3 3-3 3" stroke={step.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category sections */}
        <div className="flex flex-col gap-16">
          {categories.map((cat) => {
            const catApps = apps.filter((a) => a.category === cat.id);
            return (
              <CategorySection key={cat.id} cat={cat} catApps={catApps} />
            );
          })}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        className="px-6 py-12 sm:py-14 text-center"
        style={{
          background: "#2D2620",
          color: "#D9C9B0",
        }}
      >
        <p
          className="font-black text-2xl mb-3 tracking-tight"
          style={{ letterSpacing: "-0.03em" }}
        >
          <span style={{ color: "#5A9FD8" }}>느린</span><span style={{ color: "#E8924A" }}>아이</span>
        </p>
        <p
          className="leading-relaxed mb-6 break-keep"
          style={{ fontSize: "0.9rem", color: "#A08870" }}
        >
          발달 장애·경계선 지능·학습 장애 아동을 위한
          <br />
          간단하지만 강력한 학습 도구
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-6 pt-6 mb-4"
          style={{ borderTop: "1px solid rgba(217,201,176,0.18)" }}
        >
          <span
            className="font-semibold"
            style={{ fontSize: "0.78rem", color: "#A89070", letterSpacing: "0.04em" }}
          >
            제휴·피드백 문의
          </span>
          <a
            href="mailto:contact@everydaysummer.net"
            className="inline-flex items-center gap-1.5 font-bold rounded-full"
            style={{
              background: "rgba(245,230,200,0.12)",
              color: "#F5E6C8",
              padding: "8px 18px",
              fontSize: "0.85rem",
              textDecoration: "none",
              border: "1px solid rgba(245,230,200,0.25)",
            }}
          >
            contact@everydaysummer.net
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M8 3l5 5-5 5" stroke="#F5E6C8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <p
          className="leading-loose mt-6"
          style={{ fontSize: "0.68rem", color: "#A89070", opacity: 0.55, letterSpacing: "0.02em" }}
        >
          #느린학습자 #발달장애 #경계선지능 #특수교육 #홈스쿨링 #자폐스펙트럼
        </p>
      </footer>
    </div>
  );
}
