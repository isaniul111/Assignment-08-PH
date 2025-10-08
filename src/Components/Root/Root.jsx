import React, { useEffect, useState } from 'react';
import Navbar from '../Header/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Shared/Loader';

const Root = () => {
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading" || navigation.state === "submitting") {
      setShowLoader(true);
    } else {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-1 relative">
        {showLoader ? <Loader message="Please wait..." /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
