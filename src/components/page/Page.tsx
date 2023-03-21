import { ReactNode } from "react";
import Head from "next/head";
import styles from "./Page.module.css";
import Spinner from "../spinner/Spinner";
import TopBar from "../topBar/TopBar";
import Footer from "../footer/Footer";

export interface PageProps {
  children: ReactNode;
  title: string;
  isLoading?: boolean;
}

export default function Page({ title, children, isLoading }: PageProps) {
  return (
    <div className={styles.page}>
      <Head>
        <title>{title} | yanano</title>
      </Head>
      <TopBar />
      <div className={styles.body}>
        {isLoading && <Spinner />}
        {children}
        <Footer />
      </div>
    </div>
  );
}
