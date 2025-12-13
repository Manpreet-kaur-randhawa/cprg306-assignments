"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Week9LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (e) {
      console.error(e);
      alert("Login failed");
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (e) {
      console.error(e);
      alert("Logout failed");
    }
  };

  return (
    <main className="min-h-screen bg-[#0b1d0b] px-6 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Week 9 — Firebase authentication</h1>

      <div className="max-w-xl">
        <div className="rounded-xl border border-white/10 bg-white/5 shadow-lg p-6 space-y-4">
          {!user && (
            <>
              <p className="text-white/80">You are not logged in.</p>

              <button
                onClick={handleLogin}
                className="w-full rounded-lg bg-[#3a8b57] py-3 font-semibold hover:bg-[#2f7648] transition"
              >
                Login with GitHub
              </button>

              <p className="text-sm text-white/60">
                After login, you’ll be able to access the shopping list.
              </p>
            </>
          )}

          {user && (
            <>
              <p className="text-white/90">
                Welcome, <span className="font-semibold">{user.displayName}</span>{" "}
                <span className="text-white/70">({user.email})</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/week-9/shopping-list"
                  className="flex-1 text-center rounded-lg bg-[#3a8b57] py-3 font-semibold hover:bg-[#2f7648] transition"
                >
                  Go to Shopping List →
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex-1 rounded-lg bg-white/10 py-3 font-semibold hover:bg-white/15 transition"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
