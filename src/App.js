import logo from './logo.svg';
import './App.css';
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider >
      <div className="App">
        <header className="App-header">
          <Button colorScheme='blue'>Button</Button>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
