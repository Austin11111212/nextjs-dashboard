// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// import SideNav from '@/app/ui/dashboard/sidenav';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }


import '@/app/ui/global.css'; // Global CSS file
import { inter } from '@/app/ui/fonts'; // Font configuration
import SideNav from '@/app/ui/dashboard/sidenav'; // Sidebar navigation component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Main layout structure */}
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          {/* Sidebar navigation */}
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          {/* Main content area */}
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
