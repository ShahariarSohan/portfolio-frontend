import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto px-6 xl:px-0">{children}</div>
      <Footer></Footer>
    </div>
  );
}
