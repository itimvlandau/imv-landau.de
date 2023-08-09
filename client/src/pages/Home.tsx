import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          mb: 4,
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          alt="in the name of Allah image"
          src="bismillah.png"
        />
      </Box>
      <Grid container spacing={2} mb={2}>
        <Grid xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Herzlich Willkommen
          </Typography>

          <Typography variant="subtitle2" paragraph>
            Völkerverständigung, Dialog und Vielfalt sind die gottgewollte Form
            der menschlichen Koexistenz.
          </Typography>

          <Typography variant="subtitle2">Im Koran 49:13 heißt es:</Typography>

          <Typography variant="subtitle2" paragraph>
            <i>
              „O ihr Menschen, Wir haben euch aus Mann und Frau erschaffen und
              euch zu Völkern und Stämmen gemacht, auf dass ihr einander kennen
              lernen möget.“
            </i>
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Typography variant="h4" gutterBottom style={{ direction: "rtl" }}>
            السلام عليكم ورحمة الله وبركاته
          </Typography>

          <Typography variant="h6" paragraph style={{ direction: "rtl" }}>
            التفاهم الدولي والحوار والتنوع هوشكل من أشكال التعايش بين البشر
          </Typography>

          <Typography variant="h6" style={{ direction: "rtl" }}>
            يقول اللة تعالي في قرأنية:
          </Typography>

          <Typography variant="h6" paragraph style={{ direction: "rtl" }}>
            "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَى
            وَجَعَلْنَاكُمْ شُعُوباً وَقَبَائِلَ لِتَعَارَفُوا"
          </Typography>
        </Grid>
      </Grid>
      <Box component={'iframe'} sx={{ minHeight: ['40vw', '28vw', '34vw', '35vw', '530px'], width: '100%'}}  src="https://mawaqit.net/en/w/moschee-abu-bakar-landau-in-der-pfalz-76829-germany?showOnly5PrayerTimes=0"  />
    </>
  );
}
