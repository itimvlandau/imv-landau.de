import Typography from "@mui/material/Typography";

export default function Location() {
  return (
    <>
      <Typography variant="h5" paragraph gutterBottom>
        Anfahrt
      </Typography>
      <Typography paragraph>
        <strong>Anschrift</strong>
        <br />
        Islamischer multikultureller Verein Landau e.V (IMV Landau e.V.)
        <br />
        Danziger Platz 14
        <br />
        76829 Landau in der Pfalz
      </Typography>
      <Typography paragraph>
        <strong>Telefon</strong>
        <br />
        +49 6341 5575698
      </Typography>
      <Typography paragraph>
        <strong>E-Mail</strong>
        <br />
        imv-landau@web.de
      </Typography>
    </>
  );
}
