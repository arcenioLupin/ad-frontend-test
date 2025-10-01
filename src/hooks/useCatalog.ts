import { useEffect, useState } from "react";
import { fetchGames, GamesResponse } from "@/services/games";
import { Game } from "@/utils/endpoint";

export function useCatalog(genre?: string, page = 1) {
  const [pagesData, setPagesData] = useState<Record<number, Game[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [availableFilters, setAvailableFilters] = useState<string[]>([]);

  useEffect(() => { setPagesData({}); }, [genre]);

  useEffect(() => {
    let ignore = false;
    (async () => {
      setLoading(true); setError(undefined);
      try {
        const data: GamesResponse = await fetchGames({ genre, page });
        if (!ignore) {
          setPagesData(prev => ({ ...prev, [page]: data.games }));
          setTotalPages(data.totalPages);
          setAvailableFilters(data.availableFilters);
        }
      } catch (e: any) {
        if (!ignore) setError(e?.message ?? "Error");
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, [genre, page]);

  const list = Object.keys(pagesData)
    .map(Number)
    .sort((a,b)=>a-b)
    .flatMap(p => pagesData[p] ?? []);

  return { list, loading, error, totalPages, availableFilters };
}
