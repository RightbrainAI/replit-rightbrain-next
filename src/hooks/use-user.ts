import { useEffect, useState } from "react";
import type { User } from "@/types";
export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await fetch("/api/user");
        if (!userResponse.ok) {
          setError(userResponse.statusText);
          setLoading(false);
          setUser(null);
          return;
        }
        const userInfo = await userResponse.json();
        setUser(userInfo);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { user, loading };
}
