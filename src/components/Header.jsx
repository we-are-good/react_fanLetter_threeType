import GlobalStyle from "../GlobalStyles";
import styled from "styled-components";
import { HeadPart } from "../style/HeaderStyle";
import { TitleName } from "../style/HeaderStyle";
import { Banner } from "../style/HeaderStyle";
import { artistes } from "../redux/config/configStore";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();

  const selectedArtistName = useSelector((state) => {
    console.log(state.HeaderArtistSelection.selectedArtistName);
    return state.HeaderArtistSelection.selectedArtistName;
  });

  const MemberName = styled.button`
    background-color: ${(props) =>
      props.name === selectedArtistName ? "blue" : "darkgreen"};
    color: white;
    border-radius: 0.5rem;
    font-size: 2rem;
  `;

  return (
    <>
      <GlobalStyle />
      <HeadPart>
        <TitleName>팬레터 콜렉션</TitleName>

        <Banner>
          <MemberName
            name={artistes[0]}
            onClick={() => {
              dispatch({ type: "IU" });
            }}
          >
            {artistes[0]}
          </MemberName>

          <MemberName
            name="SIA"
            onClick={() => {
              dispatch({
                type: "SIA",
              });
            }}
          >
            {artistes[1]}
          </MemberName>

          <MemberName
            name={artistes[2]}
            onClick={() => {
              dispatch({
                type: artistes[2],
              });
            }}
          >
            {artistes[2]}
          </MemberName>

          <MemberName
            name={artistes[3]}
            onClick={() => {
              dispatch({
                type: artistes[3],
              });
            }}
          >
            {artistes[3]}
          </MemberName>
        </Banner>
      </HeadPart>
    </>
  );
}

export default Header;
