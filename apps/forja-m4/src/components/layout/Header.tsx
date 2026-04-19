import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6">
        <Link href="/" aria-label="Página inicial FORJA M4">
          <Image
            src="/images/forja-m4-logo-v2.png"
            alt="FORJA M4"
            width={132}
            height={42}
            className="h-10 w-auto sm:h-11"
            sizes="132px"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
