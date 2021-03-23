import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ data = null }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola, soy Rodrigo</p>
      </section>
      <ul>
        <li style={{ fontSize: "1.4rem", listStyle: "none" }}>
          usando getStaticProps (pre-rendering)
        </li>
        {data &&
          data.map((d, idx) => {
            return (
              <li
                key={idx}
                style={{
                  color: "blue",
                  listStyle: "none",
                  textAlign: "center",
                }}
              >
                <Link href={`/posts/${d.id}`}>
                  <a>{d.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </Layout>
  );
}

//pre-renderizado, traemos los datos y renderizamos luego la pagina, apenas vemos la pagina ya tiene los datos
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  return {
    props: { data: data },
  };
}
