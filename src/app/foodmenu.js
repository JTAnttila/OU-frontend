import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import InfoIcon from "@mui/icons-material/Info"
import Tooltip from "@mui/material/Tooltip"

// Create a dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9"
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e"
    }
  }
})

// Menu section component
const MenuSection = ({ title, items }) => (
  <>
    <Typography
      variant="subtitle1"
      color="primary"
      gutterBottom
      sx={{ mt: 2, fontWeight: "bold" }}
    >
      {title}
    </Typography>
    <List dense disablePadding>
      {items.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ py: 1 }}>
          <ListItemText
            primary={item.name}
            secondary={item.info}
            primaryTypographyProps={{ variant: "body2", sx: { mb: 0.5 } }}
            secondaryTypographyProps={{ variant: "caption" }}
          />
          <ListItemSecondaryAction>
            <Tooltip title="More information">
              <IconButton edge="end" aria-label="more info" size="small">
                <InfoIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  </>
)

export default function HertsiMenuMUI() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Card sx={{ maxWidth: 400, mx: "auto", my: 2 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h4"
            component="h1"
            color="primary"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Hertsi
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            gutterBottom
            sx={{ mb: 3 }}
          >
            10.30-15.00
          </Typography>

          <MenuSection
            title="FROM THE FIELD-VEGAN"
            items={[
              {
                name:
                  "Panko-seesampaneroitu soija-kasvispiihvi , omenaista currykastiketta ja perunaa",
                info: "1KPL/PCANN,M"
              }
            ]}
          />
          <Divider sx={{ my: 1 }} />

          <MenuSection
            title="FROM OUR FAVORITES 2"
            items={[{ name: "Juustoista broilerpata ja riisiä", info: "G,L" }]}
          />
          <Divider sx={{ my: 1 }} />

          <MenuSection
            title="FROM OUR FAVORITES 1"
            items={[
              { name: "Hernekeittoa ja pannukakkua L", info: "1KPL/PCANN.,L" }
            ]}
          />
          <Divider sx={{ my: 1 }} />

          <MenuSection
            title="FROM THE SOUP BOWL"
            items={[
              { name: "Mausteista tomaattikeittoa ja 2 x napas", info: "G,M" }
            ]}
          />
          <Divider sx={{ my: 1 }} />

          <MenuSection
            title="FROM OUR BAKERY"
            items={[{ name: "Patonkilounas Bitti kahvilasta", info: "M" }]}
          />
          <Divider sx={{ my: 1 }} />

          <MenuSection
            title="FROM THE SWEET"
            items={[{ name: "Mustikkajogurtti", info: "G,L" }]}
          />
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
