import { usePathname } from 'next/navigation';

const useCustomPathname = () => {
  const pathname = usePathname();

  if (pathname.startsWith('/v1')) {
    return pathname.slice(3) || '/';
  }

  return pathname;
};

export default useCustomPathname;