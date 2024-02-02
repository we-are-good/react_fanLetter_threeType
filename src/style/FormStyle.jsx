import styled from "styled-components";
export const ArticleBox = styled.div`
  width: 40rem;
  border: 5px solid green;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  padding: 2rem 4rem;
  margin: 0rem, 0rem, 3rem, 0rem;
  background-color: white;
  color: black;
  gap: 0.3rem;
`;

export const CardIndex = styled.div`
  background-color: white;
  height: 3rem;
  font-size: ${(props) => props.fontsize || "2rem"};
`;

export const InputIndex = styled.input`
  background-color: white;
  height: 2rem;
  width: 30rem;
  font-size: ${(props) => props.sizeOfFont || "2rem"};
`;

export const EnrollmentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ab86a;
  color: black;
  font-weight: 600;
  height: 2.3rem;
  width: 9rem;
  border-radius: 3rem;
`;
