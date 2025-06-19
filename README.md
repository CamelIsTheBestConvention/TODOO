# 📱 Todoo App

React Native + Expo, supabase 기반의 할 일 관리 앱입니다.  
할 일 완료 시 경험치를 획득하고 레벨업하며, 특정 조건을 달성하면 업적 뱃지를 받는 **게이미피케이션 Todo 앱**입니다.

---

## ⚙ 앱 다운로드 링크
https://drive.google.com/file/d/16oxqnygOIWgA1SfAf1TgopsWys_ThHig/view?usp=sharing

---

## 🎥 데모

| 홈 화면 | 할 일 추가 | 뱃지 획득 | 마이페이지 |
| ------- | ---------- | ------- | ---------- |
| ![메인페이지](https://github.com/user-attachments/assets/e338f1bb-3f53-4ddc-b982-43e5e0148264) | ![todo등록](https://github.com/user-attachments/assets/43f8d010-64a6-4f3e-8598-f5428f50433f) | ![뱃지획득](https://github.com/user-attachments/assets/c30ebae3-4d0e-433a-a3bb-72a4848f30ba) | ![마이페이지](https://github.com/user-attachments/assets/5974f7b5-f3f0-4197-80f2-e67da79cf17f)

---

## ✨ 주요 기능

- 📝 **할 일 CRUD**: 투두 등록, 수정, 삭제, 완료
- 🌱 **경험치 시스템**: 투두 완료 시 5XP 획득 (하루 최대 4번 획득 가능)
- 🧠 **레벨업**: 누적 XP로 자동 레벨업 처리
- 🏅 **업적 뱃지**: 특정 조건을 달성 시 뱃지 자동 획득
  - 예: 누적 7일 출석, 투두 10회 완료
- 🌙 **매일 자정 투두 초기화**: 새로운 하루를 시작할 준비
- 🔐 **로그인 상태 기반 라우팅**: 로그인/회원가입 여부에 따라 분기

---

## 🛠 기술 스택

| 카테고리 | 기술 |
|----------|------|
| **Framework** | React Native, Expo |
| **언어** | TypeScript |
| **DB** | Supabase |
| **UI** | TailwindCSS (`nativewind`) |
| **상태 관리** | zustand |
| **라우팅** | Expo Router |
| **빌드/배포** | EAS Build (APK) |

---

## 📁 프로젝트 구조

```
.
├── app/
│   ├── (tabs)/                # 하단 탭 구조
│   │   ├── _layout.tsx
│   │   ├── index.tsx          # 홈
│   │   ├── mypage.tsx         # 마이페이지
│   │   └── setting.tsx        # 설정
│   ├── _layout.tsx            
│   ├── +not-found.tsx         # 404 핸들링
│   ├── edit.tsx               # 프로필 등록&수정
│   ├── index.tsx              # 진입점 (로그인 체크)
│   ├── login.tsx              # 로그인
│   └── signup.tsx             # 회원가입
│
├── store/
│   ├── todoStore.ts           # 투두 상태 관리 (Zustand)
│   └── useAuthStore.ts        # 로그인 상태 관리
│
├── utils/
│   ├── badgeIconMap.ts        # 뱃지별 아이콘 매핑
│   ├── findMedal.ts           # 레벨에 맞는 메달 찾기
│   ├── obtainBadge.ts         # 뱃지 획득 로직
│   └── todoFunc.ts            # 투두 기능
└── ...
```

---

## 📈 업적 뱃지 목록

| 뱃지 이름 | 조건 |
|-----------|------|
| 🥇 출석왕 I | 누적 7일 출석 시 획득(하루 1회 투두 완료 시 출석) |
| 🥇 출석왕 II | 누적 14일 출석 시 획득(하루 1회 투두 완료 시 출석) |
| 🥇 출석왕 III | 누적 21일 출석 시 획득(하루 1회 투두 완료 시 출석) |
| 🔁 노련함 I | 투두 10회 완료 시 획득 |
| 🔁 노련함 II | 투두 20회 완료 시 획득 |
| 🔁 노련함 III | 투두 30회 완료 시 획득 |

> 모든 업적은 완료 시 모달창으로 획득 UI 출력
