import React, {useEffect} from 'react';
import RootNavigator from './src/navigation';
import {createStore, Provider} from './src/stores/createStore';

const store = createStore();

function App(): JSX.Element {
  useEffect(() => {
    async function bootstrap() {
      await store.bootstrap();
    }
    bootstrap();
  }, []);
  return (
    <Provider value={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
