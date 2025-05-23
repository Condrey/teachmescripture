import Footer from "./footer";
import Header from "./header";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="px-4 pb-12 max-w-7xl w-full flex-1 mx-auto pt-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
