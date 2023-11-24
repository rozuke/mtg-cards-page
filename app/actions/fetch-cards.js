"use server";

export async function fetchCards(page) {
  const perPage = 24;

  const apiURL = "";

  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
