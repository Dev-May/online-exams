import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="flex gap-6">
      <div className="relative flex-1 shadow-soft rounded-[20px]">
        {/* Searchbar */}
        <Input
          type="text"
          placeholder="Search Quiz"
          className="w-full pl-10 pr-4 py-4 border rounded-[20px] border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand" />
      </div>

      {/* Profile Icon */}
      <Image
        src="/assets/images/profile.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full"
        width={40}
        height={40}
      />
    </div>
  );
}
