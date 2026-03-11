import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;

    // validate id
    if (userId < 1 || userId > 10) {
      setError("User not found");
      setUser(null);
      return;
    }

    const fetchUser = async () => {
      try {
        setError("");

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError("Failed to fetch user");
      }
    };

    fetchUser();
  }, [userId]); // chạy lại khi userId thay đổi

  return (
    <div>
      <h2>Search User</h2>

      <input
        type="number"
        placeholder="Enter userId (1-10)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {error && <p>{error}</p>}

      {user && !error && (
        <div>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Website:</b> {user.website}</p>
        </div>
      )}
    </div>
  );
}

export default App
