// import products from "../../../products.json";
import StickyHeadTable from "../ui/table";
function Companies() {
  return (
    <div>
      <div className="flex flex-col items-center w-full ml-60 pt-10">
        <button className="text-md ml-auto mb-4 text-white text-wrap fixed lg:right-16 md:right-8 right-4 w-30 h-15 rounded-md bg-sky-800 dark:bg-sky-600 p-3">
          Create New Company
        </button>
      <div className="pt-20">
        <StickyHeadTable/>
      </div>
    </div>
    </div>
  );
}

export default Companies;
