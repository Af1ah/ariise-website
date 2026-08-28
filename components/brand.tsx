import Image from "next/image";
import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  const markSize = compact ? 30 : 36;
  return <Link className="brand" href="/" aria-label="ARiiSE home"><span className="brand-mark"><Image src="/ariise-mark.png" alt="" width={markSize} height={markSize} priority={!compact} /></span><span translate="no">ARiiSE</span></Link>;
}
