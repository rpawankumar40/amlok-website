import { Link } from 'react-router-dom';

export default function SolutionCard({ solution, index }) {
    return (
        <article className="solution-feature-card">
            <div className="card-visual">
                <img
                    src={solution.image}
                    alt={solution.imageAlt}
                    className="card-visual-image"
                />
            </div>

            <div style={{
                padding: "18px"
            }}>

                <div className="solution-card-head">
                    <span className="solution-index">0{index + 1}</span>
                </div>

                <h3>{solution.title}</h3>
                <p>{solution.description}</p>

            <Link to="/solutions" className="solution-card-link">
                Explore Solution <span aria-hidden="true">→</span>
            </Link>
            </div>
        </article>
    );
}
