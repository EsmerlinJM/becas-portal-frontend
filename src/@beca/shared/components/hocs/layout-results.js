import React from 'react'
import { useSelector } from 'react-redux'
import Header2 from '../UI/organisms/header-2'
import HeaderUser from '../UI/organisms/header-user'
import Navigation from '../UI/molecules/navigation'
import SidebarFilter from '../UI/organisms/sidebar-filter'
// import AlertTop from "../UI/molecules/alert-top";
import InputSearch from '../UI/atoms/input-search'
import Footer from '../UI/organisms/footer'

export default function LayoutResult({ children }) {
  const { data, status } = useSelector((state) => state.user.one)

  return (
    <div className="fadeIn">
      {/* <AlertTop /> */}
      {status === 'completed' && Object.keys(data).length ? (
        <HeaderUser />
      ) : (
        <Header2 />
      )}
      {/* <Header2 /> */}
      <Navigation />
      <div className="flex">
        <div
          className="shadow-lg z-10	rounded"
          style={{ width: '270px', minWidth: '270px' }}
        >
          <SidebarFilter />
        </div>
        <div className="p-8 bg-gray-50 w-full z-0">
          <InputSearch />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
