import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider } from '@apollo/client'
import client from './apollo-client.js'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </Provider>
)
