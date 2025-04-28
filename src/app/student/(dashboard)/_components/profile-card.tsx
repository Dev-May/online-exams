import Image from "next/image";
import PerformanceMetrics from "./performance-metrics";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

type ProfileCardProps = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function ProfileCard({
  firstName,
  lastName,
  email,
}: ProfileCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center px-4 py-8 rounded-[20px] shadow-subtle gap-14">
        {/* Profile Image */}
        <Image
          src="/assets/images/profile.jpg"
          alt="Profile"
          className="w-52 h-52"
          width={216}
          height={216}
        />

        {/* Profile Data */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl text-brand font-semibold mb-2">
              {firstName} {lastName}
            </h2>
            <p className="text-xl text-slate-400 mb-4">{email}</p>

            <Progress value={66} />
          </div>

          {/* Performance Metrics */}
          <PerformanceMetrics />
        </div>
      </CardContent>
    </Card>
  );
}
