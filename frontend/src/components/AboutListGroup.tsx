export default function AboutListGroup() {
  return (
    <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item fs-4 fw-bold">About Us</li>
        <li className="list-group-item">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Ong Wei Xiang</h5>
                  <p className="card-text text-center">
                    Y1 Computer Engineering
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">Yeo Zong Yao</h5>
                  <p className="card-text text-center">
                    Y1 Computer Engineering
                  </p>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </li>
        <li className="list-group-item fs-4 fw-bold">Our Motivation</li>
        <li className="list-group-item">
          Having been involved with the recent Inter-Hall Games, we observed an
          obvious pain point that can be filled with our service. The inter-hall
          games is the largest sporting event in NUS, with the different halls
          coming together to compete in more than 20 sports. The involved
          athletes come in the hundreds and the audience, in the thousands. Yet,
          there is no standardized platform to keep track of the scores and team
          sheet. Instead, halls utilize a very rudimentary way of updating
          scores and team sheets - telegram announcement channels. This is very
          unintuitive, given the tendency for messages to be quickly overwritten
          by new messages and the possibility of messages being sent and edited
          wrongly. This is especially prevalent when multiple sports have their
          matches at the same time.
          <br />
          <br />
          As such, we would like to create a web-application that every hall can
          utilize such that audiences will have easy, standardized and accurate
          access to the correct\ scores, team sheets and match ups. Given that
          inter-hall games is not the sole sporting event in NUS, nusscores.com
          has huge potential. It can be adopted in the Inter-Hall Games,
          Inter-College Games or Varsity Games.
          <br />
          <br />
          Currently, selected matches are live streamed as well. NUSScores.com
          will attach links for easy access to these livestreams and also serve
          as a platform for spectators to support their teams through online
          commentary and discussions. These are current events that currently
          happen very dissociatively and haphazardly, due to the lack of a
          standardized platform.
        </li>
        <li className="list-group-item fs-4 fw-bold">Our Aim</li>
        <li className="list-group-item">
          We aim to create a web application that can streamline the
          scorekeeping of sports tournaments. The convening body will be able to
          create different tournament brackets (i.e. single elimination, double
          elimination, round robin etc.), and scorekeepers only need to input
          the match results and team lineups into the system. Everything else
          will be computed automatically by the app. Additionally, users will be
          able to set a to-support-list and schedule reminders on interested
          matches. Users will also be able to interact with their hall friends
          through the live match commentary and discussion feature.
        </li>
      </ul>
    </>
  );
}
