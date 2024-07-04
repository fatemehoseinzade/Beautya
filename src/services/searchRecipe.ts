import { baseUrl, appId, apiKey } from "@/Enums/api_enum";

export const searchRecipe = async (query: string) => {
  let loading =true
  try {
    const res = await fetch(
      `${baseUrl}/search?q=${query}&app_id=${appId}&app_key=${apiKey}&from=0&to=50`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`An error occurred: ${res.statusText}`);
    }else {
      loading =false
    }

    const data = await res.json();
    return {data ,loading};
  } catch (err: any) {
    console.error("Error fetching data:", err.message);
    throw new Error("Failed to fetch data");
  }
};
