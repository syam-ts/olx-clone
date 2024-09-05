import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [location, setLocation] = useState(false);

  return (
    <div>
      <ul className="flex h-16  bg-gray-200">
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
                <div className="w-12">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAeFBMVEX///8AAAD8/PwEBATV1dWkpKTa2trz8/Pv7+/e3t61tbW6urqnp6dSUlI1NTXDw8OWlpbm5uYhISEwMDB2dnaurq7KyspaWloeHh4SEhJsbGyLi4tEREQqKioMDAxKSko9PT2Pj491dXVnZ2d+fn5XV1eCgoKdnZ0mZH/+AAAFFUlEQVR4nO2bDXOqOhCGQwBR/ERr1WqtrT36///hTSAbRPBKnIHK+j5n5rRVMpPd7GY3m0UIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAHan+CRElvenofD4vp4NEms9fBJlK+j4bf3o5k1UYpF/+7dzaQwa/F+J7vvm53w74q8AY/HJyLb1Pv39N/3iKzaOVsJx7N1F6OEyVs0i+9qAkCxa3NWCMYZUIxjoQcqvE9P3bKvDTb0d/Pc+G0Pbd310ueFEV/uXfH1KyjBBSvF+sd/pjsvqdhaPw+2e8KGjB9+YJRx1IMbWypxyXSS5mNAhXBaPYDLgpQTtCTCrQ/69HUemh/vfeu1BTwCxhkqkV5IscV0sXzbJtMXOMAa/wIMXgYg/8jURVBqA/S1ZkCXtvHnHSgdrkN7kK3m89lUocmqxRaWLV4hRb4MOEP9+bJHceDfIU4iwYhcjYJgVf5b3wmmTtmS3BYxQcIrsfHu4urN4UjOP43oFJbFBC/ZIZfPZrDelZnS2Z6EDHBEOv5piYBqxZqEDp4IMkCmuuqhQ/NITJ8Skheb7qj4k8k09smptXm2ypTNRzcO6YtsVhgzNrj70xg4/K7PAWC7ONskiUAsoQe046iGlYvVDyxEhyBZUauI2M1sZ8YgY5AhUQl06jbFLhvTU0rxZJ6MAYOa1mXnX6bGpmbZGLMnYeSyH1/gnj2QmNJCdnr6YC7K2zdnd4M5K4x/lv40VuG8kzcjQ6CJztYGl0MGtkXu0hxdjowL0UMDU6ODUysxaRxqv37qlOYPPLjiMPmSAb992djtydz5aluWffuNsBlaKPDUyrXSjC3SullqGDRud9QdAVmvueODQjt43Mq02oiBQ4jxyZkecGZtUmUpyMJHXraDQwPzTFHT83SlsedTz+KbGpZ6duIfZ5oSj/6bqYtgzZbSvQyxltHlpOMiD/gQPnc6FrZ5Qsu6W8UvzLVMAgLEi1vZvCoNtAezHjHlCeD1tIqr+/6+e2xhXmXd8OUr6MNJPaZWX1XETNq50/NabYi/ewboVY6tKLT/klB6I59d3VPTvKNKJmDcyNTq09QuoxWtW1g8h29Ha/mKiRQu7JsOum/vam+l/H82RD2ppIzTX1WvNntoGLQ2A0jK1Q73c789OMImtNU/kRn/a8vLnGm94V62yeVDoIGOlA18mJ5R25Th7FBP+RivzTkvbjkDu8/V+ITHbepQ5SJbBQg34b4ZA3qs5jUWUL+pOzdw2brmWd/C5ICerHrjLsy2HpVSdG7qCXsj/P5VL53+i60Jx8T7ziGw5WCUy0oNQQTYoS7mZTunRIpttDyQsK7sBCCzot+KgQcL5YV3xacgc2OrDNCLlP3Pyz8EX3y6oXDBZ3X+5TTlJWSMDFHVLC0lt9BRUo5xjaGyaG7pDR3960As0ouriUKLgDIx0IEZ1vvfC7o76bK0vwfVZHyIzgZF95tY4xnlHdTJaUoOkxcgeZyiL78exIadPiLcsVzNnAvA7J2R0KyyntCUra41EaRys3xteibAneI40cXabaEhZ8nKEGaUpUVkL81/Nqn5I7HBlti7WocIfDi6lAVLjD7uV0IEp5wpFNPaU+RUvg8pabG4UQ6bO5gXWiGCIfaPhlghSDrI3jp/tv9TyMMoXB8jxMKm8lXgKZS86pnubMC4sOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsOU/1cYjfUutt58AAAAASUVORK5CYII=" />
                </div>
                <div>
                  <input placeholder="Search city, area or locality" />
                </div>
                <div>
                  <button
                    className="w-12 h-5"
                    onClick={() => setLocation(true)}
                  >
                    <img className="w-6" src="../public/down-arrow.png" />
                  </button>
                </div>
              </div>
            </li>
          </div>
        ) : (
          <div className="bg-white mt-3 h-72 ml-8 relative border-2 border-gray-950 rounded-md">
            <li className="grid w-64 mt-2 bg-clip-text">
              <div className="flex">
                <div className="w-12">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAeFBMVEX///8AAAD8/PwEBATV1dWkpKTa2trz8/Pv7+/e3t61tbW6urqnp6dSUlI1NTXDw8OWlpbm5uYhISEwMDB2dnaurq7KyspaWloeHh4SEhJsbGyLi4tEREQqKioMDAxKSko9PT2Pj491dXVnZ2d+fn5XV1eCgoKdnZ0mZH/+AAAFFUlEQVR4nO2bDXOqOhCGQwBR/ERr1WqtrT36///hTSAbRPBKnIHK+j5n5rRVMpPd7GY3m0UIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAHan+CRElvenofD4vp4NEms9fBJlK+j4bf3o5k1UYpF/+7dzaQwa/F+J7vvm53w74q8AY/HJyLb1Pv39N/3iKzaOVsJx7N1F6OEyVs0i+9qAkCxa3NWCMYZUIxjoQcqvE9P3bKvDTb0d/Pc+G0Pbd310ueFEV/uXfH1KyjBBSvF+sd/pjsvqdhaPw+2e8KGjB9+YJRx1IMbWypxyXSS5mNAhXBaPYDLgpQTtCTCrQ/69HUemh/vfeu1BTwCxhkqkV5IscV0sXzbJtMXOMAa/wIMXgYg/8jURVBqA/S1ZkCXtvHnHSgdrkN7kK3m89lUocmqxRaWLV4hRb4MOEP9+bJHceDfIU4iwYhcjYJgVf5b3wmmTtmS3BYxQcIrsfHu4urN4UjOP43oFJbFBC/ZIZfPZrDelZnS2Z6EDHBEOv5piYBqxZqEDp4IMkCmuuqhQ/NITJ8Skheb7qj4k8k09smptXm2ypTNRzcO6YtsVhgzNrj70xg4/K7PAWC7ONskiUAsoQe046iGlYvVDyxEhyBZUauI2M1sZ8YgY5AhUQl06jbFLhvTU0rxZJ6MAYOa1mXnX6bGpmbZGLMnYeSyH1/gnj2QmNJCdnr6YC7K2zdnd4M5K4x/lv40VuG8kzcjQ6CJztYGl0MGtkXu0hxdjowL0UMDU6ODUysxaRxqv37qlOYPPLjiMPmSAb992djtydz5aluWffuNsBlaKPDUyrXSjC3SullqGDRud9QdAVmvueODQjt43Mq02oiBQ4jxyZkecGZtUmUpyMJHXraDQwPzTFHT83SlsedTz+KbGpZ6duIfZ5oSj/6bqYtgzZbSvQyxltHlpOMiD/gQPnc6FrZ5Qsu6W8UvzLVMAgLEi1vZvCoNtAezHjHlCeD1tIqr+/6+e2xhXmXd8OUr6MNJPaZWX1XETNq50/NabYi/ewboVY6tKLT/klB6I59d3VPTvKNKJmDcyNTq09QuoxWtW1g8h29Ha/mKiRQu7JsOum/vam+l/H82RD2ppIzTX1WvNntoGLQ2A0jK1Q73c789OMImtNU/kRn/a8vLnGm94V62yeVDoIGOlA18mJ5R25Th7FBP+RivzTkvbjkDu8/V+ITHbepQ5SJbBQg34b4ZA3qs5jUWUL+pOzdw2brmWd/C5ICerHrjLsy2HpVSdG7qCXsj/P5VL53+i60Jx8T7ziGw5WCUy0oNQQTYoS7mZTunRIpttDyQsK7sBCCzot+KgQcL5YV3xacgc2OrDNCLlP3Pyz8EX3y6oXDBZ3X+5TTlJWSMDFHVLC0lt9BRUo5xjaGyaG7pDR3960As0ouriUKLgDIx0IEZ1vvfC7o76bK0vwfVZHyIzgZF95tY4xnlHdTJaUoOkxcgeZyiL78exIadPiLcsVzNnAvA7J2R0KyyntCUra41EaRys3xteibAneI40cXabaEhZ8nKEGaUpUVkL81/Nqn5I7HBlti7WocIfDi6lAVLjD7uV0IEp5wpFNPaU+RUvg8pabG4UQ6bO5gXWiGCIfaPhlghSDrI3jp/tv9TyMMoXB8jxMKm8lXgKZS86pnubMC4sOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsOU/1cYjfUutt58AAAAASUVORK5CYII=" />
                </div>
                <div>
                  <input placeholder="Search city, area or locality" />
                </div>
                <div>
                  <button
                    className="w-12 h-5"
                    onClick={() => setLocation(false)}
                  >
                    <img className="w-6" src="../public/down-arrow.png" />
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
        <div>
        <li className="font-bold text-sm pt-4 ml-12 olx-font flex">ENGLISH <img className="w-5 h-6" src="../public/down-arrow.png" /></li>
        </div>
        <li className="font-bold  text-sm pt-4 ml-10 olx-font underline">
          Login
        </li>
        <li className="font-bold pt-2 ml-4">
          <img src="/sell-logo.png" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
