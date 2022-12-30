import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import TopUser from "../components/TopUser";
import BottomUser from "../components/BottomUser";

const Dashboard = ({ user, logout }) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <Sidebar user={user} logout={logout} />
        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll dark:bg-gray-900">
      
          <Header user={user} />
          {/* Section 1 */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8 ">
            {/* Top Component  */}
            <TopUser />
          </section>
          {/* Botton Component */}
          <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
            <BottomUser />
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
