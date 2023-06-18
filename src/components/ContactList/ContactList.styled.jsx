import styled from '@emotion/styled';

export const ContList = styled.ul`
  display: flex;
  width: 400px;
  margin-left: 4px;
  margin-bottom: 12px;
  padding: 8px;
  flex-direction: column;
  gap: 4px;

`;

export const ContItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 4px;
  gap: 4px;
`;

export const DeleteButton = styled.button`
  width: 80px;
  padding: 4px 12px;

  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-align: center;

  cursor: pointer;

  background-color: #4D5AE5;
  color: #F4F4FD;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: #404BBF;
	}
`;