import React from 'react'

const DashboardWrapper = ({
    children,
}) => {
  return (
    <section className='dashboard__wrapper'>
      <main>
        <nav></nav>
        <section className="content"></section>
      </main>
    </section>
  )
}

export default DashboardWrapper;
