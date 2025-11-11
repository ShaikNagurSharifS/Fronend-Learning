import './App.css'
import { GlobalHeader } from './components/widgets'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageWrapper from './components/ui/PageWrapper'
import Home from './pages'

function App() {
  return (
    <BrowserRouter>
      <GlobalHeader />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  )
}

export default App
