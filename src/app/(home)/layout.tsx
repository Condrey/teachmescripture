import Footer from "./footer";
import Header from "./header";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className=" min-h-dvh">
      <Header />
      <main className="px-4 pb-12 max-w-7xl w-full mx-auto pt-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
