import { FC } from 'react';
import PropTypes from 'prop-types';
import { styled, Typography, Box, Divider, useTheme, Container } from '@mui/material';
import { HeadingStyle } from '../StyledComponents/CommonStyled';
import { useNavigate } from 'react-router';

interface PageHeaderProps {
  heading: string;
}

const RootWrapper = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.spacing(0)};
        margin-bottom: ${theme.spacing(2)};
        padding-left: 250px; 
        padding-right: 20px; 
        font-size: 30px;
        background-color: #009DD1;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 50px;
        width: 100%;
`
);

const PageHeader: FC<PageHeaderProps> = ({ heading }) => {
  return (
    <RootWrapper display="flex" alignItems="center">
      <HeadingStyle>{heading}</HeadingStyle>
    </RootWrapper>
  );
};

PageHeader.propTypes = {
  heading: PropTypes.string,
};

export default PageHeader;
