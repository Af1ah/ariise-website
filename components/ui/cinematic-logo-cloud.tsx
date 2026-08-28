"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export type LogoCloudClient = {
  name: string;
  logoSrc?: string;
  className?: string;
};

type CinematicLogoCloudProps = {
  clients: LogoCloudClient[];
  variant?: "grid" | "marquee";
  heading?: string;
};

export function CinematicLogoCloud({
  clients,
  variant = "grid",
  heading,
}: CinematicLogoCloudProps) {
  const reduceMotion = useReducedMotion() ?? false;

  if (clients.length === 0) {
    return null;
  }

  const clientMark = (client: LogoCloudClient) => (
    <div className="client-logo-cloud-mark" key={client.name}>
      {client.logoSrc ? (
        <Image src={client.logoSrc} alt={client.name} className={client.className} width={160} height={40} />
      ) : (
        <span className={client.className}>{client.name}</span>
      )}
    </div>
  );

  if (variant === "marquee") {
    const marqueeClients = [...clients, ...clients];

    return (
      <section className="client-logo-cloud" aria-label={heading ?? "Client logos"}>
        {heading ? <p>{heading}</p> : null}
        <div className="client-logo-cloud-marquee" data-reduced-motion={reduceMotion}>
          <div className="client-logo-cloud-track">{marqueeClients.map((client, index) => <div key={`${client.name}-${index}`}>{clientMark(client)}</div>)}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="client-logo-cloud section-wrap" aria-label={heading ?? "Client logos"}>
      {heading ? <p>{heading}</p> : null}
      <motion.div
        className="client-logo-cloud-grid"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {clients.map((client) => (
          <motion.div
            key={client.name}
            variants={{
              hidden: { opacity: 0, transform: "translate3d(0, 0.75rem, 0)" },
              visible: {
                opacity: 1,
                transform: "translate3d(0, 0, 0)",
                transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
              },
            }}
          >
            {clientMark(client)}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
