import type { NextPage } from "next";
import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const HomeV: NextPage = () => {
  const router = useRouter();

  const onGroupNavigationClick = useCallback(() => {
    // Please sync "Contacto" to the project
  }, []);

  const onPrximasPartidasTextClick = useCallback(() => {
    // Please sync "Partidas-login" to the project
  }, []);

  const onNuestrosMstersTextClick = useCallback(() => {
    router.push("/masters");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Master-detalles" to the project
  }, []);

  const onGroupContainerClick1 = useCallback(() => {
    // Please sync "Partidas-detalles" to the project
  }, []);

  return (
    <div className={styles.homeV11}>
      <header className={styles.fantasyExperienceParent}>
        <div className={styles.fantasyExperience}>
          <span className={styles.fantasyExperienceTxtContainer}>
            <p className={styles.fantasy}>Fantasy</p>
            <p className={styles.experience}>Experience</p>
          </span>
        </div>
        <nav className={styles.inicioParent} onClick={onGroupNavigationClick}>
          <a className={styles.inicio}>Inicio</a>
          <a
            className={styles.prximasPartidas}
            onClick={onPrximasPartidasTextClick}
          >
            Próximas partidas
          </a>
          <a
            className={styles.nuestrosMsters}
            onClick={onNuestrosMstersTextClick}
          >
            Nuestros Másters
          </a>
          <a className={styles.contacto}>Contacto</a>
        </nav>
        <div className={styles.mainContentWrapper}>
          <div className={styles.mainContent}>
            <div className={styles.leftColumn}>
              <div className={styles.frameParent}>
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
                <div className={styles.rightColumn}>
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
            <div className={styles.userAccount}>
              <a className={styles.miCuenta}>Mi cuenta</a>
            </div>
          </div>
        </div>
      </header>
      <img
        className={styles.hMediaZ9jv6wrkrpaUnsplash1Icon}
        alt=""
        src="/2hmediaz9jv6wrkrpaunsplash-1@2x.png"
      />
      <h1 className={styles.fantasyExperience1}>
        <span className={styles.fantasyExperienceTxtContainer1}>
          <p className={styles.fantasy1}>Fantasy</p>
          <p className={styles.experience1}>Experience</p>
        </span>
      </h1>
      <b className={styles.bienvenidosA}>Bienvenidos a</b>
      <h1 className={styles.rolPlayGames}>Rol play games</h1>
      <div
        className={styles.verMsPartidasWrapper}
        onClick={onPrximasPartidasTextClick}
      >
        <div className={styles.verMsPartidas}>Ver más partidas</div>
      </div>
      <section className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <img
          className={styles.konradKollerLctjo2d92cUnspIcon}
          loading="lazy"
          alt=""
          src="/konradkollerlctjo2d9-2cunsplash-1@2x.png"
        />
        <div className={styles.aboutUsContent}>
          <h1 className={styles.somosFantasyExperienceContainer}>
            <p className={styles.somos}>{`Somos `}</p>
            <p className={styles.fantasyExperience2}>Fantasy Experience</p>
          </h1>
          <p
            className={styles.sedUtPerspiciatis}
          >{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? `}</p>
        </div>
      </section>
      <img
        className={styles.instagramIcon}
        loading="lazy"
        alt=""
        src="/instagram.svg"
      />
      <img
        className={styles.twitterIcon}
        loading="lazy"
        alt=""
        src="/twitter.svg"
      />
      <section className={styles.rectangleGroup}>
        <div className={styles.frameInner} />
        <div className={styles.socialMediaContent}>
          <div className={styles.fantasyExperience3}>
            <span className={styles.fantasyExperienceTxtContainer2}>
              <p className={styles.fantasy2}>Fantasy</p>
              <p className={styles.experience2}>Experience</p>
            </span>
          </div>
          <div className={styles.sguenosEnRedes}>
            Síguenos en redes sociales
          </div>
        </div>
        <img
          className={styles.instagramIcon1}
          loading="lazy"
          alt=""
          src="/instagram-1.svg"
        />
        <img
          className={styles.twitterIcon1}
          loading="lazy"
          alt=""
          src="/twitter-1.svg"
        />
      </section>
      <section className={styles.rectangleContainer}>
        <div className={styles.rectangleDiv} />
        <h1 className={styles.nuestrosMejoresMasters}>
          Nuestros mejores Masters
        </h1>
        <div className={styles.mastersGrid}>
          <div className={styles.groupDiv} onClick={onGroupContainerClick}>
            <div className={styles.frameChild1} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
            />
            <div className={styles.frameGroup}>
              <div className={styles.masterNameWrapper}>
                <b className={styles.masterName}>Master name</b>
              </div>
              <div className={styles.frameWrapper}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-26.svg"
                />
              </div>
              <div className={styles.preferencia}>Preferencia</div>
              <div className={styles.juegos}>Juegos</div>
            </div>
            <b className={styles.verPerfil}>Ver perfil</b>
          </div>
          <div
            className={styles.rectangleParent1}
            onClick={onGroupContainerClick}
          >
            <div className={styles.frameChild2} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon1}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1-1@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.masterNameContainer}>
                <b className={styles.masterName1}>Master name</b>
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/group-26-1.svg"
                />
              </div>
              <div className={styles.preferencia1}>Preferencia</div>
              <div className={styles.juegos1}>Juegos</div>
            </div>
            <b className={styles.verPerfil1}>Ver perfil</b>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild4} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon2}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
            />
            <div className={styles.frameParent1}>
              <div className={styles.masterNameFrame}>
                <b className={styles.masterName2}>Master name</b>
              </div>
              <div className={styles.frameWrapper1}>
                <img
                  className={styles.frameChild5}
                  loading="lazy"
                  alt=""
                  src="/group-26-2.svg"
                />
              </div>
              <div className={styles.preferencia2}>Preferencia</div>
              <div className={styles.juegos2}>Juegos</div>
            </div>
            <b className={styles.verPerfil2}>Ver perfil</b>
          </div>
        </div>
        <div className={styles.mastersCTA}>
          <Button
            className={styles.mastersCTAChild}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#0b0b0b",
              fontSize: "24",
              background: "#cd9c20",
              borderRadius: "50px",
              "&:hover": { background: "#cd9c20" },
              width: 346,
              height: 60,
            }}
            onClick={onNuestrosMstersTextClick}
          >
            Conoce a nuestros Másters
          </Button>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameChild6} />
        <h1 className={styles.nuestraComunidadOnline}>
          Nuestra comunidad online
        </h1>
        <div className={styles.communityContent}>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild7} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon3}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1-3@2x.png"
            />
            <div className={styles.communityPost}>
              <div className={styles.postInfo}>
                <div className={styles.postTitleAndAuthor}>
                  <b className={styles.partidaTtulo}>Partida Título</b>
                </div>
                <div className={styles.postTitleAndAuthor1}>
                  <b className={styles.autorName}>Autor name</b>
                </div>
                <div className={styles.postDetails}>
                  <div className={styles.jugadoresNamesWrapper}>
                    <div className={styles.jugadoresNames}>Jugadores Names</div>
                  </div>
                  <div className={styles.minutos}>{`142 minutos `}</div>
                  <div className={styles.nequePorroQuisquamEstQuiWrapper}>
                    <p
                      className={styles.nequePorroQuisquam}
                    >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
                  </div>
                  <div className={styles.verDetallesWrapper}>
                    <b className={styles.verDetalles}>Ver detalles...</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.rectangleParent4}>
        <div className={styles.frameChild8} />
        <h1 className={styles.prximasPartidas1}>Próximas partidas</h1>
        <div className={styles.upcomingGamesContent}>
          <div className={styles.upcomingGamesGrid}>
            <div
              className={styles.rectangleParent5}
              onClick={onGroupContainerClick1}
            >
              <div className={styles.frameChild9} />
              <div className={styles.cedericVandenberghe21dp3hytvParent}>
                <img
                  className={styles.cedericVandenberghe21dp3hytvIcon4}
                  alt=""
                  src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
                />
                <div className={styles.gameTypeIconsParent}>
                  <img
                    className={styles.gameTypeIcons}
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <b className={styles.presencial}>Presencial</b>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.partidaTtuloParent}>
                  <b className={styles.partidaTtulo1}>Partida Título</b>
                  <div className={styles.gameMasterInfo}>
                    <b className={styles.masterName3}>Master name</b>
                    <div className={styles.sistema}>Sistema</div>
                    <div className={styles.fecha}>Fecha</div>
                  </div>
                </div>
                <div className={styles.nequePorroQuisquamEstQuiContainer}>
                  <p
                    className={styles.nequePorroQuisquam1}
                  >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
                </div>
                <b className={styles.verDetalles1}>Ver detalles...</b>
              </div>
            </div>
            <div
              className={styles.rectangleParent6}
              onClick={onGroupContainerClick1}
            >
              <div className={styles.frameChild10} />
              <div className={styles.cedericVandenberghe21dp3hytvGroup}>
                <img
                  className={styles.cedericVandenberghe21dp3hytvIcon5}
                  alt=""
                  src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
                />
                <div className={styles.starParent}>
                  <img
                    className={styles.starIcon}
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <b className={styles.online}>Online</b>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.partidaTtuloGroup}>
                  <b className={styles.partidaTtulo2}>Partida Título</b>
                  <b className={styles.masterName4}>Master name</b>
                  <div className={styles.sistema1}>Sistema</div>
                  <div className={styles.fecha1}>Fecha</div>
                </div>
                <div className={styles.nequePorroQuisquamEstQuiFrame}>
                  <p
                    className={styles.nequePorroQuisquam2}
                  >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
                </div>
                <b className={styles.verDetalles2}>Ver detalles...</b>
              </div>
            </div>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild11} />
              <div className={styles.cedericVandenberghe21dp3hytvContainer}>
                <img
                  className={styles.cedericVandenberghe21dp3hytvIcon6}
                  alt=""
                  src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
                />
                <div className={styles.starGroup}>
                  <img
                    className={styles.frameChild12}
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <b className={styles.online1}>Online</b>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.partidaTtuloContainer}>
                  <b className={styles.partidaTtulo3}>Partida Título</b>
                  <b className={styles.masterName5}>Master name</b>
                  <div className={styles.sistema2}>Sistema</div>
                  <div className={styles.fecha2}>Fecha</div>
                </div>
                <div className={styles.nequePorroQuisquamEstQuiWrapper1}>
                  <p
                    className={styles.nequePorroQuisquam3}
                  >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
                </div>
                <b className={styles.verDetalles3}>Ver detalles...</b>
              </div>
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.partidasDigitalesDestacadasWrapper}>
              <h1 className={styles.partidasDigitalesDestacadas}>
                Partidas digitales destacadas
              </h1>
            </div>
            <div className={styles.featuredGamesGrid}>
              <div
                className={styles.rectangleParent8}
                onClick={onGroupContainerClick1}
              >
                <div className={styles.frameChild13} />
                <div className={styles.cedericVandenberghe21dp3hytvParent1}>
                  <img
                    className={styles.cedericVandenberghe21dp3hytvIcon7}
                    alt=""
                    src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
                  />
                  <div className={styles.featuredGameTypeIconsParent}>
                    <img
                      className={styles.featuredGameTypeIcons}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <b className={styles.digital}>Digital</b>
                  </div>
                </div>
                <div className={styles.frameParent6}>
                  <div className={styles.partidaTtuloParent1}>
                    <b className={styles.partidaTtulo4}>Partida Título</b>
                    <b className={styles.autorName1}>Autor name</b>
                    <div className={styles.sistema3}>Sistema</div>
                  </div>
                  <div className={styles.digitalGamePlayers}>
                    <div className={styles.digitalGameDescriptionConta}>
                      <div className={styles.digitalGameDescription}>
                        <img
                          className={styles.digitalGameDescriptionChild}
                          loading="lazy"
                          alt=""
                          src="/group-26-3.svg"
                        />
                      </div>
                      <p
                        className={styles.nequePorroQuisquam4}
                      >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
                    </div>
                  </div>
                  <b className={styles.verDetalles4}>Ver detalles...</b>
                </div>
              </div>
              <div
                className={styles.rectangleParent9}
                onClick={onGroupContainerClick1}
              >
                <div className={styles.frameChild14} />
                <div className={styles.cedericVandenberghe21dp3hytvParent2}>
                  <img
                    className={styles.cedericVandenberghe21dp3hytvIcon8}
                    alt=""
                    src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
                  />
                  <div className={styles.starContainer}>
                    <img
                      className={styles.frameChild15}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <b className={styles.digital1}>Digital</b>
                  </div>
                </div>
                <div className={styles.frameParent7}>
                  <div className={styles.partidaTtuloParent2}>
                    <b className={styles.partidaTtulo5}>Partida Título</b>
                    <b className={styles.autorName2}>Autor name</b>
                    <div className={styles.sistema4}>Sistema</div>
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.frameParent8}>
                      <div className={styles.frameWrapper3}>
                        <img
                          className={styles.frameChild16}
                          loading="lazy"
                          alt=""
                          src="/group-26-3.svg"
                        />
                      </div>
                      <p
                        className={styles.nequePorroQuisquam5}
                      >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
                    </div>
                  </div>
                  <b className={styles.verDetalles5}>Ver detalles...</b>
                </div>
              </div>
              <div
                className={styles.rectangleParent10}
                onClick={onGroupContainerClick1}
              >
                <div className={styles.frameChild17} />
                <div className={styles.cedericVandenberghe21dp3hytvParent3}>
                  <img
                    className={styles.cedericVandenberghe21dp3hytvIcon9}
                    alt=""
                    src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
                  />
                  <div className={styles.starParent1}>
                    <img
                      className={styles.frameChild18}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <b className={styles.digital2}>Digital</b>
                  </div>
                </div>
                <div className={styles.frameParent9}>
                  <div className={styles.partidaTtuloParent3}>
                    <b className={styles.partidaTtulo6}>Partida Título</b>
                    <b className={styles.autorName3}>Autor name</b>
                    <div className={styles.sistema5}>Sistema</div>
                  </div>
                  <div className={styles.frameWrapper4}>
                    <div className={styles.frameParent10}>
                      <div className={styles.frameWrapper5}>
                        <img
                          className={styles.frameChild19}
                          loading="lazy"
                          alt=""
                          src="/group-26-3.svg"
                        />
                      </div>
                      <p
                        className={styles.nequePorroQuisquam6}
                      >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
                    </div>
                  </div>
                  <b className={styles.verDetalles6}>Ver detalles...</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.viewMoreGamesContainer}>
            <Button
              className={styles.viewMoreGamesButtonContain}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#0b0b0b",
                fontSize: "24",
                background: "#cd9c20",
                borderRadius: "50px",
                "&:hover": { background: "#cd9c20" },
                height: 60,
              }}
              onClick={onPrximasPartidasTextClick}
            >
              Ver más partidas
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV;
