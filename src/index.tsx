import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import "css/App.css"
/* Theme */
import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';
import GlobalStyle from 'commons/style/global-style';
import Counter from 'counter';
/* Context Providers */
import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';

import App from 'components/App';

const root = document.getElementById('root')!;
const container = ReactDOMClient.createRoot(root);

container.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsProvider>
        <CartProvider>
          <App />
          <Counter/>
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </StrictMode>
);
