import { Check, X } from "lucide-react";

export default function PricingCard() {
  return (
    <div className="relative w-[260px] bg-white rounded-[40px] shadow-xl overflow-hidden">

      {/* Price Ribbon */}
      <div className="absolute top-6 right-0 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-l-md shadow">
        $2.99
      </div>

      {/* Content */}
      <div className="px-6 pt-8 pb-20">
        <h2 className="text-center text-red-500 text-xl font-semibold mb-6">
          Basic
        </h2>

        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-2 text-gray-700">
            <Check className="text-green-500 w-4 h-4" />
            Sample Text Here
          </li>

          <li className="flex items-center gap-2 text-gray-400">
            <X className="text-red-500 w-4 h-4" />
            Other Text Title
          </li>

          <li className="flex items-center gap-2 text-gray-400">
            <X className="text-red-500 w-4 h-4" />
            Text Space Goes Here
          </li>

          <li className="flex items-center gap-2 text-gray-400">
            <X className="text-red-500 w-4 h-4" />
            Description Space
          </li>

          <li className="flex items-center gap-2 text-gray-400">
            <X className="text-red-500 w-4 h-4" />
            Sample Text Here
          </li>
        </ul>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 w-full px-6 pb-6">
        <button className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-red-600 transition">
          Select
        </button>
      </div>
    </div>
  );
}
