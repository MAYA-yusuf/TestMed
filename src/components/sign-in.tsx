import { useState, type FormEvent } from "react";
import { useProgress } from "@/lib/progress";

export function SignIn() {
  const signIn = useProgress((state) => state.signIn);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function submit(event: FormEvent) {
    event.preventDefault();
    const first = name.trim().split(/\s+/)[0] ?? "";
    if (!first) {
      setError("Type your first name to enter.");
      return;
    }
    signIn(first);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-4 py-10 text-ink">
      <div className="w-full max-w-md">
        <p className="text-sm font-medium text-teal">Lagos State University · College of Medicine</p>
        <h1 className="mt-2 font-display text-4xl">Clinicfolio test hall</h1>
        <p className="mt-3 text-muted">
          Medicine, physiotherapy, and pharmacy, 100 to 500 level. The first name you type is the name on the
          desk. It stays on this device only.
        </p>
        <form onSubmit={submit} className="mt-6 rounded-lg bg-card p-5 shadow-card">
          <label htmlFor="first-name" className="text-sm font-medium">
            First name
          </label>
          <input
            id="first-name"
            autoComplete="given-name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setError("");
            }}
            placeholder="Type your first name"
            className="mt-2 min-h-12 w-full rounded-md border border-line bg-paper px-3"
          />
          {error ? <p className="mt-2 text-sm text-clay">{error}</p> : null}
          <button type="submit" className="mt-4 min-h-12 w-full rounded-md bg-teal font-medium text-card">
            Enter the hall
          </button>
        </form>
        <p className="mt-4 text-sm text-muted">
          A revision hall for study, not an official LASU paper and not medical advice. Do not use it to treat
          anyone.
        </p>
      </div>
    </main>
  );
}
