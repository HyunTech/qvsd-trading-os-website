const indicatorPackUrl = "downloads/QVSD-Free-Indicator-Pack.zip";
const ninjaSignupUrl = "https://lp.ninjatrader.com/platform?irgwc=1&afsrc=1&im_ref=WPRQ8d3LLxyZWyS0AX32oTqcUkuTveyWMTZKXs0&sharedid=&irpid=6341513";
const languageStorageKey = "qvsd-language";
const supportedLanguages = ["ko", "en"];

const translations = {
  ko: {
    meta: {
      title: "QVSD Trading OS | NinjaTrader 트레이더를 위한 시장 분석 허브",
      description: "QVSD Trading OS는 NinjaTrader 트레이더를 위한 무료 인디케이터, 시장 분석 워크플로우, 커뮤니티 허브입니다.",
    },
    language: {
      selector: "언어 선택",
      options: {
        ko: "한국어",
        en: "영어",
      },
    },
    nav: {
      home: "홈",
      indicators: "인디케이터",
      community: "커뮤니티",
      roadmap: "로드맵",
    },
    actions: {
      getIndicators: "무료 인디케이터 받기",
      startNinja: "NinjaTrader 시작하기",
    },
    hero: {
      eyebrow: "NinjaTrader 8 · 무료 인디케이터 팩",
      lead: "차트를 열기 전에 시장을 먼저 정리하세요. QVSD는 NinjaTrader 트레이더를 위한 무료 인디케이터와 시장 분석 워크플로우를 하나의 흐름으로 제공합니다.",
    },
    metrics: {
      tools: "분석 도구",
      downloads: "즉시 다운로드",
      compatible: "NinjaTrader 호환",
      expansion: "Trading OS 확장",
    },
    console: {
      title: "다운로드 콘솔",
      live: "LIVE",
    },
    indicators: {
      eyebrow: "인디케이터 라이브러리",
      title: "NinjaTrader에 바로 올리는 QVSD 인디케이터 팩",
      copy: "오더플로우, 볼륨 프로파일, CVD, VWAP부터 퀀트형 리서치 도구까지. 매매 전 시장을 더 빠르게 읽기 위한 도구를 한 곳에서 확인하세요.",
    },
    detail: {
      back: "인디케이터 목록",
      previewFoot: "차트 프리뷰 · NinjaTrader 워크플로우 예시",
    },
    os: {
      eyebrow: "Trading OS 미리보기",
      title: "차트 위에 흩어진 판단을 하나의 운영체제로",
      copy: "QVSD는 단순한 지표 모음이 아닙니다. 시장 현황, 리스크 상태, 전략 아이디어, 복기까지 매매 준비 과정을 하나의 루틴으로 연결합니다.",
      cards: {
        marketPulse: "NQ, ES, BTC, DXY, Gold, Oil, US10Y, VIX를 빠르게 스캔해 오늘의 시장 압력을 파악합니다.",
        stateEngine: "달러, 금리, 지수, 변동성 흐름을 조합해 현재 시장이 공격적인지 방어적인지 정리합니다.",
        compositeScore: "Macro, Trend, Flow, News를 점수화해 매매 전 체크해야 할 방향성과 리스크를 한눈에 보여줍니다.",
        strategyLibrary: "ORB, VWAP Reversion, Event, Liquidity 전략을 조건, 차트 예시, 설치 흐름까지 이어지는 실행 루틴으로 제공합니다.",
      },
    },
    community: {
      eyebrow: "커뮤니티",
      title: "혼자 찾지 말고, QVSD 카페에서 함께 정리하세요",
      copy: "시장 브리핑, 설치 가이드, 매매 복기, 전략 피드백을 QVSD 공식 카페에서 확인하세요. 도구를 받는 것에서 끝나지 않고, 실제 매매 루틴으로 이어지게 만듭니다.",
      cards: {
        updatesTitle: "업데이트 공지",
        updatesCopy: "신규 지표 · 배포 안내 · 설치 가이드",
        briefingTitle: "데일리 브리핑",
        briefingCopy: "주요 지수 · 매크로 · 뉴스 흐름",
        feedbackTitle: "전략 피드백",
        feedbackCopy: "매매 복기 · 아이디어 · 개선 요청",
      },
      panelMeta: "공식 커뮤니티",
      panelTitle: "QVSD 공식 커뮤니티",
      panelCopy: "무료 지표 업데이트와 실전 활용 자료는 카페에서 가장 먼저 공유됩니다. QVSD 흐름을 따라가려면 공식 커뮤니티를 확인하세요.",
    },
    roadmap: {
      eyebrow: "로드맵",
      title: "무료 지표에서 Trading OS로",
      copy: "QVSD는 무료 인디케이터를 시작점으로 뉴스 대시보드, 전략 라이브러리, 저널, 자동매매 연구실까지 확장됩니다.",
    },
    footer: {
      copy: "QVSD는 NinjaTrader 트레이더가 매매 전 시장을 더 빠르게 정리하도록 돕는 분석 도구와 커뮤니티를 만듭니다.",
      library: "전체 라이브러리",
      freePack: "무료 지표 팩",
      proRoadmap: "PRO 로드맵",
      cafe: "QVSD 네이버 카페",
      community: "커뮤니티",
      risk: "NinjaTrader®는 NinjaTrader Group, LLC의 등록상표입니다. QVSD는 투자 자문, 매매 신호, 계좌 운용, 주문 집행을 제공하지 않습니다. 선물·외환·가상자산 거래에는 원금 손실 위험이 있으며 모든 거래 결정과 리스크 관리는 사용자 책임입니다.",
    },
    labels: {
      download: "다운로드",
      betaNotice: "베타 알림",
      launchNotice: "출시 알림",
      downloadIndicator: "{name} 다운로드",
      startNinja: "NinjaTrader 시작하기",
      roadmapCheck: "로드맵 확인",
    },
    aria: {
      languageSelector: "언어 선택",
      indicatorFilters: "인디케이터 필터",
      downloadZip: "{name} ZIP 다운로드",
    },
  },
  en: {
    meta: {
      title: "QVSD Trading OS | Market Analysis Hub for NinjaTrader Traders",
      description: "QVSD Trading OS is a global hub for free NinjaTrader indicators, market-analysis workflows, and trader community resources.",
    },
    language: {
      selector: "Language selector",
      options: {
        ko: "Korean",
        en: "English",
      },
    },
    nav: {
      home: "Home",
      indicators: "Indicators",
      community: "Community",
      roadmap: "Roadmap",
    },
    actions: {
      getIndicators: "Get free indicators",
      startNinja: "Start NinjaTrader",
    },
    hero: {
      eyebrow: "NinjaTrader 8 · Free Indicator Pack",
      lead: "Organize the market before you open the chart. QVSD brings free NinjaTrader indicators and market-analysis workflows into one practical trading routine.",
    },
    metrics: {
      tools: "Analysis tools",
      downloads: "Instant downloads",
      compatible: "NinjaTrader ready",
      expansion: "Trading OS expansion",
    },
    console: {
      title: "Download Console",
      live: "LIVE",
    },
    indicators: {
      eyebrow: "Indicator Library",
      title: "QVSD indicator pack ready for NinjaTrader",
      copy: "Explore order flow, volume profile, CVD, VWAP, and quant-style research tools in one place so you can read the market faster before you trade.",
    },
    detail: {
      back: "Indicator list",
      previewFoot: "Chart preview · NinjaTrader workflow example",
    },
    os: {
      eyebrow: "Trading OS Preview",
      title: "Turn scattered chart decisions into one operating system",
      copy: "QVSD is more than a collection of indicators. It connects market context, risk state, strategy ideas, and review into one repeatable pre-trade routine.",
      cards: {
        marketPulse: "Scan NQ, ES, BTC, DXY, Gold, Oil, US10Y, and VIX to understand today's market pressure quickly.",
        stateEngine: "Combine dollar, rates, index, and volatility flows to classify whether the current market is offensive or defensive.",
        compositeScore: "Score Macro, Trend, Flow, and News so direction and risk checks are visible before you trade.",
        strategyLibrary: "Build ORB, VWAP Reversion, Event, and Liquidity setups into executable routines with conditions, chart examples, and install flows.",
      },
    },
    community: {
      eyebrow: "Community",
      title: "Do not piece it together alone. Organize the market with QVSD.",
      copy: "Use the official QVSD community for market briefings, install guides, trade reviews, and strategy feedback. The goal is to turn tools into a real trading routine.",
      cards: {
        updatesTitle: "Update notices",
        updatesCopy: "New indicators · Release notes · Install guides",
        briefingTitle: "Daily briefings",
        briefingCopy: "Major indexes · Macro · News flow",
        feedbackTitle: "Strategy feedback",
        feedbackCopy: "Trade reviews · Ideas · Improvement requests",
      },
      panelMeta: "Official Community",
      panelTitle: "QVSD Official Community",
      panelCopy: "Free indicator updates and practical usage notes are shared first in the community. Follow the official channel to stay aligned with the QVSD workflow.",
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "From free indicators to a full Trading OS",
      copy: "QVSD starts with free indicators and expands into a news dashboard, strategy library, journal, and automated-trading research lab.",
    },
    footer: {
      copy: "QVSD builds analysis tools and community resources that help NinjaTrader traders organize the market faster before each session.",
      library: "Full library",
      freePack: "Free indicator pack",
      proRoadmap: "PRO roadmap",
      cafe: "QVSD Naver Cafe",
      community: "Community",
      risk: "NinjaTrader® is a registered trademark of NinjaTrader Group, LLC. QVSD does not provide investment advice, trading signals, account management, or order execution. Futures, FX, and digital asset trading involve risk of loss. All trading decisions and risk management remain the user's responsibility.",
    },
    labels: {
      download: "Download",
      betaNotice: "Beta alert",
      launchNotice: "Launch alert",
      downloadIndicator: "Download {name}",
      startNinja: "Start NinjaTrader",
      roadmapCheck: "View roadmap",
    },
    aria: {
      languageSelector: "Language selector",
      indicatorFilters: "Indicator filters",
      downloadZip: "Download {name} ZIP",
    },
  },
};

const categoryLabels = {
  ko: {
    all: "전체",
    orderFlow: "오더플로우",
    volatility: "변동성",
    statQuant: "통계·퀀트",
    machineLearning: "머신러닝",
  },
  en: {
    all: "All",
    orderFlow: "Order Flow",
    volatility: "Volatility",
    statQuant: "Stats & Quant",
    machineLearning: "Machine Learning",
  },
};

const indicatorCatalog = [
  {
    id: 1,
    name: "QVSD Order Flow Footprint",
    category: "orderFlow",
    tag: "FREE",
    file: "downloads/qvsd-order-flow-footprint.zip",
    copy: {
      ko: {
        blurb: "체결 강도와 흡수 구간을 빠르게 읽어 오더플로우 판단을 보강합니다.",
        long: "Bid·Ask 체결량을 가격대별로 분해해 공격적 매수·매도가 어디서 흡수되고 분출되는지 시각화합니다. 틱·레인지 바 위에서 임밸런스를 확인해 진입 전 체결 흐름을 더 명확하게 점검할 수 있습니다.",
        features: ["가격대별 Bid/Ask 체결량 시각화", "임밸런스 구간 하이라이트", "POC·흡수 구간 마킹", "틱·레인지 바 워크플로우 지원"],
      },
      en: {
        blurb: "Read execution strength and absorption zones faster to sharpen order-flow decisions.",
        long: "Break Bid and Ask executions down by price level to see where aggressive buying or selling is being absorbed or released. Use it on tick and range bars to review imbalances before entry.",
        features: ["Bid/Ask execution by price level", "Imbalance-zone highlights", "POC and absorption marking", "Tick and range-bar workflow support"],
      },
    },
  },
  {
    id: 2,
    name: "QVSD Volume Profile",
    category: "orderFlow",
    tag: "FREE",
    file: "downloads/qvsd-volume-profile.zip",
    copy: {
      ko: {
        blurb: "POC와 밸류에어리어를 기준으로 오늘의 핵심 가격대를 정리합니다.",
        long: "세션·기간·비저블 레인지 단위의 거래량 분포를 통해 POC와 밸류에어리어(VAH·VAL)를 확인합니다. 전일과 당일의 주요 가격대를 비교해 지지·저항 후보를 더 빠르게 정리할 수 있습니다.",
        features: ["세션·기간·비저블 레인지 프로파일", "POC·VAH·VAL 가격대 확인", "멀티 세션 비교", "핵심 레벨 체크 루틴 지원"],
      },
      en: {
        blurb: "Map today's key price zones around POC and value area.",
        long: "Review volume distribution by session, period, or visible range to identify POC, VAH, and VAL. Compare prior and current levels to organize support and resistance candidates faster.",
        features: ["Session, period, and visible-range profiles", "POC, VAH, and VAL level checks", "Multi-session comparison", "Key-level review routine support"],
      },
    },
  },
  {
    id: 3,
    name: "QVSD Cumulative Delta",
    category: "orderFlow",
    tag: "FREE",
    file: "downloads/qvsd-cumulative-delta.zip",
    copy: {
      ko: {
        blurb: "가격 움직임 뒤에 있는 매수·매도 압력의 변화를 추적합니다.",
        long: "누적 델타(CVD)를 통해 시장의 공격적 매수·매도 압력이 어느 쪽으로 기울고 있는지 확인합니다. 가격과 델타의 괴리를 함께 보며 추세 지속과 반전 가능성을 점검하는 데 활용할 수 있습니다.",
        features: ["실시간 누적 델타 라인", "가격·델타 괴리 체크", "세션 리셋 옵션", "델타 흐름 시각화"],
      },
      en: {
        blurb: "Track how buy and sell pressure shifts behind price movement.",
        long: "Use cumulative delta (CVD) to see whether aggressive buying or selling pressure is leading the market. Compare price and delta divergence to evaluate trend continuation or reversal risk.",
        features: ["Real-time cumulative delta line", "Price and delta divergence checks", "Session reset options", "Delta-flow visualization"],
      },
    },
  },
  {
    id: 4,
    name: "QVSD VWAP Bands",
    category: "volatility",
    tag: "FREE",
    file: "downloads/qvsd-vwap-bands.zip",
    copy: {
      ko: {
        blurb: "VWAP과 표준편차 밴드로 평균회귀와 추세 구간을 구분합니다.",
        long: "거래량 가중 평균가(VWAP)에 표준편차 밴드를 더해 가격이 평균으로 회귀하는 구간인지, 추세가 확장되는 구간인지 점검합니다. 세션 리셋과 앵커드 기준을 활용해 다양한 매매 루틴에 맞출 수 있습니다.",
        features: ["1·2·3σ 표준편차 밴드", "앵커드 VWAP 기준 설정", "세션·주간·월간 리셋", "밴드 터치 체크"],
      },
      en: {
        blurb: "Separate mean-reversion and trend-extension zones with VWAP deviation bands.",
        long: "Add standard-deviation bands to VWAP to assess whether price is reverting toward value or expanding into trend conditions. Session resets and anchored references support different trading routines.",
        features: ["1, 2, and 3 sigma deviation bands", "Anchored VWAP reference settings", "Session, weekly, and monthly resets", "Band-touch checks"],
      },
    },
  },
  {
    id: 5,
    name: "QVSD GARCH Volatility",
    category: "volatility",
    tag: "PRO",
    copy: {
      ko: {
        blurb: "변동성 레짐을 분류해 포지션 크기와 리스크 판단을 보조합니다.",
        long: "GARCH(1,1) 모델 기반 조건부 변동성을 활용해 현재 장세가 저·중·고 변동성 중 어디에 가까운지 분류합니다. 변동성이 커지는 구간을 미리 점검해 포지션 사이징과 리스크 관리 루틴에 참고할 수 있습니다.",
        features: ["GARCH(1,1) 조건부 변동성", "변동성 레짐 분류", "변동성 확장 구간 체크", "ATR 비교 오버레이"],
      },
      en: {
        blurb: "Classify volatility regimes to support position sizing and risk decisions.",
        long: "Use conditional volatility from a GARCH(1,1) model to classify whether the current market is closer to low, medium, or high volatility. Flag expansion zones before they affect sizing and risk routines.",
        features: ["GARCH(1,1) conditional volatility", "Volatility-regime classification", "Volatility expansion checks", "ATR comparison overlay"],
      },
    },
  },
  {
    id: 6,
    name: "QVSD Stat-Arb Signals",
    category: "statQuant",
    tag: "PRO",
    copy: {
      ko: {
        blurb: "페어 관계와 z-score를 활용해 통계적 기회를 구조화합니다.",
        long: "Engle-Granger 코인티그레이션 검정과 스프레드 z-score를 활용해 페어 트레이딩 후보를 점검합니다. 평균회귀 가능성과 보유 기간을 함께 고려해 통계차익 아이디어를 더 체계적으로 정리할 수 있습니다.",
        features: ["Engle-Granger 코인티그레이션", "z-score 밴드 체크", "스프레드 반감기 추정", "멀티 페어 스캐너"],
      },
      en: {
        blurb: "Structure statistical opportunities with pair relationships and z-scores.",
        long: "Use Engle-Granger cointegration testing and spread z-scores to evaluate pair-trading candidates. Combine mean-reversion potential and holding-period context to organize stat-arb ideas more systematically.",
        features: ["Engle-Granger cointegration", "z-score band checks", "Spread half-life estimation", "Multi-pair scanner"],
      },
    },
  },
  {
    id: 7,
    name: "QVSD Multi-Asset Correlation",
    category: "statQuant",
    tag: "PRO",
    copy: {
      ko: {
        blurb: "자산 간 상관 변화를 확인해 리스크 집중도를 점검합니다.",
        long: "지수·선물·FX 간 롤링 상관계수 행렬을 히트맵으로 확인합니다. 상관 구조가 바뀌는 구간을 보며 분산, 헤지, 리스크 집중도를 더 빠르게 판단할 수 있습니다.",
        features: ["롤링 상관계수 행렬", "상관 레짐 변화 체크", "지수·선물·FX 크로스", "커스텀 룩백 윈도우"],
      },
      en: {
        blurb: "Monitor cross-asset correlation shifts to check risk concentration.",
        long: "Review rolling correlation matrices across indexes, futures, and FX through a heatmap. Detect when correlation structure changes so diversification, hedging, and concentration risk are easier to evaluate.",
        features: ["Rolling correlation matrix", "Correlation-regime shift checks", "Index, futures, and FX cross-asset view", "Custom lookback windows"],
      },
    },
  },
  {
    id: 8,
    name: "QVSD ML Regime Cluster",
    category: "machineLearning",
    tag: "BETA",
    copy: {
      ko: {
        blurb: "시장 국면을 클러스터링해 현재 장세의 성격을 빠르게 파악합니다.",
        long: "K-means·GMM 기반 비지도 클러스터링으로 시장 레짐을 분류하고 차트 위에 시각적으로 표시합니다. 레짐별 통계와 전환 가능성을 함께 참고해 현재 시장이 어떤 국면에 가까운지 점검할 수 있습니다.",
        features: ["K-means·GMM 레짐 클러스터", "레짐별 통계 요약", "전환 가능성 점검", "차트 레짐 컬러링"],
      },
      en: {
        blurb: "Cluster market regimes to identify the current market character faster.",
        long: "Classify market regimes with unsupervised K-means and GMM clustering, then show them visually on the chart. Use regime statistics and transition context to judge what kind of market you are trading.",
        features: ["K-means and GMM regime clusters", "Regime-level statistics summary", "Transition-risk checks", "Chart regime coloring"],
      },
    },
  },
];

const tickers = [
  { sym: "ES", px: "5,412.25", chg: "+0.84%", up: true },
  { sym: "NQ", px: "19,184.5", chg: "+1.12%", up: true },
  { sym: "YM", px: "40,233", chg: "-0.21%", up: false },
  { sym: "CL", px: "78.42", chg: "+1.95%", up: true },
  { sym: "GC", px: "2,388.7", chg: "-0.34%", up: false },
  { sym: "BTC", px: "67,940", chg: "+2.41%", up: true },
  { sym: "ETH", px: "3,512", chg: "+1.08%", up: true },
  { sym: "6E", px: "1.0842", chg: "-0.12%", up: false },
  { sym: "KOSPI", px: "2,742.1", chg: "+0.56%", up: true },
  { sym: "VIX", px: "13.85", chg: "-3.20%", up: false },
];

const roadmapCatalog = [
  {
    title: "Market Profile",
    tone: "green",
    copy: {
      ko: { desc: "TPO·볼륨 프로파일로 핵심 가격대 파악", status: "개발중" },
      en: { desc: "Map key price zones with TPO and volume profile.", status: "In dev" },
    },
  },
  {
    title: "Orders Heatmap",
    tone: "green",
    copy: {
      ko: { desc: "대기주문 유동성을 히트맵으로 확인", status: "개발중" },
      en: { desc: "Track resting order liquidity with a heatmap.", status: "In dev" },
    },
  },
  {
    title: "GEX Levels",
    tone: "neutral",
    copy: {
      ko: { desc: "감마 노출 기반 주요 레벨 체크", status: "예정" },
      en: { desc: "Monitor key levels based on gamma exposure.", status: "Planned" },
    },
  },
  {
    title: "Trading Journal",
    tone: "neutral",
    copy: {
      ko: { desc: "성과와 복기를 한 화면에서 관리", status: "예정" },
      en: { desc: "Manage performance and review in one workspace.", status: "Planned" },
    },
  },
  {
    title: "News Dashboard",
    tone: "cyan",
    copy: {
      ko: { desc: "시장 뉴스와 이벤트를 매매 전 루틴으로 정리", status: "초기" },
      en: { desc: "Turn news and events into a pre-trade routine.", status: "Early" },
    },
  },
  {
    title: "Strategy Library",
    tone: "orange",
    copy: {
      ko: { desc: "ORB, VWAP, Event, Liquidity 전략 워크플로우", status: "설계" },
      en: { desc: "ORB, VWAP, Event, and Liquidity strategy workflows.", status: "Design" },
    },
  },
  {
    title: "NinjaTrader Link",
    tone: "green",
    copy: {
      ko: { desc: "가입부터 지표 다운로드까지 한 번에 연결", status: "적용" },
      en: { desc: "Connect sign-up and indicator downloads in one flow.", status: "Live" },
    },
  },
  {
    title: "Auto Trading Lab",
    tone: "neutral",
    copy: {
      ko: { desc: "자동매매 연구와 전략 테스트 환경", status: "장기" },
      en: { desc: "Research and test automated-trading strategies.", status: "Long-term" },
    },
  },
];

const state = {
  category: "all",
  language: getInitialLanguage(),
  activeIndicatorId: null,
};

const selectors = {
  tickerTrack: document.querySelector("[data-ticker-track]"),
  quickDownloads: document.querySelector("[data-quick-downloads]"),
  filterBar: document.querySelector("[data-filter-bar]"),
  indicatorGrid: document.querySelector("[data-indicator-grid]"),
  detailSection: document.querySelector("#indicator-detail"),
  closeDetail: document.querySelector("[data-close-detail]"),
  detailTag: document.querySelector("[data-detail-tag]"),
  detailTitle: document.querySelector("[data-detail-title]"),
  detailLong: document.querySelector("[data-detail-long]"),
  detailFeatures: document.querySelector("[data-detail-features]"),
  detailActions: document.querySelector("[data-detail-actions]"),
  detailTerminalTitle: document.querySelector("[data-detail-terminal-title]"),
  roadmapGrid: document.querySelector("[data-roadmap-grid]"),
  languageSwitcher: document.querySelector("[data-language-switcher]"),
  languageOptions: document.querySelectorAll("[data-language-option]"),
};

function readStoredLanguage() {
  try {
    return window.localStorage.getItem(languageStorageKey);
  } catch (error) {
    return null;
  }
}

function getInitialLanguage() {
  const stored = readStoredLanguage();
  if (supportedLanguages.includes(stored)) return stored;

  const browserLanguage = (window.navigator.language || "").toLowerCase();
  return browserLanguage.startsWith("ko") ? "ko" : "en";
}

function persistLanguage(language) {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch (error) {
    // Language switching should still work even when storage is blocked.
  }
}

function t(path) {
  const findValue = (language) =>
    path.split(".").reduce((value, key) => {
      if (!value || typeof value !== "object") return undefined;
      return value[key];
    }, translations[language]);

  const localized = findValue(state.language);
  if (typeof localized === "string") return localized;

  const fallback = findValue("ko");
  return typeof fallback === "string" ? fallback : path;
}

function format(template, values) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  );
}

function indicatorCopy(item) {
  return item.copy[state.language] || item.copy.ko;
}

function roadmapCopy(item) {
  return item.copy[state.language] || item.copy.ko;
}

function categoryName(category) {
  return categoryLabels[state.language][category] || categoryLabels.ko[category] || category;
}

function tagClass(tag) {
  if (tag === "PRO") return "tag tag--pro";
  if (tag === "BETA") return "tag tag--beta";
  return "tag";
}

function downloadLabel(item) {
  if (item.tag === "FREE") return t("labels.download");
  if (item.tag === "BETA") return t("labels.betaNotice");
  return t("labels.launchNotice");
}

function mkCandles(seed, count) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;

  const rnd = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };

  let price = 48;
  const candles = [];

  for (let i = 0; i < count; i += 1) {
    const open = price;
    const drift = (rnd() - 0.46) * 17;
    const close = Math.max(12, Math.min(88, open + drift));
    price = close;

    const hi = Math.min(96, Math.max(open, close) + rnd() * 7 + 1.5);
    const lo = Math.max(4, Math.min(open, close) - rnd() * 7 - 1.5);

    candles.push({
      up: close >= open,
      wickTop: 100 - hi,
      wickHeight: hi - lo,
      bodyTop: 100 - Math.max(open, close),
      bodyHeight: Math.max(2.5, Math.abs(close - open)),
    });
  }

  return candles;
}

function renderChart(container, seed, count) {
  if (!container) return;

  container.innerHTML = mkCandles(seed, count)
    .map((candle) => {
      const directionClass = candle.up ? "" : " is-down";
      return `
        <span class="candle${directionClass}" aria-hidden="true">
          <span class="candle__wick" style="top:${candle.wickTop.toFixed(2)}%;height:${candle.wickHeight.toFixed(2)}%"></span>
          <span class="candle__body" style="top:${candle.bodyTop.toFixed(2)}%;height:${candle.bodyHeight.toFixed(2)}%"></span>
        </span>
      `;
    })
    .join("");
}

function applyStaticTranslations() {
  document.documentElement.lang = state.language;
  document.documentElement.dataset.language = state.language;
  document.title = t("meta.title");

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", t("meta.description"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  if (selectors.languageSwitcher) {
    selectors.languageSwitcher.setAttribute("aria-label", t("aria.languageSelector"));
  }

  if (selectors.filterBar) {
    selectors.filterBar.setAttribute("aria-label", t("aria.indicatorFilters"));
  }
}

function renderLanguageSwitcher() {
  selectors.languageOptions.forEach((button) => {
    const option = button.dataset.languageOption;
    const isActive = button.dataset.languageOption === state.language;
    button.textContent = translations[state.language].language.options[option] || option.toUpperCase();
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderTicker() {
  const doubled = tickers.concat(tickers);
  selectors.tickerTrack.innerHTML = doubled
    .map(
      (ticker) => `
        <span class="ticker__item${ticker.up ? "" : " is-down"}">
          <strong>${ticker.sym}</strong>
          <span>${ticker.px}</span>
          <em>${ticker.chg}</em>
        </span>
      `,
    )
    .join("");
}

function renderQuickDownloads() {
  const freeItems = indicatorCatalog.filter((item) => item.tag === "FREE");
  selectors.quickDownloads.innerHTML = freeItems
    .map(
      (item) => `
        <div class="quick-item">
          <div>
            <strong>${item.name.replace("QVSD ", "")}</strong>
            <span>${categoryName(item.category)} · NinjaTrader 8</span>
          </div>
          <a href="${item.file}" download aria-label="${format(t("aria.downloadZip"), { name: item.name })}">↓ ZIP</a>
        </div>
      `,
    )
    .join("");
}

function renderFilters() {
  const categories = ["all", ...new Set(indicatorCatalog.map((item) => item.category))];
  selectors.filterBar.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-button${state.category === category ? " is-active" : ""}" type="button" data-category="${category}">
          ${categoryName(category)}
        </button>
      `,
    )
    .join("");

  selectors.filterBar.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderFilters();
      renderIndicators();
    });
  });
}

function renderIndicators() {
  const filtered =
    state.category === "all"
      ? indicatorCatalog
      : indicatorCatalog.filter((item) => item.category === state.category);

  selectors.indicatorGrid.innerHTML = filtered
    .map((item) => {
      const copy = indicatorCopy(item);
      return `
        <article class="indicator-card" role="button" tabindex="0" data-indicator-id="${item.id}">
          <div class="card-chart" data-card-chart="${item.id}"></div>
          <div class="indicator-card__body">
            <div class="card-meta">
              <span class="${tagClass(item.tag)}">${item.tag}</span>
              <span>${categoryName(item.category)}</span>
            </div>
            <h3>${item.name}</h3>
            <p>${copy.blurb}</p>
            <div class="indicator-card__foot">
              <span>NinjaTrader 8</span>
              <strong>${downloadLabel(item)} →</strong>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  selectors.indicatorGrid.querySelectorAll("[data-card-chart]").forEach((chart) => {
    renderChart(chart, Number(chart.dataset.cardChart) * 13 + 7, 22);
  });

  selectors.indicatorGrid.querySelectorAll("[data-indicator-id]").forEach((card) => {
    const id = Number(card.dataset.indicatorId);
    card.addEventListener("click", () => openDetail(id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDetail(id);
      }
    });
  });
}

function renderRoadmap() {
  selectors.roadmapGrid.innerHTML = roadmapCatalog
    .map((item, index) => {
      const colors = {
        green: ["#2bff9e", "rgba(43, 255, 158, 0.12)"],
        cyan: ["#5cc8ff", "rgba(92, 200, 255, 0.12)"],
        orange: ["#ff7a45", "rgba(255, 122, 69, 0.12)"],
        neutral: ["#9aa6b8", "rgba(154, 166, 184, 0.12)"],
      };
      const [color, bg] = colors[item.tone];
      const copy = roadmapCopy(item);

      return `
        <article>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p>${copy.desc}</p>
          <strong class="roadmap-status" style="color:${color};background:${bg}">${copy.status}</strong>
        </article>
      `;
    })
    .join("");
}

function renderDetailActions(item) {
  if (item.tag === "FREE") {
    selectors.detailActions.innerHTML = `
      <a class="download-link" href="${item.file}" download>
        <span aria-hidden="true">↓</span>
        ${format(t("labels.downloadIndicator"), { name: item.name })}
      </a>
      <a class="button button--secondary" href="${ninjaSignupUrl}" target="_blank" rel="noopener">
        <span aria-hidden="true">↗</span>
        ${t("labels.startNinja")}
      </a>
    `;
    return;
  }

  selectors.detailActions.innerHTML = `
    <a class="button button--primary" href="${ninjaSignupUrl}" target="_blank" rel="noopener">
      <span aria-hidden="true">↗</span>
      ${t("labels.startNinja")}
    </a>
    <a class="button button--secondary" href="#roadmap">
      <span aria-hidden="true">▦</span>
      ${t("labels.roadmapCheck")}
    </a>
  `;
}

function openDetail(id, options = {}) {
  const { scroll = true } = options;
  const item = indicatorCatalog.find((indicator) => indicator.id === id);
  if (!item) return;

  const copy = indicatorCopy(item);
  state.activeIndicatorId = id;
  selectors.detailSection.classList.remove("is-hidden");
  selectors.detailTag.className = tagClass(item.tag);
  selectors.detailTag.textContent = `${item.tag} · ${categoryName(item.category)}`;
  selectors.detailTitle.textContent = item.name;
  selectors.detailLong.textContent = copy.long;
  selectors.detailFeatures.innerHTML = copy.features.map((feature) => `<li>${feature}</li>`).join("");
  selectors.detailTerminalTitle.textContent = item.name;
  renderDetailActions(item);
  renderChart(document.querySelector('[data-chart="detail"]'), item.id * 23 + 11, 42);

  if (scroll) {
    selectors.detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function closeDetail() {
  state.activeIndicatorId = null;
  selectors.detailSection.classList.add("is-hidden");
  document.querySelector("#indicators").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderLocalizedPage() {
  applyStaticTranslations();
  renderLanguageSwitcher();
  renderQuickDownloads();
  renderFilters();
  renderIndicators();
  renderRoadmap();

  if (state.activeIndicatorId && !selectors.detailSection.classList.contains("is-hidden")) {
    openDetail(state.activeIndicatorId, { scroll: false });
  }
}

function setLanguage(language) {
  if (!supportedLanguages.includes(language) || language === state.language) return;

  state.language = language;
  persistLanguage(language);
  renderLocalizedPage();
}

function bindLanguageSwitcher() {
  selectors.languageOptions.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.languageOption);
    });
  });
}

function init() {
  bindLanguageSwitcher();
  renderTicker();
  renderLocalizedPage();
  renderChart(document.querySelector('[data-chart="hero"]'), 91, 38);
  selectors.closeDetail.addEventListener("click", closeDetail);
}

init();
