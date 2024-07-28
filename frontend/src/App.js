import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo, Page404 } from './components/pages.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/login" element={<PageTwo />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;