// 층별 마커 좌표(x%, y%) 및 상세 정보 데이터 (1: 근경, 2: 원경)
const DEMO_VIDEO_URL = "https://youtu.be/tkbmZBRbZyg?si=-onji5TrHhEoMDqd";

const safetyMapData = {
  "8F": {
    mapImg: "./images/map_8f.png",
    items: [
      { id: "8F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "8F-01 완강기 (서측/806호 앞)", images: ["./images/8f-01-1.jpg", "./images/8f-01-2.jpg"], location: "사회교육관 8층 서측 복도 끝 외벽", date: "2009년 1월", length: "24m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "8F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "8F-02 완강기 (동측/809호 앞)", images: ["./images/8f-02-1.jpg", "./images/8f-02-2.jpg"], location: "사회교육관 8층 동측 복도 끝 외벽", date: "2009년 1월", length: "24m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "8F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "8F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "7F": {
    mapImg: "./images/map_7f.png",
    items: [
      { id: "7F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "7F-01 완강기 (서측/709호 앞)", images: ["./images/7f-01-1.jpg", "./images/7f-01-2.jpg"], location: "사회교육관 7층 서측 복도 끝 외벽", date: "2009년 1월", length: "21m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "7F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "7F-02 완강기 (동측/701호 앞)", images: ["./images/7f-02-1.jpg", "./images/7f-02-2.jpg"], location: "사회교육관 7층 동측 복도 끝 외벽", date: "2009년 1월", length: "21m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "7F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "7F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "6F": {
    mapImg: "./images/map_6f.png",
    items: [
      { id: "6F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "6F-01 완강기 (서측/609호 앞)", images: ["./images/6f-01-1.jpg", "./images/6f-01-2.jpg"], location: "사회교육관 6층 서측 복도 끝 외벽", date: "2009년 1월", length: "18m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "6F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "6F-02 완강기 (동측/601호 앞)", images: ["./images/6f-02-1.jpg", "./images/6f-02-2.jpg"], location: "사회교육관 6층 동측 복도 끝 외벽", date: "2009년 1월", length: "18m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "6F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "6F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "5F": {
    mapImg: "./images/map_5f.png",
    items: [
      { id: "5F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "5F-01 완강기 (서측/513호 앞)", images: ["./images/5f-01-1.jpg", "./images/5f-01-2.jpg"], location: "사회교육관 5층 서측 복도 끝 외벽", date: "2009년 1월", length: "15m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "5F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "5F-02 완강기 (동측/501호 앞)", images: ["./images/5f-02-1.jpg", "./images/5f-02-2.jpg"], location: "사회교육관 5층 동측 복도 끝 외벽", date: "2009년 1월", length: "15m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "5F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "5F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "4F": {
    mapImg: "./images/map_4f.png",
    items: [
      { id: "4F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "4F-01 완강기 (서측/405호 앞)", images: ["./images/4f-01-1.jpg", "./images/4f-01-2.jpg"], location: "사회교육관 4층 서측 복도 끝 외벽", date: "2009년 1월", length: "12m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "4F-HIDE-RIGHT", type: "hide", x: 93.5, y: 34.5 },
      { id: "4F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "4F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "3F": {
    mapImg: "./images/map_3f.png",
    items: [
      { id: "3F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "3F-01 완강기 (서측/304호 앞)", images: ["./images/3f-01-1.jpg", "./images/3f-01-2.jpg"], location: "사회교육관 3층 서측 복도 끝 외벽", date: "2009년 1월", length: "9m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
      { id: "3F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "3F-02 완강기 (동측/301호 앞)", images: ["./images/3f-02-1.jpg", "./images/3f-02-2.jpg"], location: "사회교육관 3층 동측 복도 끝 외벽", date: "2009년 1월", length: "9m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: DEMO_VIDEO_URL },
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

function renderFloor(floor) {
  currentFloor = floor;
  const data = safetyMapData[floor];
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
      btn.style.width = "56px";
      btn.style.height = "56px";
      btn.style.fontSize = "0.9rem";
      btn.textContent = "완강";
      btn.onclick = () => openBottomSheet(item);
      markerLayer.appendChild(btn);

    } else if (item.type === "hide") {
      const patch = document.createElement("div");
      patch.style.position = "absolute";
      patch.style.left = `${item.x}%`;
      patch.style.top = `${item.y}%`;
      patch.style.transform = "translate(-50%, -50%)";
      patch.style.width = "60px";
      patch.style.height = "60px";
      patch.style.borderRadius = "50%";
      patch.style.background = "#eef2f6";
      patch.style.zIndex = "8";
      markerLayer.appendChild(patch);
    }
  });
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
  document.getElementById("spec-list").innerHTML = `
    <li>📍 <strong>설치 위치:</strong> ${item.location}</li>
    <li>📅 <strong>제조년월:</strong> ${item.date}</li>
    <li>📏 <strong>로프의 길이:</strong> ${item.length}</li>
    <li>👤 <strong>최대사용자수:</strong> ${item.users}</li>
    <li>⚖️ <strong>최대사용하중:</strong> ${item.weight}</li>
    <li><strong>상태:</strong> ${item.status}</li>
  `;
}

function openBottomSheet(item) {
  currentOpenItem = item;
  document.getElementById("sheet-title").textContent = item.title;
  currentPhotos = item.images || [];

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
  document.getElementById("info-bottom-sheet").classList.remove("hidden");
}

function closeBottomSheet() {
  currentOpenItem = null;
  document.getElementById("bottom-sheet-overlay").classList.add("hidden");
  document.getElementById("info-bottom-sheet").classList.add("hidden");
}

function openVideoModal() {
  if (currentVideoUrl) {
    window.open(currentVideoUrl, "_blank");
  }
}

document.getElementById("floor-tabs").addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab-btn")) return;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  renderFloor(e.target.dataset.floor);
});

updateAuthUI();
renderFloor("8F");
