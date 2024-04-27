import React, { useState } from "react";
import "../../public/css/styles.css"; // 스타일 시트 임포트

const Ex2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="app">
      {/* 메뉴 열기 버튼 */}
      <button onClick={toggleMenu} className="open-menu-btn">
        메뉴 열기
      </button>

      {/* 전체 화면 메뉴 */}
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <button onClick={toggleMenu} className="close-menu-btn">
          메뉴 닫기
        </button>
      </div>

      {/* 모달 열기 버튼 */}
      <button onClick={toggleModal} className="open-modal-btn">
        모달 열기
      </button>

      {/* 모달 */}
      <div className={`modal ${isModalOpen ? "open" : ""}`}>
        <button onClick={toggleModal} className="close-modal-btn">
          모달 닫기
        </button>
      </div>
    </div>
  );
};

export default Ex2;