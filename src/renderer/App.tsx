import './App.css';
import { Suspense } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import StudioBar from './components/studiobar/StudioBar';

const LOADING = <section>loading...</section>;

export default function App() {
  return (
    <main className="content">
      <StudioBar />
      <Router>
        <Suspense fallback={LOADING}>
          <AppRoutes />
        </Suspense>
      </Router>
    </main>
  );
}
