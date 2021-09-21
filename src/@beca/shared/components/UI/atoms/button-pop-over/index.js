import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const solutions = [
  {
    id: 1,
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
  },
  {
    id: 2,
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
  },
  {
    id: 3,
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
  },
  {
    id: 4,

    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
  },
  {
    id: 5,
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
  },
]

export default function ButtonPopover({ items = solutions, children, header }) {
  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-black group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              {children}
            </Popover.Button>
            <Popover.Overlay
              className={`${
                open ? 'opacity-30 fixed inset-0' : 'opacity-0'
              } bg-black`}
            />
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-40  w-64	 px-4 mt-3 transform -translate-x-3/4 left-1/2 sm:px-0 ">
                <div className=" overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7">
                    <span className=" -m-3 border-b-2  bg-gray-50 outline-none">
                      <div className="ml-2">
                        <p className="text-lg font-medium text-gray-900">
                          {header}
                        </p>
                      </div>
                    </span>
                    {items.map(
                      (item) =>
                        item && (
                          <span
                            key={item.id}
                            onClick={item.href}
                            className="flex items-center py-2 px-1 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className=" flex ml-4 cursor-pointer">
                              {item.icon && <item.icon />}
                              <p className=" ml-2 text-sm font-medium text-gray-500">
                                {item.name}
                              </p>
                            </div>
                          </span>
                        ),
                    )}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
