
import imgDetail from'../../assets/img/img-detail.jpg'
import VoteInfo from '../VoteInfo/VoteInfo'
import './BannerDetail.css'


function BannerDetail() {
  return (
    <div className="banner-detail">
        <div className="left-img">
            <img src={imgDetail} alt="imgDetail" />
        </div>
        <div className="right-content">
            <h1 className="name">Spririted Away <span className="publish-year">(2001)</span></h1>
            <ul className="list-info-detail">
                <li className="publish-date">07/20/2001 <span className="short-origin">(JP)</span></li>
                <li className="genre">Animation, Family, Fantasy</li>
                <li className="time">2h5m</li>

            </ul>
            {/* <div className="vote-info">
                <div className="point-vote">
                    <div className="circle">
                        <div className="chart">

                        <h3 className="point-number">8.5</h3>
                        </div>
                    </div>
                </div>
                <h2 className="count-vote">Vote count: 500</h2>
            </div> */}
            {/* <div className="vote-info">
                <div className="point-vote">
                    <div className="circle">
                        <div className="chart">
                            <canvas id="voteCanvas" width="68" height="68"></canvas>
                            <h3 className="point-number">8.5</h3>
                        </div>
                    </div>
                </div>
                <h2 className="count-vote">Vote count: 500</h2>
            </div> */}
            <VoteInfo point = {7.5}></VoteInfo>
            <h2 className="overview">Overview</h2>
            <p className="overview-content">A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.</p>
            <h3 className="director-name">
            Hayao Miyazaki
            </h3>
            <p className="role">Director, Writer</p>

        </div>

    </div>
  )
}

export default BannerDetail