import "./App.css"
import CoffeeshopSearchPage from "./components/coffeeshop/CoffeeshopSearchPage"
import Homepage from "./components/Homepage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { MuiThemeProvider, createTheme } from "@material-ui/core/styles"
import RestaurantList from "./components/regularRotationList/RestaurantList"
import RestaurantDetails from "./components/regularRotationList/RestaurantDetails"
import { RestaurantProvider } from "./components/regularRotationList/RestaurantContext"

const theme = createTheme({
  typography: {
    fontFamily: "Raleway , sans-serif",
  },
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coffeeshops" element={<CoffeeshopSearchPage />} />
          <Route
            path="frequent-customer"
            element={
              <RestaurantProvider>
                <RestaurantList />
              </RestaurantProvider>
            }
          >
            <Route path=":restaurant" element={<RestaurantDetails />} />
          </Route>
        </Routes>
      </Router>
    </MuiThemeProvider>
  )
}
export default App
