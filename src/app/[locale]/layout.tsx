/** Only locales returned by each route's generateStaticParams are valid. */
export const dynamicParams = false;

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
