import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./partidas.module.css";

const Partidas: NextPage = () => {
  const router = useRouter();

  const onFantasyExperienceTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onGroupNavigationClick = useCallback(() => {
    // Please sync "Contacto" to the project
  }, []);

  const onNuestrosMstersTextClick = useCallback(() => {
    router.push("/masters");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Partidas-login" to the project
  }, []);

  return (
    <div className={styles.partidas}>
      <header className={styles.structure}>
        <h1
          className={styles.fantasyExperience}
          onClick={onFantasyExperienceTextClick}
        >
          <span className={styles.fantasyExperienceTxtContainer}>
            <p className={styles.fantasy}>Fantasy</p>
            <p className={styles.experience}>Experience</p>
          </span>
        </h1>
        <nav className={styles.inicioParent} onClick={onGroupNavigationClick}>
          <a className={styles.inicio}>Inicio</a>
          <a className={styles.prximasPartidas}>Próximas partidas</a>
          <a
            className={styles.nuestrosMsters}
            onClick={onNuestrosMstersTextClick}
          >
            Nuestros Másters
          </a>
          <a className={styles.contacto}>Contacto</a>
        </nav>
        <div className={styles.structureInner}>
          <div className={styles.logoContainerParent}>
            <div className={styles.logoContainer}>
              <div className={styles.logoWrapper}>
                <div className={styles.logoImageParent}>
                  <img
                    className={styles.logoImageIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <a className={styles.subheading}>2</a>
                  </div>
                </div>
                <div className={styles.userWrapper}>
                  <div className={styles.user}>
                    <img
                      className={styles.userActionsIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className={styles.userActionsIcon1}
                      loading="lazy"
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.account}>
              <a className={styles.miCuenta}>Mi cuenta</a>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainChild} />
        <section className={styles.content}>
          <div className={styles.upcomingGames}>
            <div className={styles.upcomingGamesHeader}>
              <h1 className={styles.prximasPartidas1}>Próximas partidas</h1>
              <p className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className={styles.gameTypes}>
              <div className={styles.gameTypeSelector}>
                <div className={styles.elijeElTipo}>
                  Elije el tipo de partida :
                </div>
                <div
                  className={styles.onlineWrapper}
                  onClick={onFrameContainerClick}
                >
                  <div className={styles.online}>online</div>
                </div>
              </div>
              <div className={styles.gameTypeButtons}>
                <div className={styles.digital}>digital</div>
              </div>
              <div className={styles.gameTypeButtons1}>
                <div className={styles.presencial}>presencial</div>
              </div>
            </div>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.searchBarChild} />
            <p className={styles.buscarPorNombre}>
              Buscar por nombre de evento o Master..
            </p>
            <div className={styles.searchInput}>
              <div className={styles.searchIconContainer}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                />
                <div className={styles.searchBackground} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.gamesGrid}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameItem} />
            <div className={styles.gameCardRows}>
              <img
                className={styles.cedericVandenberghe21dp3hytvIcon}
                alt=""
                src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
              />
              <div className={styles.gameCardElements}>
                <img
                  className={styles.gameCardRating}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <b className={styles.presencial1}>Presencial</b>
              </div>
            </div>
            <div className={styles.gameCardInfo}>
              <div className={styles.partidaTtuloParent}>
                <h1 className={styles.partidaTtulo}>Partida Título</h1>
                <h1 className={styles.masterName}>Master name</h1>
                <p className={styles.sistema}>Sistema</p>
                <p className={styles.fecha}>Fecha</p>
              </div>
              <div className={styles.gameCardDescription}>
                <p
                  className={styles.nequePorroQuisquam}
                >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
              </div>
              <b className={styles.verDetalles}>Ver detalles...</b>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <div className={styles.cedericVandenberghe21dp3hytvParent}>
              <img
                className={styles.cedericVandenberghe21dp3hytvIcon1}
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
                <b className={styles.presencial2}>Presencial</b>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.partidaTtuloGroup}>
                <h1 className={styles.partidaTtulo1}>Partida Título</h1>
                <h1 className={styles.masterName1}>Master name</h1>
                <p className={styles.sistema1}>Sistema</p>
                <div className={styles.fecha1}>Fecha</div>
              </div>
              <div className={styles.nequePorroQuisquamEstQuiWrapper}>
                <p
                  className={styles.nequePorroQuisquam1}
                >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
              </div>
              <b className={styles.verDetalles1}>Ver detalles...</b>
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <div className={styles.cedericVandenberghe21dp3hytvGroup}>
              <img
                className={styles.cedericVandenberghe21dp3hytvIcon2}
                alt=""
                src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
              />
              <div className={styles.starGroup}>
                <img
                  className={styles.frameChild1}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <b className={styles.presencial3}>Presencial</b>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.partidaTtuloContainer}>
                <h1 className={styles.partidaTtulo2}>Partida Título</h1>
                <h1 className={styles.masterName2}>Master name</h1>
                <p className={styles.sistema2}>Sistema</p>
                <div className={styles.fecha2}>Fecha</div>
              </div>
              <div className={styles.nequePorroQuisquamEstQuiContainer}>
                <p
                  className={styles.nequePorroQuisquam2}
                >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
              </div>
              <b className={styles.verDetalles2}>Ver detalles...</b>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.frameChild2} />
            <div className={styles.cedericVandenberghe21dp3hytvContainer}>
              <img
                className={styles.cedericVandenberghe21dp3hytvIcon3}
                alt=""
                src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
              />
              <div className={styles.starContainer}>
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <b className={styles.presencial4}>Presencial</b>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <h1 className={styles.partidaTtulo3}>Partida Título</h1>
                <h1 className={styles.masterName3}>Master name</h1>
                <p className={styles.sistema3}>Sistema</p>
                <div className={styles.fecha3}>Fecha</div>
              </div>
              <div className={styles.nequePorroQuisquamEstQuiFrame}>
                <p
                  className={styles.nequePorroQuisquam3}
                >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
              </div>
              <b className={styles.verDetalles3}>Ver detalles...</b>
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <div className={styles.frameChild4} />
            <div className={styles.cedericVandenberghe21dp3hytvParent1}>
              <img
                className={styles.cedericVandenberghe21dp3hytvIcon4}
                alt=""
                src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
              />
              <div className={styles.starParent1}>
                <img
                  className={styles.frameChild5}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <b className={styles.presencial5}>Presencial</b>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.partidaTtuloParent1}>
                <h1 className={styles.partidaTtulo4}>Partida Título</h1>
                <h1 className={styles.masterName4}>Master name</h1>
                <p className={styles.sistema4}>Sistema</p>
                <div className={styles.fecha4}>Fecha</div>
              </div>
              <div className={styles.nequePorroQuisquamEstQuiWrapper1}>
                <p
                  className={styles.nequePorroQuisquam4}
                >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
              </div>
              <b className={styles.verDetalles4}>Ver detalles...</b>
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <div className={styles.frameChild6} />
            <div className={styles.cedericVandenberghe21dp3hytvParent2}>
              <img
                className={styles.cedericVandenberghe21dp3hytvIcon5}
                alt=""
                src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
              />
              <div className={styles.starParent2}>
                <img
                  className={styles.frameChild7}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <b className={styles.presencial6}>Presencial</b>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.partidaTtuloParent2}>
                <h1 className={styles.partidaTtulo5}>Partida Título</h1>
                <h1 className={styles.masterName5}>Master name</h1>
                <p className={styles.sistema5}>Sistema</p>
                <div className={styles.fecha5}>Fecha</div>
              </div>
              <div className={styles.nequePorroQuisquamEstQuiWrapper2}>
                <p
                  className={styles.nequePorroQuisquam5}
                >{`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `}</p>
              </div>
              <b className={styles.verDetalles5}>Ver detalles...</b>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.footerContent}>
          <h1 className={styles.fantasyExperience1}>
            <span className={styles.fantasyExperienceTxtContainer1}>
              <p className={styles.fantasy1}>Fantasy</p>
              <p className={styles.experience1}>Experience</p>
            </span>
          </h1>
          <h1 className={styles.sguenosEnRedes}>Síguenos en redes sociales</h1>
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

export default Partidas;
