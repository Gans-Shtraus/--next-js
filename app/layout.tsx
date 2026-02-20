// app/layout.tsx
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';


export default function RootLayout({
  children,
  params, // Получаем params из маршрута
}: {
  children: React.ReactNode;
  params?: { lang: string };
}) {
  // По умолчанию 'ru', но можно взять из params
  const lang = params?.lang || 'ru';

  return (
    <html lang={lang}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
