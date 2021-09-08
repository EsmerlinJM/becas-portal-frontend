import { Tab as TAB } from "@headlessui/react";

export default function TabComponent({ headersTab, children }) {
  return (
    <TAB.Group>
      <TAB.List>
        {headersTab.map((header, i) => (
          <TAB
            className={({ selected }) =>
              `outline-none text-sm  rounded px-4  py-2  font-semibold  ${
                selected
                  ? " border-gray text-blue-900 bg-white border-t border-l border-r"
                  : "bg-transparent  text-gray-900"
              }`
            }
            key={i}
          >
            {header}
          </TAB>
        ))}
      </TAB.List>
      <TAB.Panels className="bg-white h-auto shadow ">
        {children.map((panel, i) => (
          <TAB.Panel className="outline-none" key={i}>
            <div className="fadeIn ">{panel}</div>
          </TAB.Panel>
        ))}
      </TAB.Panels>
    </TAB.Group>
  );
}
