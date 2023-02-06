import { BiSearch } from 'react-icons/bi';
import defaultProfileImg from '../../assets/images/profile-default-image.svg';
import smile from '../../assets/images/chat_smile.svg';
import telegramIcon from '../../assets/images/chat_telegram_icon.svg';
import { HiOutlineDownload } from 'react-icons/hi';
import './Chat.scss';
import { useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function ChatPage() {
  const [scrollWidth, setscrollWidth] = useState(false);
  const [selectedUser, setselectedUser] = useState(false);

  window.addEventListener("resize", (e) => {
    const { innerWidth } = window;
    setscrollWidth(innerWidth);
  })

  return (
    <div className="chat">
      <div className="container">
        <div className="chat-title">
          {
            selectedUser && scrollWidth < 857 ?
              <div className='chat-backToContacts-circle'
                onClick={(() => setselectedUser(false))}>
                <IoMdArrowRoundBack className='chat-backToContacts-circle-icon' />
              </div>
              : <h2>Xabarlar</h2>
          }
        </div>
        <div className="chat-main">
          <div className="chat-main-contacts"
            style={(selectedUser && scrollWidth < 857) ? { "display": "none" } : null}>
            <form action="" className="chat-main-contacts-search" onSubmit={((e) => e.preventDefault())}>
              <input required type="text" placeholder='Qidirish' minLength={3} maxLength={20} />
              <button type='submit'><BiSearch className="chat-main-contacts-search_Icon" /></button>
            </form>
            <div className="chat-main-contacts-list">
              <ul className="chat-main-contacts-list-wrapper">
                <li className="chat-main-contacts-list-item"
                  onClick={(() => setselectedUser(true))}>
                  <div className="chat-main-contacts-list-item-Img">
                    <img src={defaultProfileImg} alt="error" />
                  </div>
                  <div className="chat-main-contacts-list-item-main">
                    <h3>Julia Black</h3>
                    <p>Lorem, ipsum doloasifharuhgaerhaueahreguhaghearguarer sit amet consectetur adipisicing elit. Necessitatibus, sit.
                    </p>
                  </div>
                  <div className="chat-main-contacts-list-item-messageTime">
                    <span>11:21</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="chat-main-message" style={(selectedUser && scrollWidth < 857) ? { "display": "flex" } : null}>
            <div className="chat-main-message-messaging">
              <div className="chat-main-message-messaging-Item-wrapper">
                <div className="chat-main-message-messaging-Item">
                  <div className="chat-main-message-messaging-ItemImg">
                    <img src={defaultProfileImg} alt="" />
                  </div>
                  <div className="chat-main-message-messaging-Item-message">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div>
                      <span>11:11</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-main-message-messaging-Item-wrapper ownMessage">
                <div className="chat-main-message-messaging-Item">
                  <div className="chat-main-message-messaging-Item-message">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div>
                      <span>11:11</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form action="" className="chat-main-message-form" >
              <div className="chat-main-message-form-actions">
                <img src={smile} alt="smile" />
                <input required className="chat-main-message-form-actions-inputText" type="text" placeholder='Habar yozing' minLength={1} maxLength={500} />
                <label htmlFor="file"><HiOutlineDownload className='chat-main-message-form-actions-downloadIcon' /></label>
                <input id='file' type="file" />
              </div>
              <button type='submit' className="chat-main-message-form-submitButton"><img src={telegramIcon} className="chat-main-message-form-submitButton-icon" alt='error' /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
