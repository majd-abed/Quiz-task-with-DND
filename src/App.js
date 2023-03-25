import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Quiz from './components/Quiz';
import Login from './components/Login';
import { Route,Routes } from 'react-router-dom';
import QuizRules from './components/QuizRules';
function App() {
  return (
    <>
      <Login />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizrules" element={<QuizRules />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
