/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsCheckAll } from 'react-icons/bs'
import { HiOutlineSelector } from 'react-icons/hi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Select({
  items,
  keyImage = 'image_url',
  keyLabel = 'name',
  onSelected,
}) {
  const [selected, setSelected] = useState({})

  useEffect(() => {
    if (!Object.keys(selected).length && items.length) {
      onSelected(items[0])
      return setSelected(items[0])
    }
    onSelected(selected)
    //eslint-disable-next-line
  }, [selected, items.length])

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="mt-1 relative">
        <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <span className="flex items-center">
            <img
              src={selected[keyImage]}
              alt=""
              className="flex-shrink-0 h-6 w-6 rounded-full"
            />
            <span className="ml-3 block truncate">{selected[keyLabel]}</span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <HiOutlineSelector />
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {items.map((item, i) => (
              <Listbox.Option
                key={i}
                className={({ active }) =>
                  classNames(
                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9',
                  )
                }
                value={item}
              >
                {({ selected, active }) => (
                  <>
                    <div className="flex items-center">
                      <img
                        src={item[keyImage]}
                        alt=""
                        className="flex-shrink-0 h-6 w-6 rounded-full"
                      />
                      <span
                        className={classNames(
                          selected ? 'font-semibold' : 'font-normal',
                          'ml-3 block truncate',
                        )}
                      >
                        {item[keyLabel]}
                      </span>
                    </div>

                    {selected ? (
                      <span
                        className={classNames(
                          active ? 'text-white' : 'text-indigo-600',
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                        )}
                      >
                        <BsCheckAll />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
