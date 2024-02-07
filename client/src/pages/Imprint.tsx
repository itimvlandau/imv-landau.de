import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Imprint() {
  const link = (
    <a
      style={{ textDecoration: "none", color: "#21CBF3" }}
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.playmobox.com/de"
    >
      playmobox.com
    </a>
  );

  return (
    <>
      <Typography variant="h5" paragraph gutterBottom>
        Impressum
      </Typography>
      <Typography variant="caption" paragraph gutterBottom>
        Angaben gemäß § 5 TMG
      </Typography>
      <Typography paragraph>
        <strong>Anschrift</strong>
        <br />
        IMV Landau-Pfalz e.V.
        <br />
        Danziger Platz 14
        <br />
        76829 Landau
      </Typography>
      <Typography paragraph>
        <strong>E-Mail</strong>
        <br />
        imv-landau@web.de
      </Typography>
      <Typography>
        <strong>Gemeinschaftlich vertretungsbefugt:</strong>
      </Typography>
      <Typography sx={{ "mt": 1, "mb": 2}} component="div" variant="caption">
        <strong>1. Vorsitzender:</strong>
        <br />
        Herr Houari Dada<br />
        <strong>Anschrift</strong>
        <br />
        Marktstraße 55
        <br />
        67487 Maikammer
        <br />
        <strong>Telefon:</strong>
        <br />
        0176/72 76 52 91
        <br />
        <strong>E-Mail:</strong>
        <br />
        houaridada@outlook.fr
      </Typography>
      <Typography sx={{ "mb": 3}} component="div" variant="caption" gutterBottom>
        <strong>2. Vorsitzender:</strong>
        <br />
        Herr Ben Abdrahman Mohamed<br />
        <strong>Anschrift</strong>
        <br />
        Maximilianstraße 13
        <br />
        76829 Landau
        <br />
        <strong>Telefon:</strong>
        <br />
        0151/17 58 12 27
        <br />
        <strong>E-Mail:</strong>
        <br />
        mohamedali84@live.de
      </Typography>
      <Typography sx={{ "mb": 3}}>
        <strong>Dieses Impressum gilt für: </strong>
        <Link to="/">
            https://imv-landau.de
        </Link>
      </Typography>
      <Typography sx={{ "mb": 3}}>
        <strong>Registergericht: </strong>
        Amtsgericht Landau
      </Typography>
      <Typography sx={{ "mb": 3}}>
        <strong>Registernummer: </strong>
        VR2768
      </Typography>
      <Typography sx={{ "mb": 3}}>
        <strong>Steuernummer: </strong>
        24/652/53374 KVI/I
      </Typography>
      <Typography sx={{ "mb": 3}}>
        <strong>Verantwortlicher i. S. d. §55 Abs. 2 RStV: </strong>
        Herr Dada Houari
      </Typography>
      <Typography variant="subtitle1">Haftung</Typography>
      <Typography variant="caption" paragraph>
        Der Islamischer multikultureller Verein Landau e.V. bemüht sich auf
        dieser Webseite richtige und vollständige Informationen zur Verfügung zu
        stellen, übernimmt jedoch keine Haftung oder Garantie für die
        Aktualität, Richtigkeit und Vollständigkeit der auf dieser Webseite
        bereitgestellten Informationen. Dies gilt auch für alle Verbindungen
        (‚Links‘), auf die diese Webseite direkt oder indirekt verweist. Der
        Verein ist für den Inhalt einer Seite, die mit einem solchen Link
        erreicht wird, nicht verantwortlich. Die Redaktion übernimmt keine
        Haftung für unverlangt eingesandte Manuskripte, Fotos, Illustrationen.
        Namentlich gekennzeichnete Beiträge geben nicht unbedingt die Meinung
        der Redaktion wieder. Das Copyright sowie die Verantwortung für die
        publizierten Inhalte liegen ausschließlich bei den jeweiligen Autoren.
        Die Nennung von Firmen- oder Markennamen erfolgt ohne Prüfung etwaiger
        Rechte Dritter. Aus einem fehlenden Markenschutz- oder Copyright-Hinweis
        kann insbesondere nicht der Schluss gezogen werden, diese Namen und/oder
        Bezeichnungen seinen frei von Rechten Dritter. Für Einträge, die im
        Forum und im Gästebuch dieses Projektes vorgenommen werden, übernehmen
        die Betreiber dieser Seite grundsätzlich keine Haftung. Der Inhalt
        dieser Webseite ist urheberrechtlich geschützt. Alle Rechte für den
        Inhalt und die Gestaltung stehen allein dem Verein zu.
      </Typography>
      <Typography variant="subtitle1">
        Gestaltung und technische Umsetzung
      </Typography>
      <Typography variant="caption" paragraph>
        Die grafische Gestaltung und technische Umsetzung dieser Webseite wurde
        mit Hilfe von {link} realisiert. Für den Inhalt bleibt der Herausgeber
        dieser Webseite verantwortlich. Bei technischen Problemen nehmen Sie
        bitte Kontakt mit dem Webmaster auf.
      </Typography>
    </>
  );
}
