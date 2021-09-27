import { range } from "lodash";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>MAIN</h1>
      <ul>
        {range(4).map((el, i) => (
          <li key={i}>title</li>
        ))}
      </ul>
    </>
  );
}
