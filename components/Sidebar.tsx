'use client';

import sidebarLinks from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-light-2 p-6 pt-28 max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);
          return (
            <Link
              className={cn('flex gap-4 items-center p-4 rounded-lg justify-start ', { 'bg-cyan-500 text-white': isActive })}
              href={link.route}
              key={link.label}
            >
              <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Sidebar;