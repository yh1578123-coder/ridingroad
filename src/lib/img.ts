/** 이미지 URL에 크기 파라미터를 붙입니다. Unsplash·위키미디어는 리사이즈 URL로, 그 외는 그대로. */
const WM_STEPS = [330, 500, 960, 1280, 1920];
export function img(url: string | undefined, w = 1200, q = 78): string | undefined {
  if (!url) return undefined;
  if (url.includes('images.unsplash.com')) return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
  if (/wikimedia\.org\/.*\/thumb\//.test(url)) {
    const step = WM_STEPS.find((s) => s >= w) ?? 1920;
    return url.replace(/\/\d+px-/, `/${step}px-`);
  }
  return url;
}
