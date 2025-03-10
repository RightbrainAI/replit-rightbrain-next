"use client";

import { useUser } from "@/hooks/use-user";
import { ProfileAnalyzer } from "@/components/profile-analyzer";

declare global {
  function LoginWithReplit(): void;
}

export default function Home() {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Profile Picture Analyzer</h1>

        {user ? (
          <>
            <p className="text-gray-600 mb-8">
              Welcome, {user.userName}! Upload a profile picture to analyze it
              using Rightbrain AI.
            </p>
            <ProfileAnalyzer />
          </>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow">
            <p>Please log in to access the Rightbrain features.</p>
            <button
              className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={() => {
                LoginWithReplit();
              }}
            >
              Log in with Replit
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
