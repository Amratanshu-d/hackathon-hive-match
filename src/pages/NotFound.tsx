
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl font-bold text-purple-500 mb-4">404</div>
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Button asChild className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
