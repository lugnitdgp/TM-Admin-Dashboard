import Card from "../ui/Card";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <div className="flex">
    <div className="w-80"></div>
    <div className="flex flex-wrap space-x-5">
      <Card icon={faShoppingCart} content={"Number of companies"} value={30} color="green" stats={"/graph1.png"} />
      <Card icon={faUser} content={"Number of contacts"} value={40} color="blue" stats={"/graph2.png"} />
      <Card icon={""} content={"Total deals in pipelines"} value={50} stats={"/graph3.png"} />
    </div>
    </div>
  );
}

export default Dashboard;
