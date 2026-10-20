// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 사이트 주소. 2단계(배포)에서 실제 주소로 바꿉니다.
export default defineConfig({
  site: 'https://ridingroad.vercel.app',
  integrations: [sitemap()],
});
