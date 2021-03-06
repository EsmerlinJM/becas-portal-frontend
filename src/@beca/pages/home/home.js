import { Helmet } from "react-helmet-async";
import AnnouncementList from "../../shared/components/UI/organisms/announcement-list";
// import AlertTop from "../../shared/components/UI/molecules/alert-top";
import HomeInit from "../../shared/components/UI/organisms/home-init";
import ApplyForm from "../../shared/components/UI/molecules/apply-form";
import Footer from "../../shared/components/UI/organisms/footer";

export default function Home() {
  return (
    <div className="fadeIn">
      <Helmet>
        <title> Beca tu futuro | Crece tu talento, crece el pais </title>
      </Helmet>
      {/* <AlertTop /> */}
      <HomeInit />
      <div className="p-10 w-screen bg-blue-100 shadow-md hidden">
        <h4 className="p-2 border-b border-blue-300 text-xl font-bold azul">
          ÚLTIMAS CONVOCATORIAS
        </h4>
        <div className="  mt-5 ">
          <AnnouncementList />
        </div>
      </div>
      <div className=" form-apply-background  flex flex-col lg:items-end items-center justify-center w-full h-screen bg-no-repeat bg-cover lg:pr-52 hidden">
        <section className="login login max-w-sm bg-white rounded shadow-2xl m-3 p-4 flex justify-center">
          <ApplyForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}
