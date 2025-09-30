

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="container mx-auto px-6 xl:px-0">{children}</div>
    </div>
  );
}
