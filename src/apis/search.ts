import { defaultInstance } from "./index";

export const searchApi = async (stuff: string) => {
  const { data } = await defaultInstance.get("/search", {
    params: { q: stuff },
  });
  const d = JSON.parse(data);
  return d;
};
