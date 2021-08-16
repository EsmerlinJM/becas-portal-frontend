import AnnouncementList from "../../shared/components/UI/organisms/announcement-list";
import AlertTop from "../../shared/components/UI/molecules/alert-top";
import HomeInit from "../../shared/components/UI/organisms/home-init";
import ApplyForm from "../../shared/components/UI/molecules/apply-form";
import OfertaResult from "../../shared/components/UI/molecules/ofert-card";
import CardColumns from "../../shared/components/hocs/card-columns";
import OpenCallsBlock from "../../shared/components/UI/organisms/open-calls-block";
// import SidebarFilter from "../../shared/components/UI/organisms/sidebar-filter";
// import Header2 from "../../shared/components/UI/organisms/header-2";
// import Navigation from "../../shared/components/UI/molecules/navigation";
// import LayoutResult from "../../shared/components/hocs/layout-results";
import LayoutResult from "../../shared/components/hocs/layout-results";
export default function Home() {
  return (
    <div>
      {/* <Header2 />
      <Navigation />
      <SidebarFilter />
  > */}

      <LayoutResult>
        <CardColumns>
          <OfertaResult />
          <OfertaResult />
          <OfertaResult />
          <OfertaResult />
          <OfertaResult />
          <OfertaResult />
          <OfertaResult />
          <OfertaResult />
        </CardColumns>
      </LayoutResult>

      <AlertTop />
      <HomeInit />
      <div className="p-20 w-screen bg-blue-100 shadow-md">
        <h4 className="p-2 border-b border-blue-300 text-xl font-bold azul">
          ÚLTIMAS CONVOCATORIAS
        </h4>
        <div className="border-top-4 border-gray-700 mt-5 p-2">
          <AnnouncementList />
        </div>
        <OpenCallsBlock />
      </div>
      <div className=" form-apply-background  flex flex-col items-end justify-center w-full h-screen bg-no-repeat bg-cover pr-52">
        <section className="login shadow-2xl login max-w-sm bg-white rounded shadow-2xl m-3 p-4 flex justify-center">
          <ApplyForm />
        </section>
      </div>
    </div>
  );
}
