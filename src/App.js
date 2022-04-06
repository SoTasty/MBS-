import './App.css';
import logo from './png/logo.svg'
import arrow from './png/arrow.svg'
import arrowDown from './png/arrowDown.svg'
import image from './png/image.png'
import line from './png/line.svg'
import plus from './png/plus.svg'
import production from './png/production.png'
import arrowDownBlue from './png/arrowDownBluesvg.svg'
import arrowRightBlue from './png/arrowRightBlue.svg'
import star1 from './png/Star 1.png'
import star2 from './png/Star 2.png'
import star3 from './png/Star 3.png'


function App() {
  return (
    <div className='main-page__wrapper'>
      <div className="main-page__wrapper-first">
        <div className="main-page__header">
        <a>
          <img className="main-page__header-logo" src={logo}></img>
        </a>
        <div className="main-page__header-links">
          <a>Главная</a>
          <a>О компании</a>
          <a>Каталог</a>
          <a>Услуги</a>
          <a>Контакты</a>
        </div>
        <div className="main-page__header-application">
          <a>Оставитить заявку</a>
          <img src={arrow}></img>
        </div>
        </div>
        <div className="main-page__text">
        <p>Производитель промышленного <br></br>
электрооборудования</p>
        <p>г. Нур-Султан</p>
        </div>
        <div className="main-page__content">
        <div className="main-page__content-title">
          <div className="main-page__content-title-name">
            <p>Электроснаб-ЕМ</p>
            <img src={arrowDown}></img>
          </div>
          <p className="main-page__content-title-p">Мы являемся ведущим <br></br>казахстанским производителем в <br></br> электротехнической отрасли</p>
        </div>
        <div>
        </div>
        </div>
      </div>
      
      <img src={image} className="main-page__content-image"></img>
     
      <div className="main-page__wrapper-second">
        <div className="main-page__information">
          <div className="main-page__information-item">
            <p id="information-text">Сумма сделок свыше</p>
            <div className="main-page__information-item-number">
              <h1 id="information-title">3,5</h1> 
              <p id="information-text">миллиардов тенге</p>
            </div>
            <img src={line}></img>
            <p id="information-text" className="main-page__information-item-description">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. 
              Malesuada nec integer <br></br>amet ornare adipiscing arcu ipsum 
              suspendisse viverra.</p>
          </div>
          <div className="main-page__information-item">
            <p id="information-text">Сумма сделок свыше</p>
            <div className="main-page__information-item-number">
              <h1 id="information-title">3,5</h1> 
              <p id="information-text">миллиардов тенге</p>
            </div>
            <img src={line}></img>
            <p id="information-text" className="main-page__information-item-description">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. 
              Malesuada nec integer <br></br>amet ornare adipiscing arcu ipsum 
              suspendisse viverra.</p>
          </div>
          <div className="main-page__information-item">
            <p id="information-text">Сумма сделок свыше</p>
            <div className="main-page__information-item-number">
              <h1 id="information-title">3,5</h1> 
              <p id="information-text">миллиардов тенге</p>
            </div>
            <img src={line}></img>
            <p id="information-text" className="main-page__information-item-description">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. 
              Malesuada nec integer <br></br>amet ornare adipiscing arcu ipsum 
              suspendisse viverra.</p>
          </div>
          <div className="main-page__information-item">
            <p id="information-text">Сумма сделок свыше</p>
            <div className="main-page__information-item-number">
              <h1 id="information-title">3,5</h1> 
              <p id="information-text">миллиардов тенге</p>
            </div>
            <img src={line}></img>
            <p id="information-text" className="main-page__information-item-description">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. 
              Malesuada nec integer <br></br>amet ornare adipiscing arcu ipsum 
              suspendisse viverra.</p>
          </div>
        </div>
      </div>

        <div className="main-page__information-2">
          <div className="information-2__item">
            <div className="information-2__item-items">
              <p>Чем мы занимаемся</p>
              <p>«Электроснаб-ЕМ» является ведущим казахстанским <br></br> производителем в электротехнической отрасли. <br></br> 
                Инновационный подход и креативные решения <br></br> позволили Компании стать одним из лидеров по <br></br> объемам продаж 
                электрооборудования и оказания <br></br> полного спектра услуг, связанных с изготовлением, <br></br> поставкой и продажей 
                электротехнического <br></br> оборудования различного назначения.</p>
            </div>
            <div className="information-2__item-items">
              <p>Растём и развиваемся с</p>
              <h2 className="information-2__item-items__year">2012</h2>
            </div>
          </div>
          <div className="information-2__item">
            <p>Преимущества сотрудничества</p>
            <div className="information-2__item-accordeons">
              <button id="information-2__accordeon">Качество оборудования</button>
              <img src={plus}></img>
            </div>
            <div className="information-2__item-accordeons">
              <button id="information-2__accordeon">Качество оборудования</button>
              <img src={plus}></img>
            </div>
            <div className="information-2__item-accordeons">
              <button id="information-2__accordeon">Качество оборудования</button>
              <img src={plus}></img>
            </div>
            <div className="information-2__item-accordeons">
              <button id="information-2__accordeon">Качество оборудования</button>
              <img src={plus}></img>
            </div>
            <div className="information-2__item-accordeons">
              <button id="information-2__accordeon">Качество оборудования</button>
              <img src={plus}></img>
            </div>
          </div>
        </div>

        <div className="main-page__information-3">
          <div className="main-page__information-3__items">
            <div className="main-page__information-3__items__item">
              <h2 id="information-3__first-title">
              Трансформаторные <br></br>подстанции
              </h2>
              <ul>
                <li> Бетонная комплектная трансформаторная подстанция БКТП 160-10(6)/0,4-2*250-10(6)/0,4 кВа</li>
                <li> Блочная комплектная трансформаторная подстанция БКТП 100-10(6)/0,4 кВа-2*250-10(6)/0,4 кВ</li>
                <li> Комплектная трансформаторная подстанция КТП 25-6(10)/0,4-160-6(10)/0,4 КВА (сельчанка)</li>
                <li> Комплектная трансформаторная подстанция наружной установки КТПН 25-10(6)/0,4 кВа- 2500-10(6)/0,4 кВа</li>
                <li> Комплектная трансформаторная подстанция городского типа КТПГ 25-10(6)/0,4 кВа-2500-10(6)/0,4 кВа</li>
                <li> Блочно-модульное здание(кожух) из сэндвич-панелей для дизель-генераторных установок.</li>
                <li> Комплектная трансформаторная подстанция внутренней установки.</li>
              </ul>
            </div>
            <div className="main-page__information-3__items__item">
              <h2>
              Высоковольтные <br/> распределительные <br/>устройства
              </h2>
              <ul>
                <li> Камеры сборные серии КСО-2-10; КСО-366;КСО-292</li>
                <li> Ячейка высоковольтная серии ЯКНО, КРУ RM6 HMH-12(24), КРН</li>
              </ul>
            </div>
            <div className="main-page__information-3__items__item">
              <h2>
              Трансформаторные <br></br>подстанции
              </h2>
              <ul>
                <li> Бетонная комплектная трансформаторная подстанция БКТП 160-10(6)/0,4-2*250-10(6)/0,4 кВа</li>
                <li> Блочная комплектная трансформаторная подстанция БКТП 100-10(6)/0,4 кВа-2*250-10(6)/0,4 кВ</li>
                <li> Комплектная трансформаторная подстанция КТП 25-6(10)/0,4-160-6(10)/0,4 КВА (сельчанка)</li>
                <li> Комплектная трансформаторная подстанция наружной установки КТПН 25-10(6)/0,4 кВа- 2500-10(6)/0,4 кВа</li>
                <li> Комплектная трансформаторная подстанция городского типа КТПГ 25-10(6)/0,4 кВа-2500-10(6)/0,4 кВа</li>
                <li> Блочно-модульное здание(кожух) из сэндвич-панелей для дизель-генераторных установок.</li>
                <li> Комплектная трансформаторная подстанция внутренней установки.</li>
              </ul>
            </div>
            <div className="main-page__information-3__items__item">
              <h2>
              Трансформаторные <br></br>подстанции
              </h2>
              <ul>
                <li> Бетонная комплектная трансформаторная подстанция БКТП 160-10(6)/0,4-2*250-10(6)/0,4 кВа</li>
                <li> Блочная комплектная трансформаторная подстанция БКТП 100-10(6)/0,4 кВа-2*250-10(6)/0,4 кВ</li>
                <li> Комплектная трансформаторная подстанция КТП 25-6(10)/0,4-160-6(10)/0,4 КВА (сельчанка)</li>
                <li> Комплектная трансформаторная подстанция наружной установки КТПН 25-10(6)/0,4 кВа- 2500-10(6)/0,4 кВа</li>
                <li> Комплектная трансформаторная подстанция городского типа КТПГ 25-10(6)/0,4 кВа-2500-10(6)/0,4 кВа</li>
                <li> Блочно-модульное здание(кожух) из сэндвич-панелей для дизель-генераторных установок.</li>
                <li> Комплектная трансформаторная подстанция внутренней установки.</li>
              </ul>
            </div>
            <div className="main-page__information-3__items__image"> 
              <p>Продукция компании</p>
              <img src={production}></img>
            </div>
          </div>
          <div className="main-page__information-3__show-all-wrapper">
            <button>Показать все</button>
            <img src={arrowDownBlue}></img>
          </div>
        </div>

        <div className="main-page__information-4">
          <div className="main-page__information-4__item">
            <h2>Большой спектр продукции</h2>
            <p>Основными направлениями деятельности компании «Электроснаб-ЕМ» <br/>являются:</p>
            <div className="main-page__information-4__item__points">
              <div className="main-page__information-4__item__points-item">
                <h1>1</h1>
                <p>проектирование, разработка, изготовление электротехнического <br/> оборудования</p>
              </div>
            </div>
            <div className="main-page__information-4__item__points">
              <div className="main-page__information-4__item__points-item">
                <h1>2</h1>
                <p>проектирование электроснабжение и электрификации объектов <br/> промышленного и гражданского строительства</p>
              </div>
            </div>
            <div className="main-page__information-4__item__points">
              <div className="main-page__information-4__item__points-item">
                <h1>3</h1>
                <p>проведение строительно-монтажных <br/>работ</p>
              </div>
            </div>
            <div className="main-page__information-4__show-all">
            <button>Смотреть услуги</button>
            <img src={arrowRightBlue}></img>
          </div>
          </div>

        </div>
        <div className="main-page__information-4__item__images">
            <img src={star1}></img>
            <img src={star2}></img>
            <img src={star3}></img>
        </div>
    </div>
  );
}

export default App;
