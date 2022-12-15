import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from 'styled-components';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        
        <App/>

    </div>

  
);

const Main = styled.div`
    width: 1024px;
`


const ImageMobile = styled.img`
    width: 100%;
`