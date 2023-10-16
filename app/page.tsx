import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "antd";
import { ClassDates, EventTimer, ParticipateInfo } from "@/src/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ padding: "15px" }}>
        <div>
          <a href="/">
            <Image
              src="/img/logo/easystockhub-logo.jpeg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={40}
              height={40}
              priority
              style={{ borderRadius: "60%" }}
            />
          </a>
        </div>
        <ClassDates />
        < ParticipateInfo />
        <EventTimer />
      </div>
    </main>
  );
}
