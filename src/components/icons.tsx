import Image from 'next/image';

export function EcbLogo() {
  return (
    <Image
      src="/images/logo.svg"
      alt="ECB Global Logo"
      width={140}
      height={56}
      priority
    />
  );
}
