import { ChakraProvider, Box, theme } from '@chakra-ui/react'
import TopBar from './components/TopBar'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        maxWidth="8xl"
        margin="auto"
        gap={5}
        p={5}
      >
        <TopBar />
        <TodoList />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  )
}

export default App
