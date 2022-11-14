import { Home, ChartBar, ExclamationCircle } from "../../common/icons";

export default function Header() {
  return (
    <header className="middle_column-header">
      <span className="hover:cursor-pointer">
        <Home />
      </span>

      <span className="col-start-3 place-self-end self-start hover:cursor-pointer">
        <ChartBar />
      </span>

      <span className="row-start-3 col-start-3 place-self-end hover:cursor-pointer">
        <ExclamationCircle />
      </span>
      <h1 className="row-start-3 self-end text-secondary-content">
        CommunityName
      </h1>
    </header>
  );
}
