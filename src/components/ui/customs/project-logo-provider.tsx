import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => (
  <Image
    src="/logo.png"
    alt="AxSMS"
    width={40}
    height={45}
    className={className}
  />
);