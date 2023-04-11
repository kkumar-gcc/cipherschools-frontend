import moment from "moment";
import SecondaryButton from "../buttons/SecondaryButton";
import { Link } from "react-router-dom";

function ProfileHeader(props) {
  const user = props.user;
  return (
    <>
      <header className="border border-gray-200 dark:border-gray-700 rounded-lg bg-skin-base dark:bg-gray-800">
        <div className="relative  pt-[60%] rounded-lg sm:pt-[30%] md:pt-[22%] ">
          <img
            className="absolute m-0 top-0 left-0 right-0 bottom-0 w-full h-full object-fit rounded-t-lg  bg-skin-base dark:bg-gray-800"
            src="https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png"
            alt={`Background image of ${user.firstName}`}
          />
        </div>
        <div className="my-4 flex flex-col md:flex-row px-6">
          <div className="basis-1/3 mb-4 w-full md:w-1/3 flex items-start justify-center relative">
            <img
              className="-mt-24 z-10 w-40 h-40 rounded-full ring-8 ring-white dark:ring-gray-500"
              src="https://avatars.dicebear.com/api/bottts/:seed.svg"
              alt={`Avatar of  ${user.firstName}`}
            />
          </div>
          <div className="basis-2/3 mb-4 flex flex-col md:flex-row items-center justify-center md:items-start">
            <div className="flex-1">
              <div className="font-medium text-center md:text-left ">
                <div className="text-2xl text-gray-700 dark:text-white">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-xl ">{user.email}</div>
                <div className="text-sm ">
                  Joined in
                  <span className="ml-1">
                    {moment(user.updatedAt).format("MMMM Y")}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 ">
              <Link to="/followers">
                <SecondaryButton type="button">
                  <span className="mr-1">{user.followers?.length}</span>
                  Followers
                </SecondaryButton>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default ProfileHeader;
