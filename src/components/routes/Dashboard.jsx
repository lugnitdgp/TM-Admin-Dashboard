import Card from "../ui/Card";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Charts from "../utils/Charts"
import PieActiveArc from "../utils/Pie";
import Container from "../ui/Container";

function Dashboard() {
  return (
    <div className="md:ml-[16vw] flex pt-8 space-y-16 flex-col">
      <div className="flex flex-wrap space-x-12">
        <Card
          icon={faShoppingCart}
          content={"Number of companies"}
          value={30}
          color="green"
          stats={"/graph1.png"}
        />
        <Card
          icon={faUser}
          content={"Number of contacts"}
          value={40}
          color="blue"
          stats={"/graph2.png"}
        />
        <Card
          icon={faShoppingCart}
          content={"Total deals in pipelines"}
          value={50}
          color="violet"
          stats={"/graph3.png"}
        />
      </div>
      <div className="flex justify-between flex-wrap gap-16">
        <Container heading="Tasks Remaining" component={<PieActiveArc/>}/>
        <Container heading="Total Revenue" component={<Charts/>}/>
      </div>
    </div>
  );
}

export default Dashboard;
