import { Route, Routes } from 'react-router-dom';
import { Home, Chat, About } from '../Pages';

export default function RoutesWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/company/about" element={<About />} />
    </Routes>
  )
}
