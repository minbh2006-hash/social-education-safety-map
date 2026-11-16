// 층별 마커 좌표(x%, y%) 및 상세 정보 데이터
const safetyMapData = {
  "8F": {
    mapImg: "./images/map_8f.png",
    items: [
      { id: "8F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "8F-01 완강기 (서측/806호 앞)", image: "./images/8f-01.jpg", location: "사회교육관 8층 서측 복도 끝 외벽", date: "2009년 1월", length: "24m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "8F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "8F-02 완강기 (동측/809호 앞)", image: "./images/8f-02.jpg", location: "사회교육관 8층 동측 복도 끝 외벽", date: "2009년 1월", length: "24m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "8F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "8F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "7F": {
    mapImg: "./images/map_7f.png",
    items: [
      { id: "7F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "7F-01 완강기 (서측/709호 앞)", image: "./images/7f-01.jpg", location: "사회교육관 7층 서측 복도 끝 외벽", date: "2009년 1월", length: "21m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "7F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "7F-02 완강기 (동측/701호 앞)", image: "./images/7f-02.jpg", location: "사회교육관 7층 동측 복도 끝 외벽", date: "2009년 1월", length: "21m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "7F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "7F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "6F": {
    mapImg: "./images/map_6f.png",
    items: [
      { id: "6F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "6F-01 완강기 (서측/609호 앞)", image: "./images/6f-01.jpg", location: "사회교육관 6층 서측 복도 끝 외벽", date: "2009년 1월", length: "18m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "6F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "6F-02 완강기 (동측/601호 앞)", image: "./images/6f-02.jpg", location: "사회교육관 6층 동측 복도 끝 외벽", date: "2009년 1월", length: "18m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "6F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "6F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "5F": {
    mapImg: "./images/map_5f.png",
    items: [
      { id: "5F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "5F-01 완강기 (서측/513호 앞)", image: "./images/5f-01.jpg", location: "사회교육관 5층 서측 복도 끝 외벽", date: "2009년 1월", length: "15m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "5F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "5F-02 완강기 (동측/501호 앞)", image: "./images/5f-02.jpg", location: "사회교육관 5층 동측 복도 끝 외벽", date: "2009년 1월", length: "15m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "5F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "5F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "4F": {
    mapImg: "./images/map_4f.png",
    items: [
      { id: "4F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "4F-01 완강기 (서측/405호 앞)", image: "./images/4f-01.jpg", location: "사회교육관 4층 서측 복도 끝 외벽", date: "2009년 1월", length: "12m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "4F-HIDE-RIGHT", type: "hide", x: 93.5, y: 34.5 },
      { id: "4F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "4F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  },
  "3F": {
    mapImg: "./images/map_3f.png",
    items: [
      { id: "3F-DESC-01", type: "descender", label: "완강기", x: 6.5, y: 34.5, title: "3F-01 완강기 (서측/304호 앞)", image: "./images/3f-01.jpg", location: "사회교육관 3층 서측 복도 끝 외벽", date: "2009년 1월", length: "9m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "3F-DESC-02", type: "descender", label: "완강기", x: 93.5, y: 34.5, title: "3F-02 완강기 (동측/301호 앞)", image: "./images/3f-02.jpg", location: "사회교육관 3층 동측 복도 끝 외벽", date: "2009년 1월", length: "9m", users: "1명", weight: "100kg", status: "정상 작동", videoUrl: "https://youtube.com/shorts/example" },
      { id: "3F-STAIR-01", type: "stairs", label: "비상계단", x: 11.5, y: 74.0 },
      { id: "3F-STAIR-02", type: "stairs", label: "비상계단", x: 54.8, y: 19.5 }
    ]
  }
};

let currentFloor = "8F";
let currentVideoUrl = "";

// 크기를 지정해서 비상탈출구 SVG 픽토그램을 생성하는 함수
function createExitIconHTML(boxSize, svgSize) {
  return `
    <div class="exit-pictogram" title="비상탈출구" style="width:${boxSize}px; height:${boxSize}px; border-radius:4px;">
      <svg viewBox="0 0 24 24" width="${svgSize}" height="${svgSize}" fill="#ffffff">
        <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z"/>
      </svg>
    </div>
  `;
}

// 층 렌더링 함수
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

      // 아래쪽 계단실(STAIR-01)은 30px로 크게, 위쪽(STAIR-02)은 16px로 유지
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

// 바텀 시트 열기
function openBottomSheet(item) {
  document.getElementById("sheet-title").textContent = item.title;
  document.getElementById("sheet-img").src = item.image;

  document.getElementById("guide-title").textContent = "🚨 비상 탈출 4단계 사용법";
  document.getElementById("guide-sub").textContent = "기기 부착 기준";
  document.getElementById("guide-grid").innerHTML = `
    <div class="step-card">1. 후크를 걸고 안전한지 확인</div>
    <div class="step-card">2. 릴을 걸리지 않게 아래로 투하</div>
    <div class="step-card">3. 가슴 벨트조임쇠를 단단히 조임</div>
    <div class="step-card">4. 벽을 향해 짚으며 안전 하강</div>
  `;

  const videoBtn = document.getElementById("video-btn");
  videoBtn.style.display = "block";
  videoBtn.textContent = "🎬 10초 완강기 사용법 시연 영상 보기";
  currentVideoUrl = item.videoUrl || "";

  document.getElementById("spec-list").innerHTML = `
    <li>📍 <strong>설치 위치:</strong> ${item.location}</li>
    <li>📅 <strong>제조년월:</strong> ${item.date}</li>
    <li>📏 <strong>로프의 길이:</strong> ${item.length}</li>
    <li>👤 <strong>최대사용자수:</strong> ${item.users}</li>
    <li>⚖️ <strong>최대사용하중:</strong> ${item.weight}</li>
    <li><strong>상태:</strong> ${item.status}</li>
  `;

  document.getElementById("bottom-sheet-overlay").classList.remove("hidden");
  document.getElementById("info-bottom-sheet").classList.remove("hidden");
}

function closeBottomSheet() {
  document.getElementById("bottom-sheet-overlay").classList.add("hidden");
  document.getElementById("info-bottom-sheet").classList.add("hidden");
}

function openVideoModal() {
  if (currentVideoUrl) window.open(currentVideoUrl, "_blank");
}

// 층 탭 클릭 이벤트
document.getElementById("floor-tabs").addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab-btn")) return;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  renderFloor(e.target.dataset.floor);
});

// 초기 8층 렌더링
renderFloor("8F");
