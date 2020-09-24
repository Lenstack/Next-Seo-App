import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { SEO } from "../SEO";
import Container from "../components/container";
import Navbar from "../components/navbar";

export default function index() {
  return (
    <Fragment>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
      </Head>
      <header>
        <Navbar>
          <Link href="/">
            <a>Blog</a>
          </Link>
          <Link href="/service">
            <a>Services</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Navbar>
      </header>
      <main>
        <Container>
          <h1 className="title">Hello next js</h1>
        </Container>
      </main>
      <footer>
        <p>lorem5</p>
      </footer>
    </Fragment>
  );
}
