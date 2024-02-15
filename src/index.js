import React from 'react'
import ReactDom from 'react-dom/client'

import App from './app'

const divRoot = document.getElementById('root');
const root = ReactDom.createRoot(divRoot)

root.render(<App/>);
