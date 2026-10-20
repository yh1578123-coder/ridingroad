/** 이미지 URL에 크기·품질 파라미터를 붙입니다. Unsplash 링크면 리사이즈 파라미터, 아니면 그대로. */
export function img(url: string | undefined, w = 1200, q = 78): string | undefined {
  if (!url) return undefined;
  if (url.includes('images.unsplash.com')) return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
  return url;
}
