import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import SearchCon from "./components/SearchCon";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // In case there's nothing to search for
    if (!username || !username.trim()) return;

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      // The API retunrns a message in case the user does not exist
      if (data.message) {
        setUserData(null);
      } else {
        setUserData(data);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <Header />
        <SearchCon
          setUsername={setUsername}
          handleSearch={handleSearch}
          username={username}
        />
        <Body userData={userData} loading={loading} error={error} />
      </div>
    </main>
  );
}

export default App;
