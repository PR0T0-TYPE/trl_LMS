import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonField from 'src/library/Training/ButtonField';
import PageHeader from 'src/library/heading/pageHeader';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
        navigate('/DashboardLMS');
  };

  return (
    <div>
      <PageHeader heading='Login Page'/>
      <ButtonField ClickItem={handleClickLogin} Label={'Login'} />
    </div>
  );
};

export default LoginPage;
