// 층별 마커 좌표(x%, y%) 및 현장 실측 상세 제원 데이터 (1: 근경, 2: 원경)
const DEMO_VIDEO_URL = "https://youtu.be/tkbmZBRbZyg?si=-onji5TrHhEoMDqd";

const safetyMapData = {
  "8F": {
    mapImg: "./images/map_8f.png",
    items: [
      {
        id: "8F-DESC-01",
        type: "descender",
        label: "완강기",
        x: 6.5,
        y: 34.5,
        title: "8F-01 완강기 (서측/806호 앞)",
        images: ["./images/8f-01-1.jpg", "./images/8f-01-2.jpg"],
        location: "사회교육관 8층 서측 복도 끝 외벽 (806호 앞)",
        modelNo: "완94-1-5",
        serialNo: "525",
        date: "2008년 1월",
        length: "27m",
        users: "1명",
        weight: "100kg",
        status: "정상 작동",
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: "8F-DESC-02",
        type: "descender",
        label: "완강기",
        x: 93.5,
        y: 34.5,
        title: "8F-02 완강기 (동측/809호 앞)",
        images: ["./images/8f-02-1.jpg", "./images/8f-02-2.jpg"],
        location: "사회교육관 8층 동측 복도 끝 외벽 (809호 앞)",
        modelNo: "완94-1-5",
        serialNo: "527",
        date: "2009년 1월",
        length: "27m",
        users: "1명",
        weight: "100kg",
        status: "정상 작동",
        videoUrl: DEMO_VIDEO_URL
      },
      { id: "8F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "8F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "7F": {
    mapImg: "./images/map_7f.png",
    items: [
      {
        id: "7F-DESC-01",
        type: "descender",
        label: "완강기",
        x: 6.5,
        y: 34.5,
        title: "7F-01 완강기 (서측/709호 앞)",
        images: ["./images/7f-01-1.jpg", "./images/7f-01-2.jpg"],
        location: "사회교육관 7층 서측 복도 끝 외벽 (709호 앞)",
        modelNo: "완15-1-1",
        serialNo: "164041",
        date: "2019년 11월",
        length: "21m",
        users: "1명",
        weight: "1500N, 150kg",
        status: "⚠️ 사용 불가 (사물함 적치 및 탈출 창문 개방 불가)",
        warning: "🚨 [긴급 대피 주의] 사물함과 창문 구조물로 인해 탈출구 접근 및 완강기 하강이 차단되어 있습니다. 화재 시 즉시 반대편(동측 701호 앞 완강기) 또는 중앙 비상계단을 이용하세요.",
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: "7F-DESC-02",
        type: "descender",
        label: "완강기",
        x: 93.5,
        y: 34.5,
        title: "7F-02 완강기 (동측/701호 앞)",
        images: ["./images/7f-02-1.jpg", "./images/7f-02-2.jpg"],
        location: "사회교육관 7층 동측 복도 끝 외벽 (701호 앞)",
        modelNo: "완94-1-5",
        serialNo: "498",
        date: "2008년 1월",
        length: "24m",
        users: "1명",
        weight: "100kg",
        status: "정상 작동",
        videoUrl: DEMO_VIDEO_URL
      },
      { id: "7F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "7F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "6F": {
    mapImg: "./images/map_6f.png",
    items: [
      {
        id: "6F-DESC-01",
        type: "descender",
        label: "완강기",
        x: 6.5,
        y: 34.5,
        title: "6F-01 완강기 (서측/609호 앞)",
        images: ["./images/6f-01-1.jpg", "./images/6f-01-2.jpg"],
        location: "사회교육관 6층 서측 복도 끝 외벽 (609호 앞)",
        modelNo: "완94-1-5",
        serialNo: "351",
        date: "2009년 1월",
        length: "21m",
        users: "1명",
        weight: "100kg",
        status: "정상 작동",
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: "6F-DESC-02",
        type: "descender",
        label: "완강기",
        x: 93.5,
        y: 34.5,
        title: "6F-02 완강기 (동측/601호 앞)",
        images: ["./images/6f-02-1.jpg", "./images/6f-02-2.jpg"],
        location: "사회교육관 6층 동측 복도 끝 외벽 (601호 앞)",
        modelNo: "완94-1-5",
        serialNo: "356",
        date: "2009년 1월",
        length: "21m",
        users: "1명",
        weight: "100kg",
        status: "정상 작동",
        videoUrl: DEMO_VIDEO_URL
      },
      { id: "6F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "6F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "5F": {
    mapImg: "./images/map_5f.png",
    items: [
      {
        id: "5F-DESC-01",
        type: "descender",
        label: "완강기",
        x: 6.5,
        y: 34.5,
        title: "5F-01 완강기 (서측/513호 앞)",
        images: ["./images/5f-01-1.jpg", "./images/5f-01-2.jpg"],
        location: "사회교육관 5층 서측 복도 끝 외벽 (513호 앞)",
        modelNo: "완94-1-4",
        serialNo: "10867",
        date: "2007년 10월",
        length: "18m",
        users: "1명",
        weight: "100kg",
        status: "정상 작동",
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: "5F-DESC-02",
        type: "descender",
        label: "완강기",
        x: 93.5,
        y: 34.5,
        title: "5F-02 완강기 (동측/501호 앞)",
        images: ["./images/5f-02-1.jpg", "./images/5f-02-2.jpg"],
        location: "사회교육관 5층 동측 복도 끝 외벽 (501호 앞)",
        modelNo: "완94-1-4",
        serialNo: "10868",
        date: "2007년 10월",
        length: "18m",
        users: "1명",
        weight: "100kg",
        status: "정상 작동",
        videoUrl: DEMO_VIDEO_URL
      },
      { id: "5F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "5F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "4F": {
    mapImg: "./images/map_4f.png",
    items: [
      {
        id: "4F-DESC-01",
        type: "descender",
        label: "완강기",
        x: 6.5,
        y: 34.5,
        title: "4F-01 완강기 (서측/405호 앞)",
        images: ["./images/4f-01-1.jpg", "./images/4f-01-2.jpg"],
        location: "사회교육관 4층 서측 복도 끝 외벽 (405호 앞)",
        modelNo: "완94-1-4",
        serialNo: "890",
        date: "2008년 12월",
        length: "15m",
        users: "1명",
        weight: "100kg",
        status: "정상 작동",
        videoUrl: DEMO_VIDEO_URL
      },
      { id: "4F-HIDE-RIGHT", type: "hide", x: 93.5, y: 34.5 },
      { id: "4F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "4F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "3F": {
    mapImg: "./images/map_3f.png",
    items: [
      {
        id: "3F-DESC-01",
        type: "descender",
        label: "완강기",
        x: 6.5,
        y: 34.5,
        title: "3F-01 완강기 (서측/304호 앞)",
        images: ["./images/3f-01-1.jpg", "./images/3f-01-2.jpg"],
        location: "사회교육관 3층 서측 복도 끝 외벽 (304호 앞)",
        modelNo: "완94-1-4",
        serialNo: "2547",
        date: "2008년 12월",
        length: "12m",
        users: "1명",
        weight: "100kg",
        status: "정상 작동",
        videoUrl: DEMO_VIDEO_URL
      },
      {
        id: "3F-DESC-02",
        type: "descender",
        label: "완강기",
        x: 93.5,
        y: 34.5,
        title: "3F-02 완강기 (동측/301호 앞)",
        images: ["./images/3f-02-1.jpg", "./images/3f-02-2.jpg"],
        location: "사회교육관 3층 동측 복도 끝 외벽 (301호 앞)",
        modelNo: "완94-1-4",
        serialNo: "2548",
        date: "2008년 12월",
        length: "12m",
        users: "1명",
        weight: "100kg",
        status: "⚠️ 조건부 사용 (창문 결속 장치 절단 불가 시 우회 대피 필수)",
        warning: "🚨 [긴급 대피 주의] 사물함 및 창문 잠금 결속으로 탈출 창문이 막혀 있습니다. 자를 수 있는 도구로 결속 장치를 끊고 창문을 열 수 있는 경우가 아니라면, 지체하지 말고 반대편(서측 304호 앞 완강기) 또는 중앙 비상계단을 이용하세요.",
        videoUrl: DEMO_VIDEO_URL
      },
      { id: "3F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "3F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  }
};

let currentFloor = "8F";
let currentVideoUrl = DEMO_VIDEO_URL;
let currentPhotos = [];
let currentOpenItem = null;
let isStudentVerified = false;
let verifiedStudentId = "";

// =========================================
// 재학생 학번 10자리 인증 관리
// =========================================
function updateAuthUI() {
  const badge = document.getElementById("user-mode-badge");
  const authBtn = document.getElementById("open-auth-btn");
  const lockBox = document.getElementById("student-lock-box");
  const specBox = document.getElementById("student-spec-box");

  if (isStudentVerified) {
    badge.textContent = `🎓 재학생 (${verifiedStudentId})`;
    badge.classList.remove("guest");
    badge.classList.add("student");

    authBtn.textContent = "로그아웃";
    authBtn.onclick = logoutStudent;

    if (lockBox) lockBox.classList.add("hidden");
    if (specBox) specBox.classList.remove("hidden");
  } else {
    badge.textContent = "👤 외부인 모드";
    badge.classList.remove("student");
    badge.classList.add("guest");

    authBtn.textContent = "🎓 재학생 인증";
    authBtn.onclick = openAuthModal;

    if (lockBox) lockBox.classList.remove("hidden");
    if (specBox) specBox.classList.add("hidden");
  }
}

function verifyStudentId(inputId) {
  const inputEl = document.getElementById(inputId);
  const val = (inputEl ? inputEl.value : "").trim();
  const isValid10Digits = /^\d{10}$/.test(val);

  const inlineErr = document.getElementById("inline-auth-error");
  const modalErr = document.getElementById("modal-auth-error");

  if (!isValid10Digits) {
    if (inputId === "inline-student-id" && inlineErr) inlineErr.classList.remove("hidden");
    if (inputId === "modal-student-id" && modalErr) modalErr.classList.remove("hidden");
    return;
  }

  if (inlineErr) inlineErr.classList.add("hidden");
  if (modalErr) modalErr.classList.add("hidden");

  isStudentVerified = true;
  verifiedStudentId = val;
  updateAuthUI();
  closeAuthModal();

  if (currentOpenItem) {
    renderSpecDetails(currentOpenItem);
  }
}

function logoutStudent() {
  isStudentVerified = false;
  verifiedStudentId = "";
  const inlineInput = document.getElementById("inline-student-id");
  const modalInput = document.getElementById("modal-student-id");
  if (inlineInput) inlineInput.value = "";
  if (modalInput) modalInput.value = "";
  updateAuthUI();
}

function openAuthModal() {
  document.getElementById("modal-auth-error").classList.add("hidden");
  document.getElementById("auth-modal-overlay").classList.remove("hidden");
  document.getElementById("auth-modal").classList.remove("hidden");
}

function closeAuthModal() {
  document.getElementById("auth-modal-overlay").classList.add("hidden");
  document.getElementById("auth-modal").classList.add("hidden");
}

// =========================================
// 도면 및 픽토그램 렌더링
// =========================================
function createExitIconHTML(boxSize, svgSize) {
  return `
    <div class="exit-pictogram" title="비상탈출구" style="width:${boxSize}px; height:${boxSize}px; border-radius:4px;">
      <svg viewBox="0 0 24 24" width="${svgSize}" height="${svgSize}" fill="#ffffff">
        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z"/>
      </svg>
    </div>
  `;
}

function updateMarkerFonts() {
  const container = document.getElementById("map-container");
  if (!container) return;
  const fontSize = Math.max(9.5, Math.min(16, container.offsetWidth * 0.017));
  container.querySelectorAll(".marker-descender").forEach(btn => {
    btn.style.fontSize = `${fontSize}px`;
  });
}

function renderFloor(floor) {
  const targetFloor = safetyMapData[floor] ? floor : "8F";
  currentFloor = targetFloor;

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.floor === targetFloor);
  });

  const data = safetyMapData[targetFloor];
  document.getElementById("floor-map-img").src = data.mapImg;

  const markerLayer = document.getElementById("marker-layer");
  markerLayer.innerHTML = "";

  data.items.forEach(item => {
    if (item.type === "stairs") {
      const stairEl = document.createElement("div");
      stairEl.className = "stairs-graphic";
      stairEl.style.left = `${item.x}%`;
      stairEl.style.top = `${item.y}%`;

      const isBottomStair = item.id.includes("STAIR-01");
      stairEl.innerHTML = isBottomStair
        ? createExitIconHTML(30, 24)
        : createExitIconHTML(16, 13);

      markerLayer.appendChild(stairEl);

    } else if (item.type === "descender") {
      const btn = document.createElement("button");
      btn.className = "map-marker marker-descender";
      btn.style.left = `${item.x}%`;
      btn.style.top = `${item.y}%`;
      btn.style.setProperty("width", "7.4%", "important");
      btn.style.setProperty("height", "auto", "important");
      btn.style.setProperty("aspect-ratio", "1 / 1", "important");
      btn.style.padding = "0";
      btn.style.lineHeight = "1";
      btn.style.whiteSpace = "nowrap";
      btn.textContent = item.warning ? "주의" : "완강";
      if (item.warning) {
        btn.style.backgroundColor = "#b91c1c";
        btn.style.borderColor = "#fef08a";
      }
      btn.onclick = () => openBottomSheet(item);
      markerLayer.appendChild(btn);

    } else if (item.type === "hide") {
      const patch = document.createElement("div");
      patch.className = "hide-patch";
      patch.style.position = "absolute";
      patch.style.left = `${item.x}%`;
      patch.style.top = `${item.y}%`;
      patch.style.transform = "translate(-50%, -50%)";
      patch.style.setProperty("width", "8.0%", "important");
      patch.style.setProperty("height", "auto", "important");
      patch.style.setProperty("aspect-ratio", "1 / 1", "important");
      patch.style.borderRadius = "50%";
      patch.style.background = "#eef2f6";
      patch.style.zIndex = "8";
      markerLayer.appendChild(patch);
    }
  });

  updateMarkerFonts();
}

// =========================================
// 근경 / 원경 사진 전환 및 바텀 시트 열기
// =========================================
function switchPhoto(index) {
  const imgEl = document.getElementById("active-sheet-img");
  const btn0 = document.getElementById("btn-photo-0");
  const btn1 = document.getElementById("btn-photo-1");

  if (!imgEl || !currentPhotos[index]) return;

  imgEl.style.display = "block";
  imgEl.src = currentPhotos[index];

  if (index === 0) {
    btn0.classList.add("active");
    btn1.classList.remove("active");
  } else {
    btn1.classList.add("active");
    btn0.classList.remove("active");
  }
}

function renderSpecDetails(item) {
  const isBlocked = Boolean(item.warning);
  document.getElementById("spec-list").innerHTML = `
    <li>📍 <strong>설치 위치:</strong> ${item.location}</li>
    <li>🏷️ <strong>형식번호:</strong> ${item.modelNo}</li>
    <li>🔢 <strong>제조번호:</strong> ${item.serialNo}</li>
    <li>📅 <strong>제조년월:</strong> ${item.date}</li>
    <li>📏 <strong>로프의 길이:</strong> ${item.length}</li>
    <li>👤 <strong>최대사용자수:</strong> ${item.users}</li>
    <li>⚖️ <strong>최대사용하중:</strong> ${item.weight}</li>
    <li style="${isBlocked ? 'color:#dc2626; font-weight:700;' : ''}"><strong>상태:</strong> ${item.status}</li>
  `;
}

function ensureSheetHeaderControls() {
  const titleEl = document.getElementById("sheet-title");
  if (!titleEl) return;

  titleEl.style.display = "flex";
  titleEl.style.alignItems = "center";
  titleEl.style.justifyContent = "space-between";
  titleEl.style.gap = "8px";
  titleEl.style.marginTop = "4px";

  let closeXBtn = document.getElementById("sheet-top-close-btn");
  if (!closeXBtn) {
    closeXBtn = document.createElement("button");
    closeXBtn.id = "sheet-top-close-btn";
    closeXBtn.type = "button";
    closeXBtn.textContent = "✕";
    closeXBtn.title = "닫기";
    closeXBtn.style.cssText = `
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 50%;
      background: #f1f5f9;
      color: #475569;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    `;
    closeXBtn.onclick = closeBottomSheet;
  }

  return closeXBtn;
}

function openBottomSheet(item) {
  currentOpenItem = item;
  const sheet = document.getElementById("info-bottom-sheet");
  if (sheet) {
    sheet.style.transform = "";
    sheet.style.transition = "";
  }

  const titleEl = document.getElementById("sheet-title");
  const closeXBtn = ensureSheetHeaderControls();
  titleEl.innerHTML = `<span>${item.title}</span>`;
  if (closeXBtn) titleEl.appendChild(closeXBtn);

  currentPhotos = item.images || [];

  // 0. 현장 장애물(사물함·창문 개방 불가) 경고 배너 처리
  let warnBanner = document.getElementById("hazard-warning-banner");
  if (!warnBanner) {
    warnBanner = document.createElement("div");
    warnBanner.id = "hazard-warning-banner";
    titleEl.insertAdjacentElement("afterend", warnBanner);
  }

  if (item.warning) {
    warnBanner.style.display = "block";
    warnBanner.style.backgroundColor = "#fef2f2";
    warnBanner.style.border = "1.5px solid #dc2626";
    warnBanner.style.color = "#991b1b";
    warnBanner.style.borderRadius = "10px";
    warnBanner.style.padding = "11px 13px";
    warnBanner.style.marginBottom = "12px";
    warnBanner.style.fontSize = "0.84rem";
    warnBanner.style.fontWeight = "700";
    warnBanner.style.lineHeight = "1.45";
    warnBanner.textContent = item.warning;
  } else {
    warnBanner.style.display = "none";
  }

  // 1. 근경(-1) / 원경(-2) 사진 영역 (외부인·재학생 공통)
  const imgBox = document.querySelector(".sheet-image-box");
  imgBox.innerHTML = `
    <div class="photo-toggle-bar">
      <button type="button" id="btn-photo-0" class="photo-toggle-btn active" onclick="switchPhoto(0)">🔍 근경 (기기 상세)</button>
      <button type="button" id="btn-photo-1" class="photo-toggle-btn" onclick="switchPhoto(1)">🏫 원경 (복도 위치)</button>
    </div>
    <img id="active-sheet-img" src="${currentPhotos[0] || ''}" alt="현장 사진" onerror="this.style.display='none'">
  `;

  // 2. 비상 탈출 4단계 착용/사용법 (외부인·재학생 공통)
  document.getElementById("guide-title").textContent = "🚨 비상 탈출 4단계 착용·사용법";
  document.getElementById("guide-sub").textContent = "기기 부착 기준";
  document.getElementById("guide-grid").innerHTML = `
    <div class="step-card">1. 후크를 걸고 안전한지 확인</div>
    <div class="step-card">2. 릴을 걸리지 않게 아래로 투하</div>
    <div class="step-card">3. 가슴 벨트조임쇠를 단단히 조임</div>
    <div class="step-card">4. 벽을 향해 짚으며 안전 하강</div>
  `;

  const videoBtn = document.getElementById("video-btn");
  videoBtn.style.display = "block";
  videoBtn.textContent = "🎬 33초 완강기 사용법 시연 영상 보기";
  currentVideoUrl = item.videoUrl || DEMO_VIDEO_URL;

  // 3. 재학생 인증 여부에 따라 상세 제원 표시 또는 잠금
  document.getElementById("inline-auth-error").classList.add("hidden");
  updateAuthUI();
  if (isStudentVerified) {
    renderSpecDetails(item);
  }

  document.getElementById("bottom-sheet-overlay").classList.remove("hidden");
  sheet.classList.remove("hidden");
  sheet.scrollTop = 0;
}

function closeBottomSheet() {
  currentOpenItem = null;
  const sheet = document.getElementById("info-bottom-sheet");
  document.getElementById("bottom-sheet-overlay").classList.add("hidden");
  if (sheet) {
    sheet.classList.add("hidden");
    sheet.style.transform = "";
    sheet.style.transition = "";
  }
}

// =========================================
// 바텀 시트 상단 손잡이 수직 드래그 & 탭으로 닫기 기능
// =========================================
(function initBottomSheetDragToClose() {
  const sheet = document.getElementById("info-bottom-sheet");
  const handle = document.querySelector(".sheet-drag-handle");
  if (!sheet || !handle) return;

  handle.style.cursor = "grab";
  handle.style.touchAction = "none";
  handle.style.padding = "10px 40px";
  handle.style.backgroundClip = "content-box";

  let startY = 0;
  let currentDeltaY = 0;
  let isDragging = false;
  let baseTranslateX = "0px";

  const getBaseTranslateX = () => {
    const computed = window.getComputedStyle(sheet);
    const matrix = new DOMMatrixReadOnly(computed.transform);
    return `${matrix.m41}px`;
  };

  handle.addEventListener("click", () => {
    closeBottomSheet();
  });

  const startDrag = (clientY) => {
    startY = clientY;
    currentDeltaY = 0;
    isDragging = true;
    baseTranslateX = getBaseTranslateX();
    sheet.style.transition = "none";
  };

  const moveDrag = (clientY) => {
    if (!isDragging) return;
    const delta = clientY - startY;
    if (delta > 0) {
      currentDeltaY = delta;
      sheet.style.transform = `translate(${baseTranslateX}, ${delta}px)`;
    }
  };

  const endDrag = () => {
    if (!isDragging) return;
    isDragging = false;

    if (currentDeltaY > 65) {
      sheet.style.transition = "transform 0.22s ease-out";
      sheet.style.transform = `translate(${baseTranslateX}, 100%)`;
      setTimeout(() => {
        closeBottomSheet();
      }, 200);
    } else {
      sheet.style.transition = "transform 0.22s ease-out";
      sheet.style.transform = `translate(${baseTranslateX}, 0px)`;
      setTimeout(() => {
        if (!isDragging) {
          sheet.style.transform = "";
          sheet.style.transition = "";
        }
      }, 220);
    }
  };

  handle.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) startDrag(e.touches[0].clientY);
  }, { passive: true });

  handle.addEventListener("touchmove", (e) => {
    if (isDragging && e.touches.length === 1) {
      e.preventDefault();
      moveDrag(e.touches[0].clientY);
    }
  }, { passive: false });

  handle.addEventListener("touchend", endDrag);

  handle.addEventListener("mousedown", (e) => {
    startDrag(e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (isDragging) moveDrag(e.clientY);
  });
  window.addEventListener("mouseup", () => {
    if (isDragging) endDrag();
  });
})();

function openVideoModal() {
  if (currentVideoUrl) {
    window.open(currentVideoUrl, "_blank");
  }
}

document.getElementById("floor-tabs").addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab-btn")) return;
  renderFloor(e.target.dataset.floor);
  resetZoom();
});

// =========================================
// URL 파라미터(?floor=7F 등)로 QR코드 층별 자동 진입
// =========================================
function getInitialFloorFromURL() {
  const params = new URLSearchParams(window.location.search);
  const floorParam = (params.get("floor") || "").toUpperCase();
  if (safetyMapData[floorParam]) {
    return floorParam;
  }
  return "8F";
}

// =========================================
// 모바일 핀치 줌 & 10초 무입력 시 부드러운 자동 복귀 제어
// =========================================
let currentZoom = 1.0;
const MIN_ZOOM = 1.0;
const MAX_ZOOM = 2.8;
const IDLE_RESET_DELAY = 10000; // 10초 (10,000ms)
let idleZoomTimer = null;

function clearIdleZoomTimer() {
  if (idleZoomTimer) {
    clearTimeout(idleZoomTimer);
    idleZoomTimer = null;
  }
}

function scheduleIdleZoomReset() {
  clearIdleZoomTimer();
  if (currentZoom <= 1.0) return;

  idleZoomTimer = setTimeout(() => {
    resetZoom();
  }, IDLE_RESET_DELAY);
}

function applyZoom(newZoom, smooth = true) {
  currentZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number(newZoom.toFixed(2))));
  const container = document.getElementById("map-container");
  if (!container) return;

  container.style.transition = smooth
    ? "width 0.45s cubic-bezier(0.25, 0.8, 0.25, 1)"
    : "none";
  container.style.width = `${currentZoom * 100}%`;

  container.querySelectorAll(".marker-descender").forEach(btn => {
    btn.style.transition = "none";
    btn.style.transform = "translate(-50%, -50%)";
  });
  updateMarkerFonts();

  if (currentZoom > 1.0) {
    scheduleIdleZoomReset();
  } else {
    clearIdleZoomTimer();
  }
}

function changeZoom(delta) {
  applyZoom(currentZoom + delta, true);
}

function resetZoom() {
  clearIdleZoomTimer();
  applyZoom(1.0, true);

  const wrapper = document.getElementById("zoom-wrapper");
  if (wrapper) {
    wrapper.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }
}

(function initPinchAndIdleReset() {
  const wrapper = document.getElementById("zoom-wrapper");
  if (!wrapper) return;

  let initialDistance = 0;
  let initialZoom = 1.0;

  ["scroll", "touchstart", "touchmove", "pointerdown", "wheel"].forEach(evtName => {
    wrapper.addEventListener(evtName, () => {
      if (currentZoom > 1.0) {
        scheduleIdleZoomReset();
      }
    }, { passive: true });
  });

  wrapper.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      initialDistance = Math.hypot(dx, dy);
      initialZoom = currentZoom;
    }
  }, { passive: true });

  wrapper.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2 && initialDistance > 0) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const currentDistance = Math.hypot(dx, dy);
      const ratio = currentDistance / initialDistance;
      applyZoom(initialZoom * ratio, false);
    }
  }, { passive: false });

  wrapper.addEventListener("touchend", () => {
    initialDistance = 0;
    if (currentZoom > 1.0) {
      scheduleIdleZoomReset();
    }
  });

  window.addEventListener("resize", updateMarkerFonts);
})();

// 초기 실행
updateAuthUI();
renderFloor(getInitialFloorFromURL());
