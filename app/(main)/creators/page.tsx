import { CreatorBanner } from "@/components/creators/CreatorBanner";
import { CreatorCourses } from "@/components/creators/CreatorCourses";

export default function CreatorPage() {
  return (
    <div className="min-h-screen">
      <CreatorBanner />
      <CreatorCourses />
    </div>
  );
}
