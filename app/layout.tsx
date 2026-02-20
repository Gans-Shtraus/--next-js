import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  // Ждём разрешения промиса
  const resolvedParams = await params;
  // Берём lang из params или используем значение по умолчанию
  const lang = resolvedParams.lang || 'ru';

  return (
    <html lang={lang}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
