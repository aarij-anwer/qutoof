import Link from 'next/link';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import Nav from './Nav';
import { NAV } from '@/app/constants';

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="mb-16 items-center py-16">
          <Link href="/">
            <Logo className="mx-auto h-10 w-auto" />
          </Link>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="flex justify-center gap-3">
              <Nav props={NAV}></Nav>
            </div>
          </nav>
          <p className="pt-6 text-center text-xs text-slate-500">
            Copyright &copy; {new Date().getFullYear()} Qutoof Academy. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
