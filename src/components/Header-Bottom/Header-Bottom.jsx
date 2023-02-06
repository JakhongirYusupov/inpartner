import './Header-Bottom.scss';
import { CgOptions } from 'react-icons/cg';
import { GoCheck } from 'react-icons/go';
import moneyImg from '../../assets/images/headerBottom-money-img.svg';
import desktopImg from '../../assets/images/headerBottom-desktop-img.svg';
import morterboardImg from '../../assets/images/headerBottom-morterboard-img.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function HeaderBottom() {
  const [isactiveNavBar, setisactiveNavBar] = useState(false);
  const [isactiveKategoryBar, setisactiveKategoryBar] = useState(false);
  const [isSelectPriceCheckbox, setisSelectPriceCheckbox] = useState(false);
  const [isSelectActionCheckbox, setisSelectActionCheckbox] = useState(false);
  const [isSelectProfessionCheckbox, setisSelectProfessionCheckbox] = useState(false);

  return (
    <div className='headerBottom'>
      <div className="container">
        <div className="headerBottom-category">
          <div className="headerBottom-category-item" onClick={(() => setisactiveKategoryBar((e) => e === "Maoshni tanlang" ? false : "Maoshni tanlang"))}>
            <img src={moneyImg} alt="error" />
            <span>Maoshni tanlang</span>
            {
              isactiveKategoryBar === "Maoshni tanlang" ?
                <form action="" className="headerBottom-category-item-bar">
                  {
                    ["0-$90", "$100-$290", "$300-$490", "$500-$790", "$800-$1500", "$1500+"].map((el) => {
                      return <div key={uuidv4()} className="headerBottom-category-item-bar-item"
                        onClick={(() => setisSelectPriceCheckbox((e) => e === el ? false : el))}>
                        {
                          isSelectPriceCheckbox === el ?
                            <div className='checkbox-checked'><GoCheck className='check-icon' /></div>
                            : <div></div>
                        }
                        <span>{el}</span>
                      </div>
                    })
                  }
                </form>
                : null
            }
          </div>
          <div className="headerBottom-category-item" onClick={(() => setisactiveKategoryBar((e) => e === "Holatni tanlang" ? false : "Holatni tanlang"))}>
            <img src={desktopImg} alt="error" />
            <span>Holatni tanlang</span>
            {
              isactiveKategoryBar === "Holatni tanlang" ?
                <form action="" className="headerBottom-category-item-bar">
                  {
                    ["Online", "Full time", "Part time", "Offline"].map((el) => {
                      return <div key={uuidv4()} className="headerBottom-category-item-bar-item"
                        onClick={(() => setisSelectActionCheckbox((e) => e === el ? false : el))}>
                        {
                          isSelectActionCheckbox === el ?
                            <div className='checkbox-checked'><GoCheck className='check-icon' /></div>
                            : <div></div>
                        }
                        <span>{el}</span>
                      </div>
                    })
                  }
                </form>
                : null
            }
          </div>
          <div className="headerBottom-category-item" onClick={(() => setisactiveKategoryBar((e) => e === "Sohani tanlang" ? false : "Sohani tanlang"))}>
            <img src={morterboardImg} alt="error" />
            <span>Sohani tanlang</span>
            {
              isactiveKategoryBar === "Sohani tanlang" ?
                <form action="" className="headerBottom-category-item-bar">
                  {
                    ["Ux/Ui dizayn", "Grafik dizayn", "illustrator", "Moution animation", "Front-end", "Back-end"].map((el) => {
                      return <div key={uuidv4()} className="headerBottom-category-item-bar-item"
                        onClick={(() => setisSelectProfessionCheckbox((e) => e === el ? false : el))}>
                        {
                          isSelectProfessionCheckbox === el ?
                            <div className='checkbox-checked'><GoCheck className='check-icon' /></div>
                            : <div></div>
                        }
                        <span>{el}</span>
                      </div>
                    })
                  }
                </form>
                : null
            }
          </div>
        </div>
        <Link to="/" className='headerBottom-newCummer'>
          <span>Yangi qo'shilganlar</span>
        </Link>
      </div>
      <div className='headerBottom-bar' onClick={(() => setisactiveNavBar((e) => e ? false : true))}>
        <CgOptions className='headerBottom-bar-icon' />
        <span>Kategoriyalar</span>
      </div>
      {
        isactiveNavBar ?
          <div className='headerBottom-bar-navbar'>
            <div className="headerBottom-category-item" onClick={(() => setisactiveKategoryBar((e) => e === "Maoshni tanlang" ? false : "Maoshni tanlang"))}>
              <img src={moneyImg} alt="error" />
              <span>Maoshni tanlang</span>
              {
                isactiveKategoryBar === "Maoshni tanlang" ?
                  <form action="" className="headerBottom-category-item-bar">
                    {
                      ["0-$90", "$100-$290", "$300-$490", "$500-$790", "$800-$1500", "$1500+"].map((el) => {
                        return <div key={uuidv4()} className="headerBottom-category-item-bar-item"
                          onClick={(() => setisSelectPriceCheckbox((e) => e === el ? false : el))}>
                          {
                            isSelectPriceCheckbox === el ?
                              <div className='checkbox-checked'><GoCheck className='check-icon' /></div>
                              : <div></div>
                          }
                          <span>{el}</span>
                        </div>
                      })
                    }
                  </form>
                  : null
              }
            </div>
            <div className="headerBottom-category-item" onClick={(() => setisactiveKategoryBar((e) => e === "Holatni tanlang" ? false : "Holatni tanlang"))}>
              <img src={desktopImg} alt="error" />
              <span>Holatni tanlang</span>
              {
                isactiveKategoryBar === "Holatni tanlang" ?
                  <form action="" className="headerBottom-category-item-bar">
                    {
                      ["Online", "Full time", "Part time", "Offline"].map((el) => {
                        return <div key={uuidv4()} className="headerBottom-category-item-bar-item"
                          onClick={(() => setisSelectActionCheckbox((e) => e === el ? false : el))}>
                          {
                            isSelectActionCheckbox === el ?
                              <div className='checkbox-checked'><GoCheck className='check-icon' /></div>
                              : <div></div>
                          }
                          <span>{el}</span>
                        </div>
                      })
                    }
                  </form>
                  : null
              }
            </div>
            <div className="headerBottom-category-item" onClick={(() => setisactiveKategoryBar((e) => e === "Sohani tanlang" ? false : "Sohani tanlang"))}>
              <img src={morterboardImg} alt="error" />
              <span>Sohani tanlang</span>
              {
                isactiveKategoryBar === "Sohani tanlang" ?
                  <form action="" className="headerBottom-category-item-bar">
                    {
                      ["Ux/Ui dizayn", "Grafik dizayn", "illustrator", "Moution animation", "Front-end", "Back-end"].map((el) => {
                        return <div key={uuidv4()} className="headerBottom-category-item-bar-item"
                          onClick={(() => setisSelectProfessionCheckbox((e) => e === el ? false : el))}>
                          {
                            isSelectProfessionCheckbox === el ?
                              <div className='checkbox-checked'><GoCheck className='check-icon' /></div>
                              : <div></div>
                          }
                          <span>{el}</span>
                        </div>
                      })
                    }
                  </form>
                  : null
              }
            </div>
          </div>
          : null
      }
    </div >
  )
}
