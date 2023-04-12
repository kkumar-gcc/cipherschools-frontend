import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import UserCard from "../UserCard";

function Follower() {
  const [followers, setFollowers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(1);
  const [totalFollowers, setTotalFollowers] = useState(0);

  useEffect(() => {
    async function fetchFollowers() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user/followers`,
          { params: { page: currentPage, limit: pageSize } }
        );
        console.log(response);
        setFollowers(response.data.items);
        setTotalFollowers(response.data.totalItems);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFollowers();
  }, [currentPage, pageSize]);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <h3 className="py-3 text-3xl font-semibold text-gray-700 dark:text-white">
        Users Following You
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {followers.map((follower, i) => (
          <UserCard user={follower} key={i} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={totalFollowers}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Follower;
