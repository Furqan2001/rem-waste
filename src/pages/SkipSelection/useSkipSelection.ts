import { useState, useEffect, useCallback, useMemo } from "react";
import type { SkipCategory } from "../../components/skips/CategoryFilter";
import type { Skip } from "../../components/skips/SkipList";

export const useSkipSelection = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<SkipCategory>("all");

  useEffect(() => {
    const fetchSkips = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data: Skip[] = await response.json();
        setSkips(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSkipSelection = useCallback((skip: Skip): void => {
    setSelectedSkip(skip);
    // Scroll to the bottom of the page where the continue button is
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  // Filter skips based on the active category
  const filteredSkips = useMemo(() => {
    if (activeCategory === "all") return skips;
    if (activeCategory === "small")
      return skips.filter((skip) => skip.size <= 6);
    if (activeCategory === "medium")
      return skips.filter((skip) => skip.size > 6 && skip.size <= 12);
    if (activeCategory === "large")
      return skips.filter((skip) => skip.size > 12);
    return skips;
  }, [skips, activeCategory]);

  return {
    skips,
    selectedSkip,
    loading,
    error,
    activeCategory,
    filteredSkips,
    setActiveCategory,
    handleSkipSelection,
  };
};

export default useSkipSelection;
