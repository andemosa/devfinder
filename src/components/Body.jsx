import Office from "./Office";
import Pin from "./Pin";
import Twitter from "./Twitter";
import Url from "./Url";

/* eslint-disable react/prop-types */
const Body = ({ userData, loading, error }) => {
  if (loading)
    return (
      <div
        className={`w-full dark:bg-blue-gray bg-white py-10 px-6 rounded-lg flex
  items-center justify-center mt-6 shadow-xl`}
      >
        <h1 className="dark:text-white text-slate-900 text-xl">Loading...</h1>
      </div>
    );

  if (error)
    return (
      <div
        className={`w-full dark:bg-blue-gray bg-white py-10 px-6 rounded-lg flex
  items-center justify-center mt-6 shadow-xl`}
      >
        <h1 className="dark:text-white text-[#F74646] text-xl">
          An error occurred...
        </h1>
      </div>
    );

  if (!userData)
    return (
      <div
        className={`w-full dark:bg-blue-gray bg-white py-10 px-6 rounded-lg flex
    items-center justify-center mt-6 shadow-xl`}
      >
        <h1 className="dark:text-white text-[#F74646] text-xl">
          No data found
        </h1>
      </div>
    );

  return (
    <div className="w-full dark:bg-blue-gray bg-white py-10 px-6 rounded-lg shadow-xl flex flex-col gap-3">
      <div className="flex gap-2">
        <div className="">
          <img
            src={userData.avatar_url}
            placeholder="blur"
            alt="User"
            className="w-20 h-20 rounded-full overflow-hidden"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-between w-full">
            <h1 className="font-bold text-xl tracking-wider">
              {userData.name}
            </h1>
            <p className="text-blue-600 text-base mt-1">@{userData.login}</p>
            <p className="text-base">
              Joined{" "}
              {new Date(userData.created_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-base mt-4">{userData.bio}</p>
      {/* Profile data side */}
      <div className="w-full flex flex-col dark:text-white text-slate-900 md:px-5">
        <div className="dark:bg-slate-800 bg-gray-100 py-4 rounded-lg mt-5 flex justify-around">
          <div className="flex flex-col items-center gap-1">
            <small className="dark:text-gray-300 text-slate-900 text-lg">
              Repos
            </small>
            <p className="font-bold text-xl">{userData.public_repos}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <small className="dark:text-gray-300 text-slate-900 text-lg">
              Followers
            </small>
            <p className="font-bold text-xl">{userData.followers}</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <small className="dark:text-gray-300 text-slate-900 text-lg">
              Following
            </small>
            <p className="font-bold text-xl">{userData.following}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 mt-8 gap-2">
          <div className="flex items-center">
            <Pin />
            <p
              className={`ml-3 ${
                userData.location
                  ? "dark:text-gray-300 text-gray-500"
                  : "text-gray-400"
              }`}
            >
              {userData.location ?? "Not available"}
            </p>
          </div>
          <div className="flex items-center">
            <Twitter />
            <p
              className={`ml-3 ${
                userData.twitter_username
                  ? "dark:text-gray-300 text-gray-500"
                  : "text-gray-400"
              }`}
            >
              {userData.twitter_username ?? "Not available"}
            </p>
          </div>
          <div className="flex items-center">
            <Url />
            <p
              className={`ml-3 ${
                userData.blog
                  ? "dark:text-gray-300 text-gray-500"
                  : "text-gray-400"
              }`}
            >
              {userData.blog ? userData.blog : "Not available"}
            </p>
          </div>
          <div className="flex items-center">
            <Office />
            <p
              className={`ml-3 ${
                userData.company
                  ? "dark:text-gray-300 text-gray-500"
                  : "text-gray-400"
              }`}
            >
              {userData.company ?? "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

{
  /* <div className="grid grid-cols-12">
        <div className="col-start-1 col-end-3">Image</div>
        <div className="col-start-3">The Octacat</div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-start-3">The Octacat</div>
      </div> */
}
