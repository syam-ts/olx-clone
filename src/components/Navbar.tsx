import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext, FirebaseContext } from "../strore/FirebaseContext" 

const Navbar = () => {
  const [location, setLocation] = useState(false);
  const [language, setLanguage] = useState(false);
  const firebaseContext = useContext(FirebaseContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    return;
  }

  if (!firebaseContext) {
    return null;
  }

  const { auth } = firebaseContext;
  const { user } = authContext;

  const handleLogout = () => {
    if (auth) {
      auth
        .signOut()
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          console.error("Logout error", error);
        });
    }
  };

  return (
    <div>
      <ul className="flex h-16  bg-gray-200 ">
        <li>
          <Link to="/body">
            <img
              className="w-10 mt-5 ml-5"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png"
              alt="olx-logo"
            />
          </Link>
        </li>

        {!location ? (
          <div className="bg-white mt-3 h-12 ml-8 relative border-2 border-gray-950 rounded-md">
            <li className="grid w-64 mt-2 bg-clip-text">
              <div className="flex">
                <div className="w-10">
                  <img src="https://static.vecteezy.com/system/resources/previews/009/652/218/non_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg" />
                </div>
                <div>
                  <input placeholder="Search city, area or locality" />
                </div>
                <div>
                  <button
                    className="w-12 h-5"
                    onClick={() => setLocation(true)}
                  >
                    <img className="w-6" src="../down-arrow.png" />
                  </button>
                </div>
              </div>
            </li>
          </div>
        ) : (
          <div className="bg-white mt-3 h-72 ml-8 relative border-2 border-gray-950 rounded-md">
            <li className="grid w-64 mt-2 bg-clip-text">
              <div className="flex">
                <div className="w-10">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/009/652/218/non_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
                    alt="search-icon"
                  />
                </div>
                <div>
                  <input placeholder="Search city, area or locality" />
                </div>
                <div>
                  <button
                    className="w-12 h-5"
                    onClick={() => setLocation(false)}
                  >
                    <img className="w-6" src="../down-arrow.png" />
                  </button>
                </div>
              </div>

              <div>
                <ul>
                  <li className="mt-8 m-4 h-4 flex">
                    <img src="/location.png" />
                    <span className="pl-2">Kerala</span>
                  </li>
                  <li className="mt-8 m-4 w-4 h-4 flex">
                    <img src="/location.png" />
                    <span className="pl-2">Maharashtra</span>
                  </li>
                  <li className="mt-8 m-4 w-4 h-4 flex">
                    <img src="/location.png" />
                    <span className="pl-2">Karnata</span>
                  </li>
                  <li className="mt-8 m-4 w-4 h-4 flex">
                    <img src="/location.png" />
                    <span className="pl-2">Tamilnadu</span>
                  </li>
                </ul>
              </div>
            </li>
          </div>
        )}

        <li className="search flex ml-4 h-12 mt-2 border-2 border-gray-950 rounded-md">
          <input placeholder="Find Cars, Mobile Phones and More ...." />
          <img
            className="w-12 p-3 bg-gray-900"
            src="https://static-00.iconduck.com/assets.00/search-icon-1023x1024-cz5u4134.png"
          />
        </li>

        {language ? (
          <div className="h-48 bg-gray-200 rounded-md relative w-40">
            <li className="font-bold text-sm pt-4 ml-6 olx-font flex">
              ENGLISH
              <img
                className="w-6 h-6 cursor-pointer"
                onClick={() => setLanguage(false)}
                src="/arrowhead-up.png"
              />
            </li>
            <div className="grid olx-font text-sm gap-3 ml-12 mt-4">
              <span> * ENGLISH</span>
              <span> * HINDI</span>
              <span> * TELUGU</span>
            </div>
          </div>
        ) : (
          <div className="h-12 rounded-md w-40">
            <li className="font-bold text-sm pt-4 ml-6 olx-font flex">
              ENGLISH
              <img
                onClick={() => setLanguage(true)}
                className="w-6 h-6 cursor-pointer"
                src="../down-arrow.png"
              />
            </li>
          </div>
        )}

        <span className="ml-5 mt-3 olx-font text-sm underline hover:text-red-600 cursor-pointer">
            {user ? `Welcome ${user?.displayName}` : ""} 
         
        </span>

        {user ? (
          <div>
            <li className="cursor-pointer font-bold text-sm pt-4 ml-10 olx-font underline">
              <span
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </span>
            </li>
          </div>
        ) : (
          <li className="font-bold text-sm pt-4 ml-10 olx-font underline">
            <Link to="/login">Login</Link>
          </li>
        )}

        <li className="font-bold pt-2 ml-12">
          <img src="/sell-logo.png" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
