const indicatorPackUrl = "downloads/QVSD-Free-Indicator-Pack.zip";
const ninjaSignupUrl = "https://lp.ninjatrader.com/platform?irgwc=1&afsrc=1&im_ref=WPRQ8d3LLxyZWyS0AX32oTqcUkuTveyWMTZKXs0&sharedid=&irpid=6341513";

const indicators = [
  {
    id: 1,
    name: "QVSD Order Flow Footprint",
    category: "오더플로우",
    tag: "FREE",
    blurb: "체결 강도와 흡수 구간을 빠르게 읽어 오더플로우 판단을 보강합니다.",
    long: "Bid·Ask 체결량을 가격대별로 분해해 공격적 매수·매도가 어디서 흡수되고 분출되는지 시각화합니다. 틱·레인지 바 위에서 임밸런스를 확인해 진입 전 체결 흐름을 더 명확하게 점검할 수 있습니다.",
    features: ["가격대별 Bid/Ask 체결량 시각화", "임밸런스 구간 하이라이트", "POC·흡수 구간 마킹", "틱·레인지 바 워크플로우 지원"],
    file: "downloads/qvsd-order-flow-footprint.zip",
  },
  {
    id: 2,
    name: "QVSD Volume Profile",
    category: "오더플로우",
    tag: "FREE",
    blurb: "POC와 밸류에어리어를 기준으로 오늘의 핵심 가격대를 정리합니다.",
    long: "세션·기간·비저블 레인지 단위의 거래량 분포를 통해 POC와 밸류에어리어(VAH·VAL)를 확인합니다. 전일과 당일의 주요 가격대를 비교해 지지·저항 후보를 더 빠르게 정리할 수 있습니다.",
    features: ["세션·기간·비저블 레인지 프로파일", "POC·VAH·VAL 가격대 확인", "멀티 세션 비교", "핵심 레벨 체크 루틴 지원"],
    file: "downloads/qvsd-volume-profile.zip",
  },
  {
    id: 3,
    name: "QVSD Cumulative Delta",
    category: "오더플로우",
    tag: "FREE",
    blurb: "가격 움직임 뒤에 있는 매수·매도 압력의 변화를 추적합니다.",
    long: "누적 델타(CVD)를 통해 시장의 공격적 매수·매도 압력이 어느 쪽으로 기울고 있는지 확인합니다. 가격과 델타의 괴리를 함께 보며 추세 지속과 반전 가능성을 점검하는 데 활용할 수 있습니다.",
    features: ["실시간 누적 델타 라인", "가격·델타 괴리 체크", "세션 리셋 옵션", "델타 흐름 시각화"],
    file: "downloads/qvsd-cumulative-delta.zip",
  },
  {
    id: 4,
    name: "QVSD VWAP Bands",
    category: "변동성",
    tag: "FREE",
    blurb: "VWAP과 표준편차 밴드로 평균회귀와 추세 구간을 구분합니다.",
    long: "거래량 가중 평균가(VWAP)에 표준편차 밴드를 더해 가격이 평균으로 회귀하는 구간인지, 추세가 확장되는 구간인지 점검합니다. 세션 리셋과 앵커드 기준을 활용해 다양한 매매 루틴에 맞출 수 있습니다.",
    features: ["1·2·3σ 표준편차 밴드", "앵커드 VWAP 기준 설정", "세션·주간·월간 리셋", "밴드 터치 체크"],
    file: "downloads/qvsd-vwap-bands.zip",
  },
  {
    id: 5,
    name: "QVSD GARCH Volatility",
    category: "변동성",
    tag: "PRO",
    blurb: "변동성 레짐을 분류해 포지션 크기와 리스크 판단을 보조합니다.",
    long: "GARCH(1,1) 모델 기반 조건부 변동성을 활용해 현재 장세가 저·중·고 변동성 중 어디에 가까운지 분류합니다. 변동성이 커지는 구간을 미리 점검해 포지션 사이징과 리스크 관리 루틴에 참고할 수 있습니다.",
    features: ["GARCH(1,1) 조건부 변동성", "변동성 레짐 분류", "변동성 확장 구간 체크", "ATR 비교 오버레이"],
  },
  {
    id: 6,
    name: "QVSD Stat-Arb Signals",
    category: "통계·퀀트",
    tag: "PRO",
    blurb: "페어 관계와 z-score를 활용해 통계적 기회를 구조화합니다.",
    long: "Engle-Granger 코인티그레이션 검정과 스프레드 z-score를 활용해 페어 트레이딩 후보를 점검합니다. 평균회귀 가능성과 보유 기간을 함께 고려해 통계차익 아이디어를 더 체계적으로 정리할 수 있습니다.",
    features: ["Engle-Granger 코인티그레이션", "z-score 밴드 체크", "스프레드 반감기 추정", "멀티 페어 스캐너"],
  },
  {
    id: 7,
    name: "QVSD Multi-Asset Correlation",
    category: "통계·퀀트",
    tag: "PRO",
    blurb: "자산 간 상관 변화를 확인해 리스크 집중도를 점검합니다.",
    long: "지수·선물·FX 간 롤링 상관계수 행렬을 히트맵으로 확인합니다. 상관 구조가 바뀌는 구간을 보며 분산, 헤지, 리스크 집중도를 더 빠르게 판단할 수 있습니다.",
    features: ["롤링 상관계수 행렬", "상관 레짐 변화 체크", "지수·선물·FX 크로스", "커스텀 룩백 윈도우"],
  },
  {
    id: 8,
    name: "QVSD ML Regime Cluster",
    category: "머신러닝",
    tag: "BETA",
    blurb: "시장 국면을 클러스터링해 현재 장세의 성격을 빠르게 파악합니다.",
    long: "K-means·GMM 기반 비지도 클러스터링으로 시장 레짐을 분류하고 차트 위에 시각적으로 표시합니다. 레짐별 통계와 전환 가능성을 함께 참고해 현재 시장이 어떤 국면에 가까운지 점검할 수 있습니다.",
    features: ["K-means·GMM 레짐 클러스터", "레짐별 통계 요약", "전환 가능성 점검", "차트 레짐 컬러링"],
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

const roadmap = [
  { title: "Market Profile", desc: "TPO·볼륨 프로파일로 핵심 가격대 파악", status: "개발중", tone: "green" },
  { title: "Orders Heatmap", desc: "대기주문 유동성을 히트맵으로 확인", status: "개발중", tone: "green" },
  { title: "GEX Levels", desc: "감마 노출 기반 주요 레벨 체크", status: "예정", tone: "neutral" },
  { title: "Trading Journal", desc: "성과와 복기를 한 화면에서 관리", status: "예정", tone: "neutral" },
  { title: "News Dashboard", desc: "시장 뉴스와 이벤트를 매매 전 루틴으로 정리", status: "초기", tone: "cyan" },
  { title: "Strategy Library", desc: "ORB, VWAP, Event, Liquidity 전략 워크플로우", status: "설계", tone: "orange" },
  { title: "NinjaTrader Link", desc: "가입부터 지표 다운로드까지 한 번에 연결", status: "적용", tone: "green" },
  { title: "Auto Trading Lab", desc: "자동매매 연구와 전략 테스트 환경", status: "장기", tone: "neutral" },
];

const state = {
  category: "전체",
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
};

function tagClass(tag) {
  if (tag === "PRO") return "tag tag--pro";
  if (tag === "BETA") return "tag tag--beta";
  return "tag";
}

function downloadLabel(item) {
  if (item.tag === "FREE") return "다운로드";
  if (item.tag === "BETA") return "베타 알림";
  return "출시 알림";
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
  const freeItems = indicators.filter((item) => item.tag === "FREE");
  selectors.quickDownloads.innerHTML = freeItems
    .map(
      (item) => `
        <div class="quick-item">
          <div>
            <strong>${item.name.replace("QVSD ", "")}</strong>
            <span>${item.category} · NinjaTrader 8</span>
          </div>
          <a href="${item.file}" download aria-label="${item.name} 다운로드">↓ ZIP</a>
        </div>
      `,
    )
    .join("");
}

function renderFilters() {
  const categories = ["전체", ...new Set(indicators.map((item) => item.category))];
  selectors.filterBar.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-button${state.category === category ? " is-active" : ""}" type="button" data-category="${category}">
          ${category}
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
    state.category === "전체"
      ? indicators
      : indicators.filter((item) => item.category === state.category);

  selectors.indicatorGrid.innerHTML = filtered
    .map(
      (item) => `
        <article class="indicator-card" role="button" tabindex="0" data-indicator-id="${item.id}">
          <div class="card-chart" data-card-chart="${item.id}"></div>
          <div class="indicator-card__body">
            <div class="card-meta">
              <span class="${tagClass(item.tag)}">${item.tag}</span>
              <span>${item.category}</span>
            </div>
            <h3>${item.name}</h3>
            <p>${item.blurb}</p>
            <div class="indicator-card__foot">
              <span>NinjaTrader 8</span>
              <strong>${downloadLabel(item)} →</strong>
            </div>
          </div>
        </article>
      `,
    )
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
  selectors.roadmapGrid.innerHTML = roadmap
    .map((item, index) => {
      const colors = {
        green: ["#2bff9e", "rgba(43, 255, 158, 0.12)"],
        cyan: ["#5cc8ff", "rgba(92, 200, 255, 0.12)"],
        orange: ["#ff7a45", "rgba(255, 122, 69, 0.12)"],
        neutral: ["#9aa6b8", "rgba(154, 166, 184, 0.12)"],
      };
      const [color, bg] = colors[item.tone];

      return `
        <article>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <strong class="roadmap-status" style="color:${color};background:${bg}">${item.status}</strong>
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
        ${item.name} 다운로드
      </a>
      <a class="button button--secondary" href="${ninjaSignupUrl}" target="_blank" rel="noopener">
        <span aria-hidden="true">↗</span>
        NinjaTrader 시작하기
      </a>
    `;
    return;
  }

  selectors.detailActions.innerHTML = `
    <a class="button button--primary" href="${ninjaSignupUrl}" target="_blank" rel="noopener">
      <span aria-hidden="true">↗</span>
      NinjaTrader 시작하기
    </a>
    <a class="button button--secondary" href="#roadmap">
      <span aria-hidden="true">▦</span>
      로드맵 확인
    </a>
  `;
}

function openDetail(id) {
  const item = indicators.find((indicator) => indicator.id === id);
  if (!item) return;

  selectors.detailSection.classList.remove("is-hidden");
  selectors.detailTag.className = tagClass(item.tag);
  selectors.detailTag.textContent = `${item.tag} · ${item.category}`;
  selectors.detailTitle.textContent = item.name;
  selectors.detailLong.textContent = item.long;
  selectors.detailFeatures.innerHTML = item.features.map((feature) => `<li>${feature}</li>`).join("");
  selectors.detailTerminalTitle.textContent = item.name;
  renderDetailActions(item);
  renderChart(document.querySelector('[data-chart="detail"]'), item.id * 23 + 11, 42);
  selectors.detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeDetail() {
  selectors.detailSection.classList.add("is-hidden");
  document.querySelector("#indicators").scrollIntoView({ behavior: "smooth", block: "start" });
}

function init() {
  renderTicker();
  renderQuickDownloads();
  renderFilters();
  renderIndicators();
  renderRoadmap();
  renderChart(document.querySelector('[data-chart="hero"]'), 91, 38);
  selectors.closeDetail.addEventListener("click", closeDetail);
}

init();
