"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { QUESTIONS, SUBJECTS } from "@/data/questions";

const EXAM_SECONDS = 20 * 60;
const LETTERS = ["A", "B", "C", "D"];

function formatTime(total: number) {
  const m = Math.floor(total / 60).toString().padStart(2, "0");
  const s = (total % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function CbtPage() {
  const questions = QUESTIONS;
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(EXAM_SECONDS);
  const [submitted, setSubmitted] = useState(false);

  const subjectQuestions = useMemo(
    () => questions.filter((q) => q.subject === subject),
    [questions, subject]
  );
  const current = subjectQuestions[index];

  useEffect(() => {
    if (submitted) return;
    if (secondsLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secondsLeft, submitted]);

  function pick(optionIndex: number) {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [current.id]: optionIndex }));
  }

  function changeSubject(s: string) {
    setSubject(s);
    setIndex(0);
  }

  function restart() {
    setAnswers({});
    setSecondsLeft(EXAM_SECONDS);
    setSubmitted(false);
    setIndex(0);
    setSubject(SUBJECTS[0]);
  }

  function confirmSubmit() {
    const unanswered = questions.length - Object.keys(answers).length;
    const msg =
      unanswered > 0
        ? `You have ${unanswered} unanswered question(s). Submit anyway?`
        : "Submit your test?";
    if (window.confirm(msg)) setSubmitted(true);
  }

  if (submitted) {
    const score = questions.filter((q) => answers[q.id] === q.answer).length;
    const percent = Math.round((score / questions.length) * 100);
    return (
      <main className="container">
        <div className="card" style={{ textAlign: "center" }}>
          <h2>Test complete</h2>
          <div className="score">
            {score} / {questions.length}
          </div>
          <p>{percent}% correct</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn" onClick={restart}>Retake test</button>
            <Link href="/"><button className="btn secondary">Home</button></Link>
          </div>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <h3>Review</h3>
          {questions.map((q, i) => {
            const chosen = answers[q.id];
            return (
              <div key={q.id} className="review-item">
                <p className="question-text">
                  <strong>{i + 1}. [{q.subject}]</strong> {q.text}
                </p>
                {q.options.map((opt, oi) => {
                  let cls = "option";
                  if (oi === q.answer) cls += " correct";
                  else if (oi === chosen) cls += " wrong";
                  return (
                    <div key={oi} className={cls} style={{ cursor: "default" }}>
                      <span className="letter">{LETTERS[oi]}</span>
                      <span>{opt}</span>
                    </div>
                  );
                })}
                {chosen === undefined && <p style={{ color: "var(--warn)" }}>Not answered</p>}
                {q.explanation && <div className="explain">{q.explanation}</div>}
              </div>
            );
          })}
        </div>
      </main>
    );
  }

  const answeredCount = Object.keys(answers).length;

  return (
    <main className="container">
      <div className="topbar">
        <div>
          Answered {answeredCount}/{questions.length}
        </div>
        <div className={`timer ${secondsLeft < 120 ? "low" : ""}`}>{formatTime(secondsLeft)}</div>
        <button className="btn danger" onClick={confirmSubmit}>Submit</button>
      </div>

      <div className="subject-tabs">
        {SUBJECTS.map((s) => (
          <button key={s} className={s === subject ? "active" : ""} onClick={() => changeSubject(s)}>
            {s}
          </button>
        ))}
      </div>

      <div className="card">
        <p style={{ color: "var(--muted)", marginTop: 0 }}>
          {subject} · Question {index + 1} of {subjectQuestions.length}
        </p>
        <p className="question-text">{current.text}</p>

        {current.options.map((opt, oi) => (
          <button
            key={oi}
            className={`option ${answers[current.id] === oi ? "selected" : ""}`}
            onClick={() => pick(oi)}
          >
            <span className="letter">{LETTERS[oi]}</span>
            <span>{opt}</span>
          </button>
        ))}

        <div className="nav-row">
          <button className="btn secondary" disabled={index === 0} onClick={() => setIndex((i) => i - 1)}>
            Previous
          </button>
          <button
            className="btn"
            disabled={index === subjectQuestions.length - 1}
            onClick={() => setIndex((i) => i + 1)}
          >
            Next
          </button>
        </div>

        <div className="navigator">
          {subjectQuestions.map((q, i) => (
            <button
              key={q.id}
              className={`${answers[q.id] !== undefined ? "answered" : ""} ${i === index ? "current" : ""}`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
                                      }
