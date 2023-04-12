import Heatmap from "./Heatmap";

function Activity() {
  return (
    <>
      <div className="mt-8 mb-4 mx-4">
        <div className="flex flex-row ">
          <div className="flex-1">
            <h3 className="py-3 text-2xl font-semibold text-gray-700 dark:text-white">
              <a href="/blogs">Cipher Map</a>
            </h3>
          </div>
        </div>
        <Heatmap />
      </div>
    </>
  );
}
export default Activity;
