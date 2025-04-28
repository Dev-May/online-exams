import Footer from "../_components/footer";
import Header from "../_components/header";
import LeftSection from "../_components/left-section";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex">
      {/* Left Section */}
      <LeftSection />

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center p-20">
        <div className="w-full max-w-md">
          <Header />

          {/* Form */}
          {children}

          {/* Social Media Icons */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
