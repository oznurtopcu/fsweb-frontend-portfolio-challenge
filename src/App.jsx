import { useContext } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from './contexts/ThemeContext';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  const {pageData} = useContext(LanguageContext);

  return (
    
    <div >
      <Header langSetting={pageData.langSetting}/>
      <Hero heroData={pageData.heroSection}/>
      <Skills skillsData={pageData.skillsSection}/>
      <Profile profileData={pageData.profileSection}/>
      <Projects projectsData={pageData.projectsSection}/>
      <Footer footerData={pageData.footerSection}/>
    </div>
  )
}

export default App
