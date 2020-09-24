import Head from "next/head";
import { Fragment } from "react";
import { SEO } from "../SEO";

export default function index() {
  return (
    <Fragment>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
      </Head>
      <main>
        <h1 className="title">Hello next js</h1>
      </main>
    </Fragment>
  );
}
