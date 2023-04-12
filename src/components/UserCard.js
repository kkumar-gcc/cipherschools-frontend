import moment from "moment";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SecondaryButton from "./buttons/SecondaryButton";

function UserCard(props) {
  const { user } = props;
  return (
    <>
      <div className="border border-gray-200 relative mt-3 w-full px-2 md:p-2.5 text-base text-left p-1  rounded-lg  font-normal shadow-sm">
        <div className="py-3 px-4 rounded-xl not-prose dark:bg-gray-800 ">
          <header className="flex flex-col md:flex-row">
            <div className="flex-1 flex items-center ">
              <img
                className="w-10 h-10 rounded-full"
                src={`https://api.dicebear.com/6.x/bottts/svg?seed=${user.firstName}`}
                alt={`avatar of ${user.firstName}`}
              />
              <div className="ml-2 font-medium ">
                <div className="dark:text-white">
                  <a href="/users/">
                    {user.firstName} {user.lastName}{" "}
                  </a>
                </div>
                <div className="text-sm ">
                  Joined in
                  <span className="ml-1">
                    {moment(user.updatedAt).format("MMMM Y")}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="mb-3 md:hidden">
                <ReactMarkdown>{user.aboutMe}</ReactMarkdown>
              </div>
              <SecondaryButton type="button">
                  Follow
                </SecondaryButton>
            </div>
          </header>
          <div className="mt-3 hidden md:block">
            <ReactMarkdown>{user.aboutMe}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
