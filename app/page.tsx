import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className="card hero">
        <h1>Practice JAMB like the real thing</h1>
        <p>
          Timed CBT mock exam with question navigator, instant scoring and answer
          explanations. Try a free sample test below.
        </p>
        <Link href="/cbt">
          <button className="btn">Start free sample test</button>
        </Link>
      </div>
    </main>
  );
}
