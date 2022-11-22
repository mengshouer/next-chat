import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "src/store/user";

const Home: NextPage = () => {
  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleUpdateUser = () => {
    dispatch(
      updateUser({
        user_id: userid,
        username: username,
      })
    );
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <input
            onChange={(e) => setUserid(e.target.value)}
            type="text"
            placeholder="userid"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
          <button onClick={handleUpdateUser} className="btn btn-primary">
            <Link href="/chat">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
