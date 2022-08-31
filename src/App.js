import React, { useState } from 'react';
import './App.scss';
import './Global.scss';
import newsData from './newsData';
import Button from './components/Button/Button';
import NewsBlock from './components/NewsBlock/NewsBlock';
import NewsList from './components/NewsList/NewsList';

function App() {

  const[active, setActive] = useState(true);

  const changeActive = (z) => {
    newsData.forEach(newsBlock => {
      if(newsBlock.active) {
        newsBlock.active = false;
      }
    })
    z.active = true;
    return !active; 
  }

  const parseNewsButton = newsData.map(item => {
    return(
      <div className='buttons'>
        <Button
        key={item.id}
        id={item.id}
        newsTitle={item.block}
        changeActive={() => setActive(changeActive(item))}
        />
      </div>
    )
  })

  const parseNews = newsData.map(item => {
    const newsList = item.list;
    return(
      <div className='news'>
        {item.active ? <NewsBlock
          key={item.block.toString()}
          id={item.id}
          newsTitle={item.block}
          active={item.active}
          newsItem={newsList.map(list => {
            return (
              <NewsList
                key={list.toString()}
                newsItem={list}
              />
            )
          })}
          /> : null
        }
      </div>
    )
  })
  return (
    <div className="App">
      {parseNews}
      <div className='buttons__wrap'>
        {parseNewsButton}
      </div>
    </div>
  );
}

export default App;

/*
    Вам неоходимо реализовать небольшое новостное SPA приложение в котором:

    - должен быть компонент button 
    - должны быть компоненты: Politics, Sport, Games, Hobby, Advertising

    Внутри компонента App будут располагаться новостные категории перечисленные выше.

    Ваша задача:

    Отобразить новости в соответствии с выбранной рубрикой. 
    Каждая рубрика включается по нажатию определенной
    кнопки внутри компонента App. 
    При первой загрузке приложения по умолчанию должна отображаться первая рубрика.
    Всегда должна быть активна только одна рубрика.
    ps: постарайтесь использовать технологии, о которых вы узнали на уроке. 
    И стили на ваш вкус, но они обязательны
    

*/