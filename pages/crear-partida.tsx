import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./crear-partida.module.css";

const CrearPartida: NextPage = () => {
  const router = useRouter();

  const onFantasyExperienceTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onInicioTextClick = useCallback(() => {
    router.push("/masters");
  }, [router]);

  const onContactoTextClick = useCallback(() => {
    // Please sync "Contacto" to the project
  }, []);

  const onButton1ContainerClick = useCallback(() => {
    // Please sync "Partidas-login" to the project
  }, []);

  return (
    <div className={styles.crearPartida}>
      <header className={styles.fantasyExperienceParent}>
        <div
          className={styles.fantasyExperience}
          onClick={onFantasyExperienceTextClick}
        >
          <span className={styles.fantasyExperienceTxtContainer}>
            <p className={styles.fantasy}>Fantasy</p>
            <p className={styles.experience}>Experience</p>
          </span>
        </div>
        <nav className={styles.inicioParent}>
          <a className={styles.inicio} onClick={onInicioTextClick}>
            Inicio
          </a>
          <a className={styles.prximasPartidas}>Próximas partidas</a>
          <a className={styles.nuestrosMsters} onClick={onInicioTextClick}>
            Nuestros Másters
          </a>
          <a className={styles.contacto} onClick={onContactoTextClick}>
            Contacto
          </a>
        </nav>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.frameGroup}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <a className={styles.a}>2</a>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.vectorGroup}>
                    <img
                      className={styles.vectorIcon1}
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className={styles.vectorIcon2}
                      loading="lazy"
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.miCuentaWrapper}>
              <a className={styles.miCuenta}>Mi cuenta</a>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <section className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <div className={styles.creaUnaNuevaPartidaParent}>
            <h1 className={styles.creaUnaNueva}>Crea una nueva partida</h1>
            <p className={styles.completaLaInformacin}>
              Completa la información necesaria para crear tu partida.
            </p>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.gameInfoParent}>
              <div className={styles.gameInfo}>
                <div className={styles.ttuloDeLa}>Título de la partida</div>
                <div className={styles.audioInfo}>
                  <div className={styles.audioFields} />
                  <div className={styles.placeholder}>Placeholder</div>
                </div>
              </div>
              <div className={styles.scheduleContact}>
                <div className={styles.tipoDePartida}>Tipo de partida</div>
                <div className={styles.contactInfo}>
                  <div className={styles.contactInfoChild} />
                  <div className={styles.placeholder1}>Placeholder</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.groupDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.ciudadSiEsPresencialParent}>
                  <div className={styles.ciudadSiEsContainer}>
                    <span>
                      <span className={styles.ciudad}>Ciudad</span>
                      <span className={styles.siEsPresencial}>
                        {" "}
                        (si es presencial)
                      </span>
                    </span>
                  </div>
                  <div className={styles.locationInputWrapper}>
                    <div className={styles.locationInput}>
                      <div className={styles.locationInputChild} />
                      <div className={styles.placeholder2}>Placeholder</div>
                    </div>
                  </div>
                </div>
                <div className={styles.idiomaParent}>
                  <div className={styles.idioma}>Idioma</div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.placeholder3}>Placeholder</div>
                  </div>
                </div>
              </div>
              <div className={styles.horarioParent}>
                <div className={styles.horario}>Horario</div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <div className={styles.placeholder4}>Placeholder</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent2}>
              <div className={styles.nmeroDeJugadoresParent}>
                <div className={styles.nmeroDeJugadores}>
                  Número de jugadores
                </div>
                <div className={styles.rectangleParent2}>
                  <div className={styles.frameChild2} />
                  <div className={styles.placeholder5}>Placeholder</div>
                </div>
              </div>
              <div className={styles.edadMnimaParent}>
                <div className={styles.edadMnima}>Edad mínima</div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild3} />
                  <div className={styles.placeholder6}>Placeholder</div>
                </div>
              </div>
              <div className={styles.temporalidadParent}>
                <div className={styles.temporalidad}>Temporalidad</div>
                <div className={styles.priceInput}>
                  <div className={styles.priceInputChild} />
                  <div className={styles.placeholder7}>Placeholder</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameParent3}>
              <div className={styles.usoObligatorioDeCmaraParent}>
                <div className={styles.usoObligatorioDe}>
                  ¿Uso obligatorio de cámara?
                </div>
                <div className={styles.usoObligatorioDe1}>
                  Uso obligatorio de micrófono
                </div>
                <div className={styles.tags}>Tags</div>
              </div>
              <div className={styles.frameWrapper5}>
                <div className={styles.frameParent4}>
                  <div className={styles.frameParent5}>
                    <div className={styles.frameParent6}>
                      <div className={styles.ellipseWrapper}>
                        <div className={styles.ellipseDiv} />
                      </div>
                      <div className={styles.si}>Si</div>
                    </div>
                    <div className={styles.frameParent7}>
                      <div className={styles.frameWrapper6}>
                        <div className={styles.ellipseGroup}>
                          <div className={styles.frameChild4} />
                          <div className={styles.frameChild5} />
                        </div>
                      </div>
                      <div className={styles.no}>No</div>
                    </div>
                  </div>
                  <div className={styles.cameraOptions}>
                    <div className={styles.cameraChoice}>
                      <div className={styles.cameraButton}>
                        <div className={styles.cameraButtons}>
                          <div className={styles.cameraButtonsChild} />
                          <div className={styles.cameraButtonsItem} />
                        </div>
                      </div>
                      <div className={styles.si1}>Si</div>
                    </div>
                    <div className={styles.cardChoice}>
                      <div className={styles.cardButton}>
                        <div className={styles.cardButtonChild} />
                      </div>
                      <div className={styles.no1}>No</div>
                    </div>
                  </div>
                  <div className={styles.optionsReminder}>
                    <div className={styles.optionsReminderChild} />
                    <div className={styles.elijeLasOpciones}>
                      Elije las opciones
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper7}>
            <div className={styles.frameParent8}>
              <div className={styles.usoDeTarjetaXParent}>
                <div className={styles.usoDeTarjeta}>Uso de tarjeta X</div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild6} />
                  <div className={styles.placeholder8}>Placeholder</div>
                </div>
              </div>
              <div className={styles.contactoDelMasterParent}>
                <div className={styles.contactoDelMaster}>
                  Contacto del master
                </div>
                <div className={styles.rectangleParent5}>
                  <div className={styles.frameChild7} />
                  <div className={styles.nmeroDeTelfono}>
                    ¿número de teléfono o email?
                  </div>
                </div>
              </div>
              <div className={styles.precioParent}>
                <div className={styles.precio}>{`Precio `}</div>
                <div className={styles.rectangleParent6}>
                  <div className={styles.frameChild8} />
                  <div className={styles.escribeElPrecio}>
                    Escribe el precio
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detailsContainerWrapper}>
            <div className={styles.detailsContainer}>
              <div className={styles.detailsHeaders}>
                <div className={styles.herramientasNecesarias}>
                  Herramientas necesarias
                </div>
                <div className={styles.detailsInput}>
                  <div className={styles.detailsInputChild} />
                  <div className={styles.textArea}>Text Area</div>
                </div>
              </div>
              <div className={styles.recomendacionesParaLaPartidParent}>
                <div className={styles.recomendacionesParaLa}>
                  Recomendaciones para la partida
                </div>
                <div className={styles.recommendationsContentParent}>
                  <div className={styles.recommendationsContent}>Texto</div>
                  <div className={styles.frameChild9} />
                </div>
              </div>
              <div className={styles.detailsHeaders1}>
                <div className={styles.descripcin}>Descripción</div>
                <div className={styles.rectangleParent7}>
                  <div className={styles.frameChild10} />
                  <div className={styles.textArea1}>Text area</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.submissionWrapper}>
            <div className={styles.submission}>
              <div className={styles.button1} onClick={onButton1ContainerClick}>
                <b className={styles.button11}>Crear partida</b>
              </div>
              <Button
                className={styles.submissionChild}
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#cd9c20",
                  fontSize: "18",
                  borderColor: "#cd9c20",
                  borderRadius: "50px",
                  "&:hover": { borderColor: "#cd9c20" },
                  width: 154,
                  height: 42,
                }}
                onClick={onFantasyExperienceTextClick}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.frameFooter}>
        <div className={styles.frameChild11} />
        <div className={styles.socialInfo}>
          <h2 className={styles.fantasyExperience1}>
            <span className={styles.fantasyExperienceTxtContainer1}>
              <p className={styles.fantasy1}>Fantasy</p>
              <p className={styles.experience1}>Experience</p>
            </span>
          </h2>
          <div className={styles.sguenosEnRedes}>
            Síguenos en redes sociales
          </div>
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
      </footer>
    </div>
  );
};

export default CrearPartida;
