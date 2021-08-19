import Header2 from "../UI/organisms/header-2";
import Navigation from "../UI/molecules/navigation";
import Footer from "../UI/organisms/footer";
export default function Header2Natigation({ children }) {
  return (
    <div>
      <Header2 />
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
