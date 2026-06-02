import Link from 'next/link';

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-xs text-slate-700 hover:bg-slate-100 hover:text-slate-900 sm:text-sm"
    >
      {children}
    </Link>
  );
}
