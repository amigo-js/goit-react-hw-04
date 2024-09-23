import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID hLnmbqNZQS7MSK92WKWpVGwbGHJ-blJdyE--2RKExIM", // Укажи свой ключ
  },
});

export async function fetchImages(query, page = 1) {
  const response = await instance.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
  });

  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
}
