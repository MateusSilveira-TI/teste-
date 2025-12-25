import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
 background-color: #333;
 color: #fff;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 0 60px;

  & h1 {
    font-size: 24px;
    color: #ada4a4;
  }
  & nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    
  }
  & nav ul li a {
    color: #b11414;
    
  }

 
`;





const Header = () => {
  return (
    <HeaderContainer> 
    <header>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          
        </ul>
      </nav>
    </header>
    </HeaderContainer>
  );
};

export default Header;  