import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function MiddleColumn() {
  return (
    <aside className="middle_column">
      {/* 中间栏头部 */}
      <Header />

      {/* 中间栏中部 */}
      <Main />

      {/* 中间栏底部 */}
      <Footer />
    </aside>
  );
}
