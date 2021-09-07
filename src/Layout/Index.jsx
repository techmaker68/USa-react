const Index = ({children}) => {
  return (
    <div className='layout-wrapper'>
      <nav className='side-nav'></nav>
      <div className='flex-1'>
        <nav className='top-nav'></nav>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Index;
