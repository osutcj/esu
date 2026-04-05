"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Loading.module.scss";

interface LoadingProps {
  minDuration?: number;
}

const Loading = ({ minDuration = 1500 }: LoadingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShouldRender(false), 500);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  if (!shouldRender) return null;

  return (
    <div
      className={`${styles["loading-wrapper"]}${!isLoading ? ` ${styles["fade-out"]}` : ""}`}
    >
      <div className={styles["loader-container"]}>
        <div className={styles["spinner-ring"]} />
        <div className={styles.logo}>
          <Image
            src="/assets/images/Logo-uri/ESU_logo.png"
            alt="Loading..."
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
