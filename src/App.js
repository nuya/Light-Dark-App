import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";
import Drop from "./ImageChange.jsx";
import "./style.css";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
`;

const cardStyle = {
  background: 'white',
  width: '90vw',
  height: '475px',
  margin: '0 auto',
  borderRadius: '20px',
  boxShadow: '0 19px 38px rgba(0,0,0,0.08), 0 15px 12px rgba(0,0,0,0.08)',
  position: 'relative',
  top: '100px',
};

const cardContent = {
  background: '#f8f8f8',
  width: '90%',
  height: '20%',
  margin: '20px auto',
  borderRadius: '20px',
};

const buttonStyle = {
  position: 'absolute',
  top: '10%',
  right: '10%',
  padding: '10px 20px',
  boxShadow: '0 19px 38px rgba(0,0,0,0.08), 0 15px 12px rgba(0,0,0,0.08)',
  borderRadius: '20px',
  border: 'none'
};

const h1Style = {
  paddingTop: '40px',
  textAlign: 'center'
};


const App = () => {
  const themeState = useTheme();

  return (
    <Wrapper>
    <div>
      <Drop />
    </div>
      <div style={cardStyle}>
        <h1 style={h1Style}>My App</h1>
        <div style={cardContent}></div>
        <div style={cardContent}></div>
        <div style={cardContent}></div>
      </div>
      <button style={buttonStyle} onClick={() => themeState.toggle()}>
        {themeState.dark ? "Light Mode" : "Dark Mode"}
      </button>
    </Wrapper>
  );
};


export default App;
