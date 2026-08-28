import { Brand } from "@/components/brand";
import { ArrowUpRight } from "@/components/icons";
import Link from "next/link";

const navigation = [["Home", "/"], ["AIMS", "/aims"], ["Services", "/services"], ["Pricing", "/pricing"], ["About", "/about"]] as const;
export function SiteHeader() { return <div className="site-header-wrap"><header className="site-header"><Brand /><nav aria-label="Primary navigation" className="desktop-nav">{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><Link className="nav-cta" href="/contact">Request a Quote <ArrowUpRight /></Link><details className="mobile-nav"><summary><span>Menu</span><span className="menu-icon" aria-hidden="true" /></summary><div className="mobile-nav-panel"><nav aria-label="Mobile navigation">{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><Link className="mobile-nav-cta" href="/contact">Request a Quote <ArrowUpRight /></Link></div></details></header></div>; }
export function SiteFooter() { return <footer className="site-footer"><Brand compact /><p>Institutional LMS & management systems for colleges and academies.</p><a href="mailto:info@ariiseglobal.com">info@ariiseglobal.com</a></footer>; }
