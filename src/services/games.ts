import { Game } from "@/utils/endpoint";

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';

export interface GamesResponse {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
}

export async function fetchGames({ genre, page }: { genre?: string; page: number }): Promise<GamesResponse> {
  const qs = new URLSearchParams();
  if (genre) qs.set("genre", genre);
  qs.set("page", String(page));

  const res = await fetch(`${BASE}/api/games?${qs.toString()}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch games");

  return res.json() as Promise<GamesResponse>;
}
