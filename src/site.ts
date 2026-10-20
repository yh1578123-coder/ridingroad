// 사이트 전체에서 쓰는 기본 정보. 이름을 바꾸고 싶으면 여기만 수정하면 됩니다.
export const SITE = {
  name: '라이딩로드',
  nameEn: 'RidingRoad',
  tagline: '직접 달려보고 고른 바이크 투어 코스',
  description:
    '수도권·강원 바이크 투어 루트와 장소를 지도와 함께 소개합니다. 경유지, 거리, 소요시간, 휴게 포인트까지 한눈에.',
  // 광고 코드가 들어갈 자리. AdSense 승인 후 값을 채웁니다 (5단계).
  adsenseClient: '', // 예: 'ca-pub-1234567890123456'
};

export const REGIONS: Record<string, string> = {
  gyeonggi: '경기',
  gangwon: '강원',
  seoul: '서울',
  incheon: '인천·강화',
  chungcheong: '충청',
  gyeongsang: '경상',
  jeolla: '전라',
  jeju: '제주',
};

export const DIFFICULTY: Record<string, { label: string; desc: string }> = {
  easy: { label: '쉬움', desc: '초보·탠덤도 부담 없는 완만한 길' },
  normal: { label: '보통', desc: '코너와 고개가 섞인 일반적인 투어 코스' },
  hard: { label: '어려움', desc: '급커브·급경사·긴 거리, 경험자 추천' },
};

export const WAYPOINT_TYPES: Record<string, { label: string; icon: string }> = {
  start: { label: '출발', icon: '🏁' },
  via: { label: '경유', icon: '📍' },
  rest: { label: '휴게', icon: '☕' },
  food: { label: '식사', icon: '🍜' },
  view: { label: '전망', icon: '🏞️' },
  fuel: { label: '주유', icon: '⛽' },
  end: { label: '도착', icon: '🎯' },
};
