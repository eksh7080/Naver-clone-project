/**
 * 파일명: GlobalNav.tsx
 * 설명: 헤더 글로벌 네비게이션 컴포넌트
 */

import Link from "next/link";
import useUrlPathNameCheck from "hooks/useUrlPathNameCheck";
import SearchIcon from "components/icon/SearchIcon";
import { activeCheck } from "utils/Header";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setCurrentNav: Dispatch<SetStateAction<string>>;
}

const GlobalNav = ({ setCurrentNav }: IProps) => {
  const globalNavigationList = [
    { href: "/comic", name: "홈" },
    { href: "/webtoon", name: "웹툰" },
    { href: "/bestChallenge", name: "베스트도전" },
    { href: "/challenge", name: "도전만화" },
  ];

  return (
    <>
      <div className="top">
        <nav>
          <ul>
            <li>
              <Link href="/comic">
                <span>NAVER</span> 웹툰
              </Link>
            </li>
            <li>
              <div className="searchBox">
                <button type="button">
                  <SearchIcon />
                </button>
                <input
                  type="text"
                  placeholder="제목/작가로 검색할 수 있습니다."
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bottom">
        <nav>
          <ul>
            {globalNavigationList.map(({ href, name }) => (
              <li
                key={name}
                className={activeCheck(href) ? "active" : ""}
                onClick={() => setCurrentNav(href)}
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default GlobalNav;
