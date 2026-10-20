# 라이딩로드 (RidingRoad)

직접 달려보고 고른 바이크 투어 코스를 지도와 함께 소개하는 사이트입니다.
Astro(정적 사이트 생성기) + Leaflet(OpenStreetMap 지도)로 만들어졌습니다.

## 폴더 구조 — 어디를 건드리면 되나

```
src/content/routes/   ← 루트(투어 코스) 글. 파일 하나 = 페이지 하나
src/content/places/   ← 장소(휴게소·전망대·맛집) 글
src/site.ts           ← 사이트 이름, 설명, 광고 코드
public/images/        ← 사진을 넣는 곳
```

그 외 `src/` 안의 파일은 디자인과 동작을 담당합니다. 콘텐츠를 추가할 때는 건드릴 필요가 없습니다.

## 루트 추가하는 법

`src/content/routes/` 안에 `영문-이름.md` 파일을 만들고 아래 형식으로 씁니다.
파일 이름이 그대로 주소가 됩니다 (예: `seoraksan-loop.md` → `/routes/seoraksan-loop/`).

```md
---
title: "코스 제목"
summary: "목록에 보이는 한 줄 소개"
region: gangwon            # seoul, gyeonggi, gangwon, chungcheong, gyeongsang, jeolla, jeju 중 하나
distanceKm: 64             # 총 거리
durationMin: 120           # 순수 주행 시간(분)
difficulty: normal         # easy / normal / hard
tags: ["와인딩", "당일"]
bestSeason: ["봄", "가을"]
roundTrip: false           # 출발지로 돌아오는 순환 코스면 true
cover: /images/파일명.jpg  # (선택) 대표 사진. public/images/ 에 넣고 경로 적기
publishedAt: 2026-10-20
waypoints:                 # 경유지. 순서대로 지도에 그려집니다. 최소 2개
  - name: "출발지 이름"
    lat: 37.5215           # 위도
    lng: 127.2960          # 경도
    type: start            # start / via / rest / food / view / fuel / end
    note: "한 줄 메모"
  - name: "도착지 이름"
    lat: 37.8225
    lng: 127.5185
    type: end
    place: jaraseom        # (선택) places 폴더의 파일 이름과 연결하면 링크가 생김
---

## 본문

여기부터는 자유롭게 씁니다. `## 제목`, `- 목록`, `**굵게**` 같은 마크다운 문법을 쓸 수 있습니다.
```

### 좌표(lat, lng) 구하는 법

구글 지도에서 원하는 지점을 **마우스 오른쪽 클릭**하면 맨 위에 `37.53241, 127.31062` 같은 숫자가 나옵니다.
앞이 lat(위도), 뒤가 lng(경도)입니다. 클릭하면 복사됩니다.

### 아직 공개하고 싶지 않을 때

맨 위 설정에 `draft: true` 한 줄을 추가하면 사이트에 보이지 않습니다.

## 장소 추가하는 법

`src/content/places/` 안에 같은 방식으로 파일을 만듭니다. 형식은 기존 파일(`dumulmeori.md` 등)을 복사해서 고치는 게 가장 빠릅니다.

## 내 컴퓨터에서 미리 보기 (선택)

Node.js(https://nodejs.org, LTS 버전)를 설치한 뒤, 이 폴더에서 터미널을 열고:

```
npm install      # 처음 한 번만
npm run dev      # 그 다음 http://localhost:4321 접속
```

파일을 저장하면 브라우저가 자동으로 새로고침됩니다.
Vercel에 연결해 두면 이 과정 없이 GitHub에 파일만 올려도 사이트가 갱신되므로, 필수는 아닙니다.

## 광고 넣기 (AdSense 승인 후)

1. `src/site.ts`의 `adsenseClient`에 `ca-pub-…` 값을 넣습니다.
2. 광고 자리는 `AdSlot` 컴포넌트가 이미 홈·목록·상세 페이지에 들어가 있습니다. 승인 후 slot 번호를 받으면 알려주세요. 그때 채워 넣겠습니다.

## 배포 주소 바꾸기

`astro.config.mjs`의 `site` 값과 `public/robots.txt`의 Sitemap 주소를 실제 도메인으로 바꿉니다.

## 샘플 데이터 안내

현재 들어있는 루트 3개와 장소 4개는 **형식을 보여주기 위한 샘플**입니다.
좌표는 대략적인 값이고 본문도 일반적인 정보로 작성했으니, 실제 주행 경험으로 보정한 뒤 공개하세요.
