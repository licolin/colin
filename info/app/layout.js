import Sidebar from "./ui/Sidebar";
import Header from "./ui/Header";
import "./globals.css";

const Layout = ({children}) => {
  return (
      <html lang="en">
        <body >
            <div className="h-screen">
                <div><Header/></div>
                <div className="flex">
                    <div className="absolute w-14 bg-blue-600">
                        <Sidebar />
                    </div>
                    <div className="flex-auto w-full ml-16">
                        {children}
                    </div>
                </div>
            </div>
        </body>
      </html>)
}
export default Layout;