import Header2 from "../UI/organisms/header-2";
import Navigation from "../UI/molecules/navigation";
import Footer from "../UI/organisms/footer";
import HeaderUser from "../UI/organisms/header-user";
import { useSelector } from "react-redux";
import { getAuth } from "../../utils/auth";

export default function Header2Natigation({
  children,
  name = 'Resultados',
  objNav,
}) {
  const { data, status } = useSelector((state) => state.user.one);
  const { token } = getAuth();
  return (
    <div className="fadeIn flex justify-between flex-col  bg-gray-50 h-screen">
      <div>
        {token &&
        status === "completed" &&
        Object.keys(data).length &&
        data.id ? (
          <HeaderUser user={data} />
        ) : (
          <Header2 />
        )}
        <div className="mt-0">
          <Navigation name={name} ob={objNav} />
        </div>
        <div className="bg-gray-50">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
