export const http = {
  get: (url: string) => fetch(url).then((res) => res.json()),
  post: (url: string, body: any) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body), // body data type must match "Content-Type" header
    }),
};
