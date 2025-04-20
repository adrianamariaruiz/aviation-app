
export default function AirportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <div className="px-2 md:px-5">
        {children}
      </div>
    </main>
  );
}