function LogoTile({ logo }) {
  return (
    <figure className="home-logo-tile" role="listitem">
      <img className="home-logo-mark" src={logo.src} alt={`${logo.name} logo`} loading="lazy" />
      <figcaption aria-hidden="true">{logo.name}</figcaption>
    </figure>
  );
}

function LogoGroup({ logos, duplicate = false }) {
  return (
    <div className="home-logo-marquee-group" role="list" aria-hidden={duplicate ? 'true' : undefined}>
      {logos.map((logo, index) => {
        const showCategory = logo.category && (index === 0 || logo.category !== logos[index - 1].category);
        return (
          <div className="home-logo-entry" key={logo.name}>
            {showCategory && <span className="home-logo-category">{logo.category}</span>}
            <LogoTile logo={logo} />
          </div>
        );
      })}
    </div>
  );
}

export default function HomeLogoMarquee({ logos, direction, label }) {
  return (
    <div className="home-logo-marquee" role="region" aria-label={label}>
      <div className={`home-logo-marquee-window home-logo-marquee-${direction}`}>
        <div className="home-logo-marquee-track">
          <LogoGroup logos={logos} />
          <LogoGroup logos={logos} duplicate />
        </div>
      </div>
    </div>
  );
}