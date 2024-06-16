import type { NextPage } from "next";
import { Button } from "@mui/material";
import styles from "./master-detalles-old.module.css";

const MasterDetallesOld: NextPage = () => {
  return (
    <div className={styles.masterDetallesOld}>
      <header className={styles.fantasyExperienceParent}>
        <div className={styles.fantasyExperience}>
          <span className={styles.fantasyExperienceTxtContainer}>
            <p className={styles.fantasy}>Fantasy</p>
            <p className={styles.experience}>Experience</p>
          </span>
        </div>
        <nav className={styles.inicioParent}>
          <a className={styles.inicio}>Inicio</a>
          <div className={styles.eventosParent}>
            <a className={styles.eventos}>Eventos</a>
            <a className={styles.contacto}>Contacto</a>
          </div>
          <div className={styles.menuContainerWrapper}>
            <div className={styles.menuContainer}>
              <div className={styles.miCuentaWrapper}>
                <a className={styles.miCuenta}>Mi cuenta</a>
              </div>
              <div className={styles.menuContainerInner}>
                <div className={styles.avatarContainerParent}>
                  <div className={styles.avatarContainer}>
                    <img
                      className={styles.avatarIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameChild} />
                      <a className={styles.userName}>2</a>
                    </div>
                  </div>
                  <div className={styles.socialIconsWrapper}>
                    <div className={styles.socialIcons}>
                      <img
                        className={styles.socialLinksIcon}
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        className={styles.socialLinksIcon1}
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <section className={styles.masterContainer}>
          <div className={styles.masterContainerChild} />
          <div className={styles.masterInfo}>
            <div className={styles.masterHeader}>
              <h1 className={styles.masterName}>Master Name</h1>
              <img
                className={styles.konradKollerLctjo2d92cUnspIcon}
                loading="lazy"
                alt=""
                src="/konradkollerlctjo2d9-2cunsplash-2@2x.png"
              />
            </div>
            <div className={styles.prximasPartidasParent}>
              <b className={styles.prximasPartidas}>Próximas partidas</b>
              <div className={styles.bookingButtons}>
                <Button
                  className={styles.bookButtonsContainer}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#cd9c20",
                    fontSize: "18",
                    borderColor: "#cd9c20",
                    borderRadius: "50px",
                    "&:hover": { borderColor: "#cd9c20" },
                    height: 42,
                  }}
                >
                  Comprar evento
                </Button>
                <Button
                  className={styles.bookButtonsContainer1}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#f2ecdd",
                    fontSize: "18",
                    borderColor: "#f2ecdd",
                    borderRadius: "50px",
                    "&:hover": { borderColor: "#f2ecdd" },
                    height: 42,
                  }}
                >
                  Reservar evento
                </Button>
              </div>
            </div>
            <b className={styles.partidasYaJugadas}>Partidas ya jugadas</b>
          </div>
          <div className={styles.bioContainerWrapper}>
            <div className={styles.bioContainer}>
              <div className={styles.bioInfo}>
                <b className={styles.bio}>Bio</b>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className={styles.styleContainerParent}>
                <div className={styles.styleContainer}>
                  <b className={styles.estilo}>Estilo</b>
                  <p className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <b className={styles.sistemasPreferidos}>Sistemas preferidos</b>
              </div>
              <b className={styles.valoracin}>Valoración</b>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.socialFooter}>
          <div className={styles.fantasyExperience1}>
            <span className={styles.fantasyExperienceTxtContainer1}>
              <p className={styles.fantasy1}>Fantasy</p>
              <p className={styles.experience1}>Experience</p>
            </span>
          </div>
          <div className={styles.sguenosEnRedes}>
            Síguenos en redes sociales
          </div>
          <img
            className={styles.instagramIcon}
            loading="lazy"
            alt=""
            src="/instagram1.svg"
          />
          <img
            className={styles.twitterIcon}
            loading="lazy"
            alt=""
            src="/twitter.svg"
          />
        </div>
      </footer>
    </div>
  );
};

export default MasterDetallesOld;
