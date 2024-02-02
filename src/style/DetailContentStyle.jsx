import styled from "styled-components";

export const DetailContentArticle = styled.article`
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60rem;
  min-height: 35rem;
  border-radius: 3rem;
`;
export const DetailContentHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
`;
export const IdImageNicknameWhen = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const DetailContentIdImageNickname = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;
export const DetailContentIdImage = styled.div`
  height: 6rem;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
  border-radius: 5rem;
  background-color: white;
`;
export const DetailContentWhen = styled.div`
  font-size: 1.2rem;
  margin: 0.5rem;
`;

export const DetailContentNickname = styled.div`
  width: 10rem;
  font-size: 2rem;
`;
export const DetailContentToWho = styled.div`
  width: 50rem;
  font-size: 1.5rem;
  padding: 0.5rem;
`;
export const DetailContentText = styled.div`
  background-color: black;
  color: white;
  font-size: 1.5;
  width: 50rem;
  min-height: 15rem;
  padding: 2rem;
  border-radius: 2rem;
`;

export const DetailContentButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  width: 50rem;
  gap: 2rem;
  margin: 1rem 0rem 0rem 0rem;
`;
export const BlackSmallButton = styled.button`
  width: 4rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 900;
`;
