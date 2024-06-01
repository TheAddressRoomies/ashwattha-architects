import { Outlet } from "react-router-dom";
import { Loading } from "../common_components/Loading.js";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useSession } from "../../hooks/UseSession.js";
import FloatingCall from "../common_components/FloatingCall.js";

export const MainLayout = ({ navigate }) => {
  const session = useSession();

  return (
    <>
        <NavBar/>
            {!session.loading ? (
                <div>
                    <Outlet context={session} />
                </div>
            ) : (
                <Loading />
            )}
        <FloatingCall/>
        <Footer />
    </>
  );
};