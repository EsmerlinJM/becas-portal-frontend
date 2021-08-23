import Header2 from "../UI/organisms/header-2";
import Navigation from "../UI/molecules/navigation";
import Footer from "../UI/organisms/footer";
export default function Header2Natigation({
  children,
  name = "Resultados",
  objNav,
}) {
  return (
    <div className="fadeIn">
      <Header2 />
      <Navigation name={name} ob={objNav} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
