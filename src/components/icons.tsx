import Image from "next/image";

export function EcbLogo() {
  return (
    <Image
      src="https://storage.googleapis.com/aai-web-samples/logo.png"
      alt="ECB Global Logo"
      width={160}
      height={40}
      priority
    />
  );
}
