import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero-image.jpg';
import uiux from '../../assets/images/uiux-category.svg';
import motion from '../../assets/images/motion-animation-category.svg';
import frontend from '../../assets/images/frontend-category.svg';
import backend from '../../assets/images/backend-category.svg';
import uillustrator from '../../assets/images/uiux-category.svg';
import grafigdizayn from '../../assets/images/grafigdizayn-category.svg';
import mobile from '../../assets/images/mobile-category.png';
import defaultelonimg from '../../assets/images/default-elon-img.png';
import elonberish from '../../assets/images/elon-berish.svg';
import sheriktoping from '../../assets/images/sherik-toping.svg';
import ishniboshlang from '../../assets/images/ishni-boshlang.svg';
import './Main.scss';

export default function Main() {
  return (
    <div className='main'>
      <div className="main__hero">
        <div className="container">
          <div className="main__hero__main">
            <h1>Assalomu Alaykum</h1>
            <p>Siz bu yerda ish berishingiz va ish olishingiz mumkun</p>
            <Link to="/company/about">Ko'proq bilish</Link>
          </div>
          <div className="main__hero__img-wrapper">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <section className="main__category">
          <h2>Kategoriyalar</h2>
          <div className='main__category-items'>
            <Link to="/">
              <article className='main__category-item'>
                <img src={uiux} alt="" />
                <h1>Ux/ Ui dizayner</h1>
              </article>
            </Link>
            <Link to="/">
              <article className='main__category-item'>
                <img src={motion} alt="" />
                <h1>Motion Animator</h1>
              </article>
            </Link>
            <Link to="/">
              <article className='main__category-item'>
                <img src={frontend} alt="" />
                <h1>Front-end dasturchi</h1>
              </article>
            </Link>
            <Link to="/">
              <article className='main__category-item'>
                <img src={backend} alt="" />
                <h1>Back-end dasturchi</h1>
              </article>
            </Link>
            <Link to="/">
              <article className='main__category-item'>
                <img src={uillustrator} alt="" />
                <h1>Illustrator</h1>
              </article>
            </Link>
            <Link to="/">
              <article className='main__category-item'>
                <img src={grafigdizayn} alt="" />
                <h1>Grafik dizayner</h1>
              </article>
            </Link>
            <Link to="/">
              <article className='main__category-item'>
                <img src={mobile} alt="" />
                <h1>Mobile dasturchi</h1>
              </article>
            </Link>
          </div>

        </section>
        <section className='main__latest__announcement'>
          <h2>So’nggi qo’shilgan</h2>
          <div className='main__latest__announcement-items'>
            <Link to="/">
              <article className='main__latest__announcement-item'>
                <div className='main__latest__announcement-item-img'>
                  <img src={defaultelonimg} alt="" />
                </div>
                <div className='main__latest__announcement-item-main'>
                  <div className='main__latest__announcement-item-main-top'>
                    <div className='main__latest__announcement-item-main-top-havework'>
                      <span>Ish bor</span>
                    </div>
                    <div className='main__latest__announcement-item-main-top-information'>
                      <span>Full time</span>
                      <span>Junior</span>
                      <span>Toshkent</span>
                    </div>
                  </div>
                  <div className='main__latest__announcement-item-main-bottom'>
                    <h1>Ux/Ui dizayner kerak</h1>
                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <strong>$200-$300</strong>
                  </div>
                </div>
              </article>
            </Link>
            <Link to="/">
              <article className='main__latest__announcement-item'>
                <div className='main__latest__announcement-item-img'>
                  <img src={defaultelonimg} alt="" />
                </div>
                <div className='main__latest__announcement-item-main'>
                  <div className='main__latest__announcement-item-main-top'>
                    <div className='main__latest__announcement-item-main-top-havework'>
                      <span>Ish bor</span>
                    </div>
                    <div className='main__latest__announcement-item-main-top-information'>
                      <span>Full time</span>
                      <span>Junior</span>
                      <span>Toshkent</span>
                    </div>
                  </div>
                  <div className='main__latest__announcement-item-main-bottom'>
                    <h1>Ux/Ui dizayner kerak</h1>
                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <strong>$200-$300</strong>
                  </div>
                </div>

              </article>
            </Link>
            <Link to="/">
              <article className='main__latest__announcement-item'>
                <div className='main__latest__announcement-item-img'>
                  <img src={defaultelonimg} alt="" />
                </div>
                <div className='main__latest__announcement-item-main'>
                  <div className='main__latest__announcement-item-main-top'>
                    <div className='main__latest__announcement-item-main-top-havework'>
                      <span>Ish bor</span>
                    </div>
                    <div className='main__latest__announcement-item-main-top-information'>
                      <span>Full time</span>
                      <span>Junior</span>
                      <span>Toshkent</span>
                    </div>
                  </div>
                  <div className='main__latest__announcement-item-main-bottom'>
                    <h1>Ux/Ui dizayner kerak</h1>
                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <strong>$200-$300</strong>
                  </div>
                </div>

              </article>
            </Link>
            <Link to="/">
              <article className='main__latest__announcement-item'>
                <div className='main__latest__announcement-item-img'>
                  <img src={defaultelonimg} alt="" />
                </div>
                <div className='main__latest__announcement-item-main'>
                  <div className='main__latest__announcement-item-main-top'>
                    <div className='main__latest__announcement-item-main-top-havework'>
                      <span>Ish bor</span>
                    </div>
                    <div className='main__latest__announcement-item-main-top-information'>
                      <span>Full time</span>
                      <span>Junior</span>
                      <span>Toshkent</span>
                    </div>
                  </div>
                  <div className='main__latest__announcement-item-main-bottom'>
                    <h1>Ux/Ui dizayner kerak</h1>
                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <strong>$200-$300</strong>
                  </div>
                </div>

              </article>
            </Link>
          </div>
        </section>
        <section className='main__announcement'>
          <div className='main__announcement-title'>
            <h2>E’lonlar</h2>
            <Link to="/">Barchasi</Link>
          </div>
          <div className='main__latest__announcement-items'>
            <Link to="/">
              <article className='main__latest__announcement-item'>
                <div className='main__latest__announcement-item-img'>
                  <img src={defaultelonimg} alt="" />
                </div>
                <div className='main__latest__announcement-item-main'>
                  <div className='main__latest__announcement-item-main-top'>
                    <div className='main__latest__announcement-item-main-top-havework'>
                      <span>Ish bor</span>
                    </div>
                    <div className='main__latest__announcement-item-main-top-information'>
                      <span>Full time</span>
                      <span>Junior</span>
                      <span>Toshkent</span>
                    </div>
                  </div>
                  <div className='main__latest__announcement-item-main-bottom'>
                    <h1>Ux/Ui dizayner kerak</h1>
                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <strong>$200-$300</strong>
                  </div>
                </div>
              </article>
            </Link>
            <Link to="/">
              <article className='main__latest__announcement-item'>
                <div className='main__latest__announcement-item-img'>
                  <img src={defaultelonimg} alt="" />
                </div>
                <div className='main__latest__announcement-item-main'>
                  <div className='main__latest__announcement-item-main-top'>
                    <div className='main__latest__announcement-item-main-top-havework'>
                      <span>Ish bor</span>
                    </div>
                    <div className='main__latest__announcement-item-main-top-information'>
                      <span>Full time</span>
                      <span>Junior</span>
                      <span>Toshkent</span>
                    </div>
                  </div>
                  <div className='main__latest__announcement-item-main-bottom'>
                    <h1>Ux/Ui dizayner kerak</h1>
                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <strong>$200-$300</strong>
                  </div>
                </div>
              </article>
            </Link>
            <Link to="/">
              <article className='main__latest__announcement-item'>
                <div className='main__latest__announcement-item-img'>
                  <img src={defaultelonimg} alt="" />
                </div>
                <div className='main__latest__announcement-item-main'>
                  <div className='main__latest__announcement-item-main-top'>
                    <div className='main__latest__announcement-item-main-top-havework'>
                      <span>Ish bor</span>
                    </div>
                    <div className='main__latest__announcement-item-main-top-information'>
                      <span>Full time</span>
                      <span>Junior</span>
                      <span>Toshkent</span>
                    </div>
                  </div>
                  <div className='main__latest__announcement-item-main-bottom'>
                    <h1>Ux/Ui dizayner kerak</h1>
                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <strong>$200-$300</strong>
                  </div>
                </div>
              </article>
            </Link>
            <Link to="/">
              <article className='main__latest__announcement-item'>
                <div className='main__latest__announcement-item-img'>
                  <img src={defaultelonimg} alt="" />
                </div>
                <div className='main__latest__announcement-item-main'>
                  <div className='main__latest__announcement-item-main-top'>
                    <div className='main__latest__announcement-item-main-top-havework'>
                      <span>Ish bor</span>
                    </div>
                    <div className='main__latest__announcement-item-main-top-information'>
                      <span>Full time</span>
                      <span>Junior</span>
                      <span>Toshkent</span>
                    </div>
                  </div>
                  <div className='main__latest__announcement-item-main-bottom'>
                    <h1>Ux/Ui dizayner kerak</h1>
                    <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                    <strong>$200-$300</strong>
                  </div>
                </div>
              </article>
            </Link>
          </div>

        </section>
        <section className='main__howitwork'>
          <h2>How it works?</h2>
          <div className='main__howitwork-items'>
            <Link to="/">
              <article className='main__howitwork-item'>
                <img src={elonberish} alt="" />
                <h1>E’lon bering</h1>
                <p>Akkauntizgizdan e’lon berish tugmasini bosing va oz e’loningizni bering</p>
              </article>
            </Link>
            <Link to="/">
              <article className='main__howitwork-item'>
                <img src={sheriktoping} alt="" />
                <h1>Sherigingizni toping</h1>
                <p>E’lon berganingizdan so’ng sherigingiz sizni o’zi topadi</p>
              </article>
            </Link>
            <Link to="/">
              <article className='main__howitwork-item'>
                <img src={ishniboshlang} alt="" />
                <h1>Ishni boshlang</h1>
                <p>Sherigingiz sizni topgandan so’ng ishni kelishing va ishni boshlang</p>
              </article>
            </Link>
          </div>
        </section>
      </div>

    </div>
  )
}
