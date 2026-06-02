import Link from 'next/link';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import Nav from './Nav';
import { NAV } from '@/app/constants';

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Link href="/">
            <Logo className="mx-auto h-10 w-auto" />
          </Link>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <Nav props={NAV}></Nav>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <p className="mx-auto mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Qutoof Academy. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
