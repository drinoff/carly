import "./ReviewArticle.css";

const BlogArticle = ({ review }) => {
    console.log(review);
    return (
        <div className="Blog-blogArticle">
            <h1>{review.title}</h1>
            <iframe
                width="560"
                height="315"
                src={review.embed}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="BlogArticle-highLow">
                <div>
                    <h3 className="BlogArticle-highs">Highs</h3>
                    <p className="BlogArticle-description">{review.highs}</p>
                </div>
                <div>
                    <h3 className="BlogArticle-lows">Lows</h3>
                    <p className="BlogArticle-description">{review.lows}</p>
                </div>
                <div>
                    <h3 className="BlogArticle-verdict">Verdict</h3>
                    <p className="BlogArticle-description">{review.verdict}</p>
                </div>
            </div>
            <p>{review.description}</p>
            <hr />
        </div>
    );
};

export default BlogArticle;
