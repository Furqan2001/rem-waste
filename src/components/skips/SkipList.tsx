import { AlertTriangle, Check } from "lucide-react";

export type Skip = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

type SkipListProps = {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSelectSkip: (skip: Skip) => void;
};

export const SkipList = ({
  skips,
  selectedSkip,
  onSelectSkip,
}: SkipListProps) => {
  const calculateTotal = (priceBeforeVat: number, vat: number): number => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  const getSkipSizeClass = (size: number) => {
    if (size <= 6) return "bg-blue-500 border-blue-600";
    if (size <= 12) return "bg-purple-500 border-purple-600";
    return "bg-orange-500 border-orange-600";
  };

  const getCategoryBadgeColor = (size: number) => {
    if (size <= 6) return "bg-blue-600";
    if (size <= 12) return "bg-purple-600";
    return "bg-orange-600";
  };

  const getSkipSizeLabel = (size: number) => {
    if (size <= 6) return "Small";
    if (size <= 12) return "Medium";
    return "Large";
  };

  return (
    <div className="space-y-6">
      {/* Table view for desktop */}
      <div className="overflow-hidden rounded-lg bg-gray-800 hidden md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3 text-left text-sm font-semibold">Size</th>
              <th className="p-3 text-left text-sm font-semibold">Features</th>
              <th className="p-3 text-left text-sm font-semibold">
                Hire Period
              </th>
              <th className="p-3 text-right text-sm font-semibold">Price</th>
              <th className="p-3 text-right text-sm font-semibold"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {skips.map((skip) => {
              const isSelected = selectedSkip && selectedSkip.id === skip.id;
              const totalPrice = calculateTotal(
                skip.price_before_vat,
                skip.vat
              );

              return (
                <tr
                  key={skip.id}
                  className={`hover:bg-gray-750 transition-colors ${
                    isSelected ? "bg-gray-750" : ""
                  }`}
                >
                  <td className="p-3">
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-8 ${getSkipSizeClass(
                          skip.size
                        )} mr-3 rounded border flex items-center justify-center text-xs font-bold text-white`}
                      >
                        {skip.size}Y
                      </div>
                      <div>
                        <div className="font-medium">{skip.size} Yard Skip</div>
                        <div className="flex items-center mt-1">
                          <span
                            className={`inline-flex px-2 py-0.5 text-xs rounded ${getCategoryBadgeColor(
                              skip.size
                            )} text-white`}
                          >
                            {getSkipSizeLabel(skip.size)}
                          </span>
                          {!skip.allowed_on_road && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 bg-yellow-800 text-yellow-300 text-xs rounded">
                              <AlertTriangle size={10} className="mr-1" />
                              No Road Placement
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="text-sm text-gray-400">
                      {skip.allows_heavy_waste ? (
                        <span className="text-green-400">
                          Allows heavy waste
                        </span>
                      ) : (
                        <span className="text-gray-500">No heavy waste</span>
                      )}
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="text-sm">{skip.hire_period_days} days</div>
                  </td>
                  <td className="p-3 text-right">
                    <div className="font-bold text-blue-400 text-lg">
                      £{totalPrice}
                    </div>
                    <div className="text-xs text-gray-400">
                      £{skip.price_before_vat} + VAT
                    </div>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => onSelectSkip(skip)}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-white hover:bg-blue-600"
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check size={16} className="inline mr-1" />
                          Selected
                        </>
                      ) : (
                        "Select"
                      )}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {skips.map((skip) => {
          const isSelected = selectedSkip && selectedSkip.id === skip.id;
          const totalPrice = calculateTotal(skip.price_before_vat, skip.vat);

          return (
            <div
              key={`mobile-${skip.id}`}
              className={`bg-gray-800 rounded-lg p-4 ${
                isSelected ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-8 ${getSkipSizeClass(
                      skip.size
                    )} mr-3 rounded border flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {skip.size}Y
                  </div>
                  <div>
                    <div className="font-medium">{skip.size} Yard Skip</div>
                    <div className="flex items-center mt-1">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs rounded ${getCategoryBadgeColor(
                          skip.size
                        )} text-white`}
                      >
                        {getSkipSizeLabel(skip.size)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-400 text-lg">
                    £{totalPrice}
                  </div>
                  <div className="text-xs text-gray-400">
                    £{skip.price_before_vat} + VAT
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-400">
                  {skip.hire_period_days} day hire period
                </div>
                {!skip.allowed_on_road && (
                  <span className="inline-flex items-center px-2 py-0.5 bg-yellow-800 text-yellow-300 text-xs rounded">
                    <AlertTriangle size={10} className="mr-1" />
                    Not Allowed on Road
                  </span>
                )}
              </div>

              <div className="text-sm text-gray-400 mb-3">
                {skip.allows_heavy_waste ? (
                  <span className="text-green-400">Allows heavy waste</span>
                ) : (
                  <span className="text-gray-500">No heavy waste</span>
                )}
              </div>

              <button
                onClick={() => onSelectSkip(skip)}
                className={`w-full py-2 rounded-md transition-colors ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-white hover:bg-blue-600"
                }`}
              >
                {isSelected ? (
                  <>
                    <Check size={16} className="inline mr-1" />
                    Selected
                  </>
                ) : (
                  "Select"
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkipList;
