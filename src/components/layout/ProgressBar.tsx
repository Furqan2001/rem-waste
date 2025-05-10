import { Calendar, CreditCard, FileCheck, MapPin, Package } from "lucide-react";

export const ProgressBar: React.FC = () => {
  return (
    <div className="w-full mb-6 overflow-hidden">
      <div className="overflow-x-auto pb-2 md:overflow-visible">
        <div className="min-w-[600px] md:min-w-0 md:w-full">
          <div className="flex justify-between mb-2">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mb-1">
                <MapPin size={16} />
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                Postcode
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mb-1">
                <Package size={16} />
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                Waste Type
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-white mb-1">
                <Package size={16} strokeWidth={3} />
              </div>
              <span className="text-xs font-medium text-white whitespace-nowrap">
                Select Skip
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 mb-1">
                <FileCheck size={16} />
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                Permit Check
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 mb-1">
                <Calendar size={16} />
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                Choose Date
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 mb-1">
                <CreditCard size={16} />
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">
                Payment
              </span>
            </div>
          </div>

          <div className="relative h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="absolute h-full bg-blue-600 w-2/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
