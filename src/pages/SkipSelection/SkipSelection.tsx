import { ArrowRight } from "lucide-react";

import { useSkipSelection } from "./useSkipSelection";
import SkipList from "../../components/skips/SkipList";
import ProgressBar from "../../components/layout/ProgressBar";
import CategoryFilter from "../../components/skips/CategoryFilter";

const SkipSelection = () => {
  const {
    selectedSkip,
    loading,
    error,
    activeCategory,
    filteredSkips,
    setActiveCategory,
    handleSkipSelection,
  } = useSkipSelection();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="max-w-md p-6 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-bold text-red-500 mb-4">
            Error Loading Skip Data
          </h2>
          <p className="text-gray-300 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8 max-w-6xl pb-24">
        <ProgressBar />

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Choose Your Skip Size
          </h1>
          <p className="text-gray-400 mb-6">
            Select the skip size that best suits your needs
          </p>

          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        <SkipList
          skips={filteredSkips}
          selectedSkip={selectedSkip}
          onSelectSkip={handleSkipSelection}
        />
      </div>

      {/* Fixed footer navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 py-4 px-4 shadow-lg z-10">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          {selectedSkip && (
            <div className="flex items-center">
              <div className="hidden sm:block mr-4 text-gray-400">
                {selectedSkip.size} Yard Skip
              </div>
              <div className="text-xl font-bold text-blue-400">
                £
                {Math.round(
                  selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)
                )}
              </div>
              <div className="ml-1 text-xs text-gray-400">
                ({selectedSkip.hire_period_days} day hire)
              </div>
            </div>
          )}
          {!selectedSkip && <div></div>}{" "}
          {/* Empty div for spacing when no skip is selected */}
          <div className="flex space-x-4">
            <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 transition-colors">
              Back
            </button>
            <button
              disabled={!selectedSkip}
              className={`px-6 py-2 rounded-md transition-colors flex items-center ${
                selectedSkip
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              Continue
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelection;
