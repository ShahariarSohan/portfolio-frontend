import { Navbar } from "@/components/modules/home/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
}
