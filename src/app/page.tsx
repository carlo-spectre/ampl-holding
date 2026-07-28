import Image from "next/image";
import { links, site } from "@/lib/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true" />

      <main className={styles.main}>
        <header className={styles.brand}>
          <Image
            className={styles.logo}
            src="/logo-full-white.svg"
            alt={site.name}
            width={320}
            height={92}
            priority
          />
        </header>

        <section className={styles.copy}>
          <h1 className={styles.headline}>
            <span className={styles.line}>{site.headline.line1}</span>
            <span className={styles.line}>{site.headline.line2}</span>
          </h1>
          <p className={styles.body}>{site.subhead}</p>
        </section>

        <nav className={styles.links} aria-label="Social links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </main>
    </div>
  );
}
