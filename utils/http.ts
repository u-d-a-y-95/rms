export const http = {
  get: (url: string) => fetch(url).then((res) => res.json()),
};
