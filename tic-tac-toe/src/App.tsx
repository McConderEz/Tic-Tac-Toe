import { Box, AppBar, Button } from "@mui/material";
import Game from "./pages/TicTacToe/Game";

export function App() {
  return (
    <div>
      <Header />
      <Game />
    </div>
  );
}

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <div className="flex flex-row items-center justify-between py-2 px-3">
          <span className="text-2xl">TicTacToe</span>
          <Button color="inherit">Login</Button>
        </div>
      </AppBar>
    </Box>
  );
}
