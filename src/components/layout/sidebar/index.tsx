import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Sidebar() {
  return (
    <aside className="left_sidebar">
      <Header />

      <Main />

      <Footer />
    </aside>
  );
}
