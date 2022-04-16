import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    align-items: center;
    flex-direction: column;
  }
`;
