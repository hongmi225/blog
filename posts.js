/*
  ============================================
  posts.js — 여기에 글을 추가하세요
  ============================================

  ✏️ 새 글 추가하는 법
  1. 아래 CATEGORIES 배열에 원하는 카테고리가 있는지 확인 (없으면 추가)
  2. POSTS 배열 맨 위에 { ... } 형태로 새 객체를 하나 추가 (콤마(,) 잊지 마세요)
  3. id는 영문/숫자/하이픈으로 겹치지 않게 (예: 'newsletter-tip-01')
  4. content는 HTML로 씁니다. 쓸 수 있는 태그: <p>, <h3>, <ul><li>, <strong>, <a>, <img>, <blockquote>
  5. 저장 후 GitHub에 올리면 바로 반영됩니다 (별도 빌드 필요 없음)

  🗑️ 예시 글(id: 'example-post')은 실제 글을 쓰기 시작하면 지워도 됩니다.
  ============================================
*/

const CATEGORIES = [
  { id: 'newsletter', name: '뉴스레터' },
  { id: 'sns-video', name: 'SNS·유튜브' },
  { id: 'photo-video', name: '사진·영상' },
  { id: 'privacy-ethics', name: '개인정보·윤리' },
  { id: 'ai-tools', name: 'AI·도구 활용' },
  { id: 'crisis', name: '위기관리' },
  { id: 'planning', name: '기획 노하우' },
];

const POSTS = [
  {
    id: 'example-post',
    title: '(예시) 이 글은 삭제해도 됩니다 — 글쓰기 형식 참고용',
    category: 'planning',
    date: '2026-08-14',
    excerpt: '새 글을 쓸 때 이 객체를 복사해서 쓰세요. content 안에는 HTML 태그를 사용할 수 있습니다.',
    content: `
      <p>이 글은 <strong>글 작성 형식을 보여주는 예시</strong>입니다. posts.js 맨 위에 이런 형태로 객체를 추가하면 새 글이 목록에 나타납니다.</p>
      <h3>소제목은 이렇게</h3>
      <ul>
        <li>목록 항목 1</li>
        <li>목록 항목 2</li>
      </ul>
      <blockquote>인용이나 강조하고 싶은 문장은 이렇게 넣을 수 있어요.</blockquote>
      <p>이미지는 <code>&lt;img src="..." /&gt;</code> 태그로 넣을 수 있습니다.</p>
    `,
  },
];
