export default function MainPage() {
  return (
    <section className="content">
      <div className="left-content">
        <div className="activities">
          <h1>Popular Activities</h1>
          <div className="activity-container">
            <div className="image-container img-one">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/467cf682-03fb-4fae-b129-5d4f5db304dd"
                alt="tennis"
              />
              <div className="overlay">
                <h3>Tennis</h3>
              </div>
            </div>

            <div className="image-container img-two">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3bab6a71-c842-4a50-9fed-b4ce650cb478"
                alt="hiking"
              />
              <div className="overlay">
                <h3>Hiking</h3>
              </div>
            </div>

            <div className="image-container img-three">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8e88356-8df5-4ac5-9e1f-5b9e99685021"
                alt="running"
              />
              <div className="overlay">
                <h3>Running</h3>
              </div>
            </div>

            <div className="image-container img-four">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/69437d08-f203-4905-8cf5-05411cc28c19"
                alt="cycling"
              />
              <div className="overlay">
                <h3>Cycling</h3>
              </div>
            </div>

            <div className="image-container img-five">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e1a66078-1927-4828-b793-15c403d06411"
                alt="yoga"
              />
              <div className="overlay">
                <h3>Yoga</h3>
              </div>
            </div>

            <div className="image-container img-six">
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7568e0ff-edb5-43dd-bff5-aed405fc32d9"
                alt="swimming"
              />
              <div className="overlay">
                <h3>Swimming</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="left-bottom">
          <div className="personal-bests">
            <h1>Personal Bests</h1>
            <div className="personal-bests-container">
              <div className="best-item box-one">
                <p>Fastest 5K Run: 22min</p>
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/242bbd8c-aaf8-4aee-a3e4-e0df62d1ab27"
                  alt=""
                />
              </div>
              <div className="best-item box-two">
                <p>Longest Distance Cycling: 4 miles</p>
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a3b3cb3a-5127-498b-91cc-a1d39499164a"
                  alt=""
                />
              </div>
              <div className="best-item box-three">
                <p>Longest Roller-Skating: 2 hours</p>
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e0ee8ffb-faa8-462a-b44d-0a18c1d9604c"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="mobile-personal-bests">
          <h1>Personal Bests</h1>
          <div className="personal-bests-container">
            <div className="best-item box-one">
              <p>Fastest 5K Run: 22min</p>
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/05dfc444-9ed3-44cc-96af-a9cf195f5820"
                alt=""
              />
            </div>
            <div className="best-item box-two">
              <p>Longest Distance Cycling: 4 miles</p>
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9ca170e9-1252-4fa6-8677-36493540c1f2"
                alt=""
              />
            </div>
            <div className="best-item box-three">
              <p>Longest Roller-Skating: 2 hours</p>
              <img
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/262d1611-ed4c-4297-981c-480cf7f95714"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="friends-activity">
          <h1>Friends Activity</h1>
          <div className="card-container">
            <div className="card">
              <div className="card-user-info">
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9290037d-a5b2-4f50-aea3-9f3f2b53b441"
                  alt=""
                />
                <h2>Jane</h2>
              </div>
              <img
                className="card-img"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/bef54506-ea45-4e42-a1b6-23a48f61c5e8"
                alt=""
              />
              <p>We completed the 30-Day Running Streak Challenge!🏃‍♀️🎉</p>
            </div>

            <div className="card card-two">
              <div className="card-user-info">
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/42616ef2-ba96-49c7-80ea-c3cf1e2ecc89"
                  alt=""
                />
                <h2>Mike</h2>
              </div>
              <img
                className="card-img"
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2dcc1b94-06c5-4c62-b886-53b9e433fd44"
                alt=""
              />
              <p>I just set a new record in cycling: 30 miles!💪</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
