import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useFooterStyles } from "./footerStyles";

export function Footer() {
  const classes = useFooterStyles();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.footerContent}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className={classes.mainLink}>Accueil</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className={classes.mainLink}>Nos services</Typography>

          <List>
            <ListItem className={classes.secondaryLinkContainer}>
              <ListItemText
                className={classes.secondaryLink}
                primary="Design web"
              />
            </ListItem>

            <ListItem className={classes.secondaryLinkContainer}>
              <ListItemText
                className={classes.secondaryLink}
                primary="Développement web"
              />
            </ListItem>

            <ListItem className={classes.secondaryLinkContainer}>
              <ListItemText
                className={classes.secondaryLink}
                primary="Audit qualité web"
              />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className={classes.mainLink}>
            Notre manifeste
          </Typography>
          <Typography className={classes.mainLink}>Notre Équipe</Typography>
          <Typography className={classes.mainLink}>Nous contacter</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className={classes.mainLink}>
            Obtenir un devis gratuit
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.copyright}>
            Material fabric 2022 | Tous droits réservés
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
