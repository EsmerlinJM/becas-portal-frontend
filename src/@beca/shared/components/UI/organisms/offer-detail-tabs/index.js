import OfferDetail from "../offert-detail";
import OfferRequirement from "../offer-requirement";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function OfferDetailTab({ item }) {
  return (
    <div className="">
      <Tabs>
        <TabList>
          <Tab>Oferta académica</Tab>
          <Tab>Requisitos</Tab>
        </TabList>
        <TabPanel>
          <div className="fadeIn">
            <OfferDetail
              item={
                !Object.keys(item).length
                  ? { oferta: {}, institucion: {}, schedule: {} }
                  : item
              }
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="fadeIn">
            <OfferRequirement />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

// const Page = () => {
//   const onMouseEnter = () => console.log("ENTER");
//   const onMouseLeave = () => console.log("LEAVE");
//   const ref = useRef(null);

//   useHover({ ref, onMouseEnter, onMouseLeave });

//   return (
//     <div className="flex flex-col justify-center ">
//       <TabGroup numTabs={2} direction={TabGroup.direction.HORIZONTAL}>
//         <TabGroup.TabList ref={ref}>
//           <TabGroup.Tab
//             index={0}
//             className="h-12 px-12 transition-colors duration-150  hover:bg-blue-50 hover:text-blue-900 outline-none"
//             activeClassName="bg-white azul border"
//             inactiveClassName="text-gray-700 bg-gray-100 "
//           >
//             Oferta académica
//           </TabGroup.Tab>
//           <TabGroup.Tab
//             index={1}
//             className="h-12 px-12 transition-colors duration-150 hover:bg-blue-50 hover:text-blue-900 outline-none"
//             activeClassName="bg-white azul "
//             inactiveClassName="text-gray-700 bg-gray-100 "
//           >
//             Requisitos
//           </TabGroup.Tab>
//         </TabGroup.TabList>
//         <TabGroup.TabPanel
//           index={0}
//           className=" transition-all transform"
//           activeClassName="opacity-100 duration-500 translate-x-0"
//           inactiveClassName="absolute opacity-0 -translate-x-2"
//         >
//           <div className="border">
//             <OfferDetail />
//           </div>
//         </TabGroup.TabPanel>
//         <TabGroup.TabPanel
//           index={1}
//           className=" transition-all transform flex flex-col"
//           activeClassName="opacity-100 duration-500 translate-x-0"
//           inactiveClassName="absolute opacity-0 -translate-x-2"
//         >
//           <div className="">
//             <OfferRequirement />
//           </div>
//         </TabGroup.TabPanel>
//       </TabGroup>
//     </div>
//   );
// };
