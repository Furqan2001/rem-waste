export type SkipCategory = "all" | "small" | "medium" | "large";

type CategoryFilterProps = {
  activeCategory: SkipCategory;
  setActiveCategory: (category: SkipCategory) => void;
};

export const CategoryFilter = ({
  activeCategory,
  setActiveCategory,
}: CategoryFilterProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-3 mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-gray-700 text-white"
              : "bg-gray-900 text-gray-400 hover:bg-gray-700"
          }`}
        >
          All Sizes
        </button>
        <button
          onClick={() => setActiveCategory("small")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeCategory === "small"
              ? "bg-blue-700 text-white"
              : "bg-gray-900 text-gray-400 hover:bg-gray-700"
          }`}
        >
          Small (4-6 yards)
        </button>
        <button
          onClick={() => setActiveCategory("medium")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeCategory === "medium"
              ? "bg-purple-700 text-white"
              : "bg-gray-900 text-gray-400 hover:bg-gray-700"
          }`}
        >
          Medium (8-12 yards)
        </button>
        <button
          onClick={() => setActiveCategory("large")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeCategory === "large"
              ? "bg-orange-700 text-white"
              : "bg-gray-900 text-gray-400 hover:bg-gray-700"
          }`}
        >
          Large (14+ yards)
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
