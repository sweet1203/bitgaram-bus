# 빛가람동 중흥 실시간 버스

나주시 **빛가람동·중흥·이노시티** 인근 정류장의 **실시간 버스 도착 정보**를 보여 주는 웹 앱입니다.  
Google Apps Script로 호스팅되며, **나주시 버스정보(BIS) 오픈 API**를 사용합니다.

## 🚌 서비스 URL (배포)

**https://script.google.com/macros/s/AKfycby89srVE5OayesHyj4tmvRR3LsQyFIlTM2-RCruIV7cEBv-eMXHFR6h82p5x03oSSDb3A/exec**

## 주요 기능

- 정류장 선택 (드롭다운 6곳)
- 노선명·방향·도착 예상 **분**·**N번째 전** 표시
- **1분마다** 자동 갱신
- 모바일 친화 UI

## 지원 정류장 (BUSSTOP_ID)

| ID | 정류장 |
|----|--------|
| 1851 | 이노시티애시앙 (정문) |
| 1852 | 이노시티애시앙 (건너) |
| 1847 | 중흥1차 (정문) |
| 1844 | 중흥1차 (건너) |
| 2126 | 중흥2차 (정문) |
| 2127 | 중흥2차 (건너) |

## 기술 구성

| 구분 | 설명 |
|------|------|
| 프론트 | `apps-script/index.html` — HtmlService |
| 백엔드 | `apps-script/Code.gs` — `getBusData()`, `doGet()` |
| 데이터 | 나주 BIS `arriveApi` (JSON) |

API 예시:

```
http://121.147.206.212/json/arriveApi?BUSSTOP_ID=1851
```

## 저장소 구조

```
bitgaram-bus/
├── README.md
├── apps-script/
│   ├── Code.gs      # 서버 (Apps Script 편집기에 붙여넣기)
│   └── index.html   # 클라이언트 UI
└── client/
    └── index.html   # 동일 UI (Git 참고용, 단독 실행 불가)
```

## Apps Script 재배포

1. [script.google.com](https://script.google.com) → 프로젝트 열기
2. `Code.gs`, `index.html` 내용을 이 저장소와 동기화
3. **배포** → **새 배포** → 유형: **웹 앱** → 실행: 나 / 액세스: **모든 사용자**

## 데이터 출처

- [나주시 버스정보시스템(BIS)](https://bis.naju.go.kr/)

## 라이선스

개인·교육용 프로젝트. 버스 데이터는 나주시 BIS 정책을 따릅니다.
