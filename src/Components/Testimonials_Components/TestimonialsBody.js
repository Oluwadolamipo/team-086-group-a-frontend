import React from 'react';
import styled from 'styled-components';
import TestBodyTitle from './TestBodyTitle';
import TestThumbnailContainer from './TestThumbnailsContainer';

export default class TestimonialsBody extends React.Component {
  render() {
    return (
      <BodyStyle>
        <TestBodyTitle />
        <TestThumbnailContainer />
      </BodyStyle>
    );
  }
}
const BodyStyle = styled.h1`
  text-align: center;
`;
//#f96058
