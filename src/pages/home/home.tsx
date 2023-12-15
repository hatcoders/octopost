import { useContext } from 'react';

import { ModuleContext } from 'contexts/ModuleContext';

import FeedbackError from '~components/FeedbackError/FeedbackError';
import FirstComment from '~components/FirstComment/FirstComment';
import MainComposer from '~components/MainComposer/MainComposer';
import MediaInputs from '~components/MediaInputs/MediaInput';
import SavBar from '~components/SavBar/SavBar';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import scss from './home.module.scss';

const Home = () => {
  const { modules } = useContext(ModuleContext) as ModuleContext;

  return (
    <>
      <Header />
      <div className={scss.mainContainer}>
        <div className={scss.gridContainer}>
          <div className={scss.gridSwitches}>
            <Sidebar />
            {modules.map((item) => JSON.stringify(item))}
          </div>
          <div className={scss.gridInput}>
            <MainComposer />
            <MediaInputs />
            <FirstComment />
            <FeedbackError />
          </div>
        </div>
        <SavBar />
      </div>
    </>
  );
};

export default Home;
