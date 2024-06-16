import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./masters.module.css";

const Masters: NextPage = () => {
  const router = useRouter();

  const onFantasyExperienceTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onPrximasPartidasTextClick = useCallback(() => {
    // Please sync "Partidas-login" to the project
  }, []);

  const onContactoTextClick = useCallback(() => {
    // Please sync "Contacto" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Master-detalles" to the project
  }, []);

  return (
    <div className={styles.masters}>
      <header className={styles.fantasyExperienceParent}>
        <h1
          className={styles.fantasyExperience}
          onClick={onFantasyExperienceTextClick}
        >
          <span className={styles.fantasyExperienceTxtContainer}>
            <p className={styles.fantasy}>Fantasy</p>
            <p className={styles.experience}>Experience</p>
          </span>
        </h1>
        <nav className={styles.inicioParent}>
          <a className={styles.inicio} onClick={onFantasyExperienceTextClick}>
            Inicio
          </a>
          <a
            className={styles.prximasPartidas}
            onClick={onPrximasPartidasTextClick}
          >
            Próximas partidas
          </a>
          <a className={styles.nuestrosMsters}>Nuestros Másters</a>
          <a className={styles.contacto} onClick={onContactoTextClick}>
            Contacto
          </a>
        </nav>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameContainer}>
              <div className={styles.heroGraphicElementsParent}>
                <div className={styles.heroGraphicElements}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <a className={styles.heroSubtitle}>2</a>
                  </div>
                </div>
                <div className={styles.heroRightContentWrapper}>
                  <div className={styles.heroRightContent}>
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
        <section className={styles.mastersContent}>
          <div className={styles.mastersDescription}>
            <div className={styles.conoceANuestrosMastersParent}>
              <h1 className={styles.conoceANuestrosContainer}>
                <span>
                  <p className={styles.conoceA}>{`Conoce a `}</p>
                  <p className={styles.nuestrosMasters}>nuestros Masters</p>
                </span>
              </h1>
              <div className={styles.mastersParagraph}>
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
            </div>
            <div className={styles.gameTypesContentWrapper}>
              <div className={styles.gameTypesContent}>
                <div className={styles.gameTypeTitle}>
                  <div className={styles.elijeElTipo}>
                    Elije el tipo de partida :
                  </div>
                  <div className={styles.gameExample}>
                    <div
                      className={styles.dungeonsDragons}
                    >{`Dungeons& dragons`}</div>
                  </div>
                </div>
                <div className={styles.gameTypes}>
                  <div className={styles.chuthulu}>Chuthulu</div>
                </div>
                <div className={styles.gameTypes1}>
                  <div className={styles.fate}>FATE</div>
                </div>
                <div className={styles.gameTypes2}>
                  <div className={styles.vampiroLaMascarada}>
                    Vampiro la mascarada
                  </div>
                </div>
                <div className={styles.gameTypes3}>
                  <div className={styles.hombreLobo}>Hombre lobo</div>
                </div>
                <div className={styles.gameTypes4}>
                  <div className={styles.zCorp}>Z-Corp</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <p className={styles.buscarPorNombre}>
              Buscar por nombre de evento o Master..
            </p>
            <div className={styles.searchBar}>
              <div className={styles.searchInput}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                />
                <div className={styles.searchIcon1} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mastersGrid}>
          <div
            className={styles.rectangleContainer}
            onClick={onGroupContainerClick}
          >
            <div className={styles.rectangleDiv} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
            />
            <div className={styles.masterCardInfo}>
              <h1 className={styles.masterName}>Master name</h1>
              <div className={styles.masterCardDetails}>
                <div className={styles.masterCardPreferences}>
                  <img
                    className={styles.masterCardPreferencesChild}
                    loading="lazy"
                    alt=""
                    src="/group-261.svg"
                  />
                </div>
                <div className={styles.preferencia}>Preferencia</div>
              </div>
              <div className={styles.juegos}>Juegos</div>
            </div>
            <b className={styles.verPerfil}>Ver perfil</b>
          </div>
          <div className={styles.groupDiv} onClick={onGroupContainerClick}>
            <div className={styles.frameChild1} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon1}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1-1@2x.png"
            />
            <div className={styles.masterNameParent}>
              <h1 className={styles.masterName1}>Master name</h1>
              <div className={styles.frameGroup}>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-26-11.svg"
                  />
                </div>
                <div className={styles.preferencia1}>Preferencia</div>
              </div>
              <div className={styles.juegos1}>Juegos</div>
            </div>
            <b className={styles.verPerfil1}>Ver perfil</b>
          </div>
          <div
            className={styles.rectangleParent1}
            onClick={onGroupContainerClick}
          >
            <div className={styles.frameChild2} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon2}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
            />
            <div className={styles.masterNameGroup}>
              <h1 className={styles.masterName2}>Master name</h1>
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper1}>
                  <img
                    className={styles.frameChild3}
                    loading="lazy"
                    alt=""
                    src="/group-26-21.svg"
                  />
                </div>
                <div className={styles.preferencia2}>Preferencia</div>
              </div>
              <div className={styles.juegos2}>Juegos</div>
            </div>
            <b className={styles.verPerfil2}>Ver perfil</b>
          </div>
          <div
            className={styles.rectangleParent2}
            onClick={onGroupContainerClick}
          >
            <div className={styles.frameChild4} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon3}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
            />
            <div className={styles.masterNameContainer}>
              <h1 className={styles.masterName3}>Master name</h1>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper2}>
                  <img
                    className={styles.frameChild5}
                    loading="lazy"
                    alt=""
                    src="/group-261.svg"
                  />
                </div>
                <div className={styles.preferencia3}>Preferencia</div>
              </div>
              <div className={styles.juegos3}>Juegos</div>
            </div>
            <b className={styles.verPerfil3}>Ver perfil</b>
          </div>
          <div
            className={styles.rectangleParent3}
            onClick={onGroupContainerClick}
          >
            <div className={styles.frameChild6} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon4}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1-1@2x.png"
            />
            <div className={styles.masterNameParent1}>
              <h1 className={styles.masterName4}>Master name</h1>
              <div className={styles.frameParent3}>
                <div className={styles.frameWrapper3}>
                  <img
                    className={styles.frameChild7}
                    loading="lazy"
                    alt=""
                    src="/group-26-11.svg"
                  />
                </div>
                <div className={styles.preferencia4}>Preferencia</div>
              </div>
              <div className={styles.juegos4}>Juegos</div>
            </div>
            <b className={styles.verPerfil4}>Ver perfil</b>
          </div>
          <div
            className={styles.rectangleParent4}
            onClick={onGroupContainerClick}
          >
            <div className={styles.frameChild8} />
            <img
              className={styles.cedericVandenberghe21dp3hytvIcon5}
              loading="lazy"
              alt=""
              src="/cedericvandenberghe21dp3hytvhwunsplash-1@2x.png"
            />
            <div className={styles.masterNameParent2}>
              <h1 className={styles.masterName5}>Master name</h1>
              <div className={styles.frameParent4}>
                <div className={styles.frameWrapper4}>
                  <img
                    className={styles.frameChild9}
                    loading="lazy"
                    alt=""
                    src="/group-26-21.svg"
                  />
                </div>
                <div className={styles.preferencia5}>Preferencia</div>
              </div>
              <div className={styles.juegos5}>Juegos</div>
            </div>
            <b className={styles.verPerfil5}>Ver perfil</b>
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

export default Masters;
