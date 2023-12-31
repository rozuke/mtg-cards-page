"use server";

export async function fetchCards(page, params) {
  const pageSize = 20;
  const apiURL = `https://api.magicthegathering.io/v1/cards?page=${page}&pageSize=${pageSize}${
    params ? `&${params}` : ""
  }`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
