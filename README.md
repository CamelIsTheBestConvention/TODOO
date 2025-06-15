# 📱 Todoo App

React Native + Expo, supabase 기반의 할 일 관리 앱입니다.  
할 일 완료 시 경험치를 획득하고 레벨업하며, 특정 조건을 달성하면 업적 뱃지를 받는 **게이미피케이션 Todo 앱**입니다.

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
  - 예: 첫 할 일 완료, 누적 7일 출석, 투두 10회 완료
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
여기부터 재수정
## 📁 프로젝트 구조

```
.
├── app/                   # 라우팅 구조
│   ├── index.tsx          # 진입점 (로그인 체크)
│   ├── login.tsx
│   ├── home.tsx
│   └── profile/
├── components/            # 재사용 컴포넌트
│   ├── ExpBox.tsx
│   ├── TodoItem.tsx
│   └── BadgeModal.tsx
├── redux/                 # 상태 관리
│   ├── todoSlice.ts
│   ├── xpSlice.ts
│   └── store.ts
├── utils/
│   ├── xpCalculator.ts
│   └── badgeLogic.ts
└── ...
```

---

## 🔧 설치 및 실행 방법

### 필수 조건
- Node.js ≥ 18
- Expo CLI
- Android Emulator or Real Device

```powershell
# 프로젝트 클론
git clone https://github.com/yourname/todoo-app.git
cd todoo-app

# 의존성 설치
npm install

# 앱 실행
npx expo start
```

### APK 빌드 (EAS CLI 필요)

```powershell
eas build --platform android --profile production
```

빌드 후 `dist/*.apk`를 Android 기기에 설치하여 독립 실행 가능

---

## 🧩 문제 해결

- ❗ **문제**: EAS 빌드 후 앱 실행 시 흰 화면 발생  
  ✅ 해결: `eas.json`의 `developmentClient` 설정을 production에서 `false`로 명시

- ❗ **문제**: XP 최대치를 초과하면 경험치 바가 비정상적으로 렌더링됨  
  ✅ 해결: 남은 XP를 계산해서 다음 레벨로 carry over하도록 로직 수정

- ❗ **문제**: 자정 초기화 타이밍 문제 (현지 시간 기준으로 어긋남)  
  ✅ 해결: `dayjs().startOf('day')`를 기준으로 비교하도록 변경

---

## 📈 업적 뱃지 예시

| 뱃지 이름 | 조건 |
|-----------|------|
| 🥇 첫 투두 | 첫 투두 완료 시 자동 획득 |
| 💪 완벽한 하루 | 하루 5개 투두 완료 시 |
| 🔁 루틴의 달인 | 7일 연속 사용 시 |
| 🚀 성장의 시작 | 레벨 5 도달 시 |

> 모든 업적은 완료 시 모달로 축하 UI 출력

---

## 🙋‍♂️ 개발자

**문미새 – 웹 프론트엔드 개발자**  
React Native, Expo, TypeScript를 기반으로 모바일 UX 개선과 게이미피케이션에 관심이 많습니다.

- 🐙 GitHub: [@yourname](https://github.com/yourname)
- 📫 Email: your@email.com
- 🌐 Portfolio: https://your-portfolio.site

---

## 📌 라이선스

본 프로젝트는 MIT 라이선스를 따릅니다.
