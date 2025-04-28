import { Button } from "@/components/ui/button";
import { FaApple, FaFacebook, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// Auth Footer Component
export default function Footer() {
  return (
    <footer>
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-neutral-200" />
        <span className="mx-4 text-sm text-muted-foreground">
          Or Continue with
        </span>
        <hr className="flex-grow border-t border-neutral-200" />
      </div>

      {/* Social media icons */}
      <div className="flex justify-center gap-4 mt-8">
        <Button className="shadow-blue-glow" variant="outline" size="icon">
          <FcGoogle />
        </Button>
        <Button
          className="text-brand shadow-blue-glow"
          variant="outline"
          size="icon"
        >
          <FaTwitter />
        </Button>
        <Button
          className="text-brand shadow-blue-glow"
          variant="outline"
          size="icon"
        >
          <FaFacebook />
        </Button>
        <Button className="shadow-blue-glow" variant="outline" size="icon">
          <FaApple />
        </Button>
      </div>
    </footer>
  );
}
