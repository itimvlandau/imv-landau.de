import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export default function Schedule() {
  return (
    <>
      <Typography variant="h5" paragraph gutterBottom>
        Kurse und Terminkalender
      </Typography>
      <Typography variant="subtitle1">Herren</Typography>
      <Typography variant="caption">Sport</Typography>
      <List sx={{ mt: 0 }}>
        <ListItem>
          <ListItemText>
            Jeden <strong>Freitag</strong> wird von 19 Uhr bis 22 Uhr in der
            Halle des IGS Schulzentrum Ost Fussball gespielt.
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant="subtitle1">Damen</Typography>
      <Typography variant="caption">Koranunterricht</Typography>
      <List sx={{ mt: 0 }}>
        <ListItem>
          <ListItemText>
            Jeden <strong>Sonntag</strong> findet nach dem Dhuhr-Gebet bis zu
            dem Asr-Gebet ein Koranunterricht ausschließlich nur für Frauen
            statt.
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant="subtitle1">Kinder</Typography>
      <Typography variant="caption">Schule</Typography>
      <List sx={{ mt: 0 }}>
        <ListItem>
          <ListItemText>
            Jeden <strong>Samstag</strong> findet von 9:45 Uhr bis 12:15 Uhr der
            Schulunterricht fuer Kinder zwischen 6 bis 13 Jahren statt.
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}
