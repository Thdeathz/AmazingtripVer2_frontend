import { useEffect, useState } from "react";
import userApi from "./api/userApi";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      const res = await userApi.getAll();
      setUserData(res.data);
    }

    fetchUserList();
  }, [])
  
  
  return (
    <div className="App">
      <h1>AmazingTrip web Ver 2</h1>
      {userData?.map((each, index) => (
        <div key={index}>
          <p>{each.nickname}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
