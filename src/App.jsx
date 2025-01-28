import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Registration';
import { AuthProvider, useAuth } from './context/Authcontext';
import Login from './pages/Login';
import { ProductProvider } from './context/ProductContext';
import Footer from './partials/Footer';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
function App() {
  return (
    <>
      <ProductProvider>
        <AuthProvider>
          <BrowserRouter>
            <div>
              <Navbar />
              <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="col-xl-6">
                  <Routes>

                    
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />} />

          
                    <Route path='/home' element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    } />
                    <Route path='/about' element={
                      <ProtectedRoute>
                        <About />
                      </ProtectedRoute>
                    } />
                    <Route path='/contact' element={
                      <ProtectedRoute>
                        <Contact />
                      </ProtectedRoute>
                    } />
                    <Route path="/products" element={
                      <ProtectedRoute>
                        <Products />
                      </ProtectedRoute>
                    }>
                      <Route path=":productId" element={
                        <ProtectedRoute>
                          <ProductDetails />
                        </ProtectedRoute>
                      } />
                    </Route>

                    <Route path='*' element={
                      <div>
                        <h1>404 PAGE NOT FOUND</h1>
                        <p>The Page You're Looking For Does Not Exist</p>
                      </div>
                    } />
                  </Routes>
                </div>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </AuthProvider>
      </ProductProvider>
    </>
  );
}

export default App;
