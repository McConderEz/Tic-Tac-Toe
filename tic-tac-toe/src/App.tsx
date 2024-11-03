import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./index.css";
import Board from "./pages/User";

export function App() {
  return (
    <div>
      <Header />
      <Board />
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
