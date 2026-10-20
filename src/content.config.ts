import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 경유지 하나의 형식
const waypoint = z.object({
  name: z.string(),              // 장소 이름
  lat: z.number(),               // 위도
  lng: z.number(),               // 경도
  type: z.enum(['start', 'via', 'rest', 'food', 'view', 'fuel', 'end']).default('via'),
  note: z.string().optional(),   // 한 줄 메모 (예: "화장실 있음, 주차 넓음")
  place: z.string().optional(),  // 장소 소개 글(places)의 파일 이름과 연결할 때
});

// 루트(투어 코스) 글의 형식
const routes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/routes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),                       // 목록에 보이는 한 줄 소개
    region: z.enum(['seoul', 'gyeonggi', 'incheon', 'gangwon', 'chungcheong', 'gyeongsang', 'jeolla', 'jeju']),
    distanceKm: z.number(),                    // 총 거리
    durationMin: z.number(),                   // 순수 주행 시간(분)
    difficulty: z.enum(['easy', 'normal', 'hard']).default('normal'),
    tags: z.array(z.string()).default([]),     // 예: ["와인딩", "강변", "당일"]
    bestSeason: z.array(z.string()).default([]), // 예: ["봄", "가을"]
    roundTrip: z.boolean().default(false),     // 출발지로 돌아오는 코스인지
    cover: z.string().optional(),              // 대표 이미지 경로 (public/ 기준)
    coverNote: z.string().optional(),          // 이미지 설명 (예: '주변 풍경: 석모대교')
    coverCredit: z.string().optional(),        // 출처·저작자·라이선스
    coverCreditUrl: z.string().optional(),     // 출처 링크
    waypoints: z.array(waypoint).min(2),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),         // true면 사이트에 안 보임
  }),
});

// 장소(휴게소·맛집·전망대 등) 소개 글의 형식
const places = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/places' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    region: z.enum(['seoul', 'gyeonggi', 'incheon', 'gangwon', 'chungcheong', 'gyeongsang', 'jeolla', 'jeju']),
    category: z.enum(['cafe', 'food', 'view', 'rest', 'fuel', 'etc']).default('etc'),
    lat: z.number(),
    lng: z.number(),
    address: z.string().optional(),
    parking: z.string().optional(),            // 바이크 주차 메모
    hours: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverNote: z.string().optional(),
    coverCredit: z.string().optional(),
    coverCreditUrl: z.string().optional(),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { routes, places };
