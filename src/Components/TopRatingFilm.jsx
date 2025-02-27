const Suzume = "../assets/assetgambar/assetgambarberanda/filmnya/suzume.png";
const JurassicWorldDominion = "../assets/assetgambar/assetgambarberanda/filmnya/jurassicworlddominion.png";
const Sonic2 = "../assets/assetgambar/assetgambarberanda/filmnya/sonic2.png";
const AllOfUsAreDead = "../assets/assetgambar/assetgambarberanda/filmnya/allofusaredead.png";
const BigHero6 = "../assets/assetgambar/assetgambarberanda/filmnya/bighero6.png";
const TombolKiri = "../assets/assetgambar/assetgambarberanda/arrow-left.png";
const TombolKanan = "../assets/assetgambar/assetgambarberanda/arrow-right.png";

import "./cssComponents/film.css"


const topRatingFilms = [Suzume, JurassicWorldDominion, Sonic2, AllOfUsAreDead, BigHero6 ]

function TopRatingFilms () {
  return(
    <>
      <div className="arrayfilm">
        <div className="tombolkiri"><img src={TombolKiri}/></div>
        
        {topRatingFilms.map((film, index) => (
          <div key={index} className={`films${index}`} style={{ backgroundImage:`url(${film})`}}>

            {[0, 3].includes(index) &&  (
            <div className="episodebaru">Episode Baru</div>
          )}
          </div>
      ))}
          <div className="tombolkanan"><img src={TombolKanan}/></div>

      
    </div>
    </>

  )
}
export default TopRatingFilms