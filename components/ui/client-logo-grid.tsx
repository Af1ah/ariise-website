"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type ClientLogo = {
  name: string;
  logoSrc: string;
  href: string;
  description?: string;
  className?: string;
};

type ClientLogoGridProps = {
  clients: ClientLogo[];
  heading?: string;
};

export function ClientLogoGrid({ clients, heading = "Institutions using ARiiSE" }: ClientLogoGridProps) {
  const reduceMotion = useReducedMotion() ?? false;

  if (clients.length === 0) {
    return null;
  }

  return (
    <section className="client-logo-grid section-wrap section-surface" aria-label="Our client institutions">
      <h2>{heading}</h2>
      <motion.div
        className="client-logo-grid-items"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {clients.map((client) => (
          <motion.div
            key={client.name}
            className="client-logo-grid-item"
            variants={{
              hidden: { opacity: 0, transform: "translate3d(0, 0.75rem, 0)" },
              visible: {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
                transition: { type: "spring", duration: 0.4, bounce: 0 },
              },
            }}
          >
            <a
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              title={client.description ? `${client.name} — ${client.description}` : client.name}
            >
              <Image
                src={client.logoSrc}
                alt={`${client.name} logo`}
                className={client.className}
                width={180}
                height={72}
                sizes="(max-width: 760px) 42vw, (max-width: 1100px) 20vw, 180px"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
