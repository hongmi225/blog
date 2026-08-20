/*
  ============================================
  firebase-config.js — Firebase 프로젝트 연결 정보
  ============================================
  아래 값들을 Firebase 콘솔에서 발급받은 본인 값으로 바꿔주세요.
  (Firebase 콘솔 > 프로젝트 설정 > 내 앱 > SDK 설정 및 구성 에서 확인)

  ⚠️ 참고: 이 apiKey는 Gemini API 키 같은 '비밀 키'가 아니라 공개되어도
  괜찮은 값입니다. 실제 보안은 Firebase 콘솔의 Firestore 보안 규칙에서
  걸어줍니다 (아래 안내 참고). 그래도 프로젝트 자체는 본인 것만 쓰세요.

  📌 Firestore 규칙에 likes, comments, views 외에 siteStats 컬렉션도
  추가해야 방문자 수(오늘/누적)가 정상 작동합니다:
    match /siteStats/{docId} {
      allow read: if true;
      allow write: if request.resource.data.count is int
                   && request.resource.data.count >= 0;
    }
  ============================================
*/

const firebaseConfig = {
  apiKey: "AIzaSyDP5ohWDeTJW86zpkbEqXhuNDftczVT0Bs",
  authDomain: "blog-8845f.firebaseapp.com",
  projectId: "blog-8845f",
  storageBucket: "blog-8845f.firebasestorage.app",
  messagingSenderId: "686339229220",
  appId: "1:686339229220:web:3122a15b3b1b02043dfab1"
};
