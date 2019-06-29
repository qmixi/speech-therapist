import styled from 'styled-components';

export const Stage = styled.div`
  padding: 20px 20px;
  min-height: 250px;
  position: relative;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.gray};
  }

  ${({ theme }) => theme.mq.desktop} {
    padding-left: 40px;
  }

  &:hover {
    & div {
      transform: scale(1.2) translateY(-50%);
    }
  }
`;

export const StageIcon = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  background-image: url(${({ src }) => src});
  background-size: 100%;
  transition: all 0.2s ease-out;
  margin: auto;

  ${({ theme }) => theme.mq.desktop} {
    width: 105px;
    height: 105px;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
`;
