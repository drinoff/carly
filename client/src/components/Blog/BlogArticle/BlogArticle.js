import "./BlogArticle.css";

const BlogArticle = ({ article }) => {
    return (
        <div className="Blog-blogArticle">
            <h1>{article.title}</h1>
            <iframe
                width="560"
                height="315"
                src={article.embed}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="BlogArticle-highLow">
                <div>
                    <h3 className="BlogArticle-highs">Highs</h3>
                    <p className="BlogArticle-description">{article.highs}</p>
                </div>
                <div>
                    <h3 className="BlogArticle-lows">Lows</h3>
                    <p className="BlogArticle-description">{article.lows}</p>
                </div>
                <div>
                    <h3 className="BlogArticle-verdict">Verdict</h3>
                    <p className="BlogArticle-description">{article.verdict}</p>
                </div>
            </div>
            <p>{article.description}</p>
            <hr />
        </div>
    );
};

export default BlogArticle;
