import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Invitation,
})

function Invitation() {
  return (
    <>
      <nav className="inv-nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            TERALAB <span>30th Anniversary</span>
          </a>
          <div className="nav-links">
            <a href="#info">초대 안내</a>
            <a href="#map">오시는 길</a>
            <a href="#program">식순</a>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">✦ Research Lab Anniversary Invitation</div>
              <h1>
                TERALAB
                <br />
                30th Anniversary
                <small>연구실 30주년 기념 행사</small>
              </h1>
              <p className="lead">
                함께 걸어온 30년의 시간과 앞으로의 여정을 기념하는 자리에 소중한 분들을 초대합니다.
                등록 장소와 주차 안내를 확인하신 뒤 여유롭게 참석해 주세요.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#program">
                  식순 확인하기
                </a>
                <a className="btn secondary" href="#map">
                  등록·주차 안내 보기
                </a>
              </div>
            </div>
            <aside className="hero-card" id="info">
              <div className="date-box">
                <div className="date-main">15:00 — 20:00</div>
                <div className="date-sub">행사 준비 및 등록은 15:00부터 시작됩니다.</div>
              </div>
              <div className="info-list">
                <div className="info-item">
                  <div className="icon">📍</div>
                  <div>
                    <b>장소</b>
                    <br />
                    오뜨아르 (경기 용인시 기흥구 기흥단지로121번길 9 오뜨아르)
                    <br />
                    메인 행사 장소 및 등록 장소는 하단 안내 지도를 참고해 주세요.
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon">⭐</div>
                  <div>
                    <b>등록</b>
                    <br />
                    입구에서 파란 안내선을 따라 별표가 있는 등록 장소로 이동해 주세요.
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon">🚗</div>
                  <div>
                    <b>주차</b>
                    <br />
                    1·2·3 주차장을 이용하실 수 있습니다.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2 className="section-title">행사 안내</h2>
            <p className="section-desc">도착 후 참여자 등록 후 행사 참여 부탁드립니다.</p>
            <div className="cards">
              <article className="card">
                <h3>01. 등록</h3>
                <p>15:00부터 참여자 등록이 진행됩니다. 지도 속 별표 위치를 확인해 주세요.</p>
              </article>
              <article className="card">
                <h3>02. 네트워킹</h3>
                <p>식전 행사에서는 자유 네트워킹과 포토월 촬영이 준비되어 있습니다.</p>
              </article>
              <article className="card">
                <h3>03. 본행사</h3>
                <p>연혁 소개, 졸업생 축사, 케이크 커팅식, 경품 추첨까지 함께 진행됩니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="map">
          <div className="wrap map-grid">
            <div className="map-card">
              <img src="/teralab30thanniversary/map.png" alt="TERALAB 30주년 행사 주차 및 등록 장소 안내 지도" />
            </div>
            <div>
              <h2 className="section-title">등록·주차 안내</h2>
              <p className="section-desc">
                지도는 행사장 도착 후 이동 동선을 한눈에 볼 수 있도록 정리한 안내 이미지입니다.
              </p>
              <div className="notice">
                <div className="notice-item">
                  <b>주차 안내</b>1주차장, 2주차장, 3주차장 위치를 확인하고 가까운 곳을 이용해 주세요.
                </div>
                <div className="notice-item">
                  <b>등록 장소</b>입구에서 파란 안내선을 따라 이동하면 별표로 표시된 등록 장소가 있습니다.
                </div>
                <div className="notice-item">
                  <b>카페 이용</b>등록 후 네트워킹 및 카페 이용 가능합니다. (~17:00)
                </div>
                <div className="notice-item">
                  <b>메인 행사</b>메인 행사 장소로 이동하여 30주년 행사가 진행됩니다. (17:00~)
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="program">
          <div className="wrap">
            <h2 className="section-title">Program</h2>
            <p className="section-desc">TERALAB 30th Anniversary 당일 진행 순서입니다.</p>
            <div className="timeline">
              <div className="time-block">
                <div className="time">15:00 - 16:00</div>
                <div className="program">
                  <b>행사 준비 및 참여자 등록</b>
                  <span>도착 후 등록 장소에서 참석 확인을 진행합니다.</span>
                </div>
              </div>
              <div className="time-block">
                <div className="time">16:00 - 17:00</div>
                <div className="program">
                  <b>식전 행사</b>
                  <ul>
                    <li>자유 네트워킹</li>
                    <li>포토월 촬영</li>
                  </ul>
                </div>
              </div>
              <div className="divider-label">본행사 1부</div>
              <div className="time-block">
                <div className="time">17:00 - 17:05</div>
                <div className="program">
                  <b>개회 및 입장</b>
                </div>
              </div>
              <div className="time-block">
                <div className="time">17:05 - 17:10</div>
                <div className="program">
                  <b>교수님 인사말</b>
                </div>
              </div>
              <div className="time-block">
                <div className="time">17:10 - 17:30</div>
                <div className="program">
                  <b>테라랩 연혁 소개</b>
                </div>
              </div>
              <div className="time-block">
                <div className="time">17:35 - 18:00</div>
                <div className="program">
                  <b>졸업생 축사</b>
                </div>
              </div>
              <div className="divider-label">식사</div>
              <div className="time-block">
                <div className="time">18:00 - 19:00</div>
                <div className="program">
                  <b>식사 및 사진 영상 재생</b>
                </div>
              </div>
              <div className="divider-label">본행사 2부</div>
              <div className="time-block">
                <div className="time">19:00 - 19:20</div>
                <div className="program">
                  <b>간단 퀴즈 및 상품 수여 · 대화 &amp; 네트워킹</b>
                </div>
              </div>
              <div className="time-block">
                <div className="time">19:20 - 19:30</div>
                <div className="program">
                  <b>케이크 커팅식</b>
                </div>
              </div>
              <div className="time-block">
                <div className="time">19:30 - 19:45</div>
                <div className="program">
                  <b>전체 및 자유 포토</b>
                  <ul>
                    <li>기수 별 사진 촬영</li>
                  </ul>
                </div>
              </div>
              <div className="time-block">
                <div className="time">19:45 - 19:55</div>
                <div className="program">
                  <b>후원 감사 / 경품 추첨</b>
                </div>
              </div>
              <div className="time-block">
                <div className="time">19:55 - 20:00</div>
                <div className="program">
                  <b>교수님 마무리 및 폐회</b>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="inv-footer">
        <div className="wrap">
          <strong>TERALAB 30th Anniversary</strong>
          <span>함께해 주셔서 감사합니다.</span>
        </div>
      </footer>
    </>
  )
}
