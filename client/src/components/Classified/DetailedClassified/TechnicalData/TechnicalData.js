import "./TechnicalData.css";

const TechnicalData = ({ classified }) => {
    const techData = classified.techData;
    return (
        <div className="TechnicalData-container">
            <h2>{classified.title}</h2>
            <div className="TechnicalData-Price">
                <p>{classified.price} €</p>
            </div>
            <div>
                <span>
                    HP: <span>{techData.hp}</span>
                </span>
                <span>
                    Engine: <span>{techData.engine}</span>
                </span>
                <span>
                    Drive: <span>{techData.drive}</span>
                </span>
            </div>
            <div>
                <span>
                    Transmission: <span>{techData.transmission}</span>
                </span>
                <span>
                    Fuel: <span>{techData.fuel}</span>
                </span>
                <span>
                    Milleage: <span>{techData.mileage}</span>
                </span>
            </div>
            <div>
                <span>
                    Doors: <span>{techData.doors}</span>
                </span>
                <span>
                    Body: <span>{techData.body}</span>
                </span>
                <span>
                    Color: <span>{techData.color}</span>
                </span>
            </div>
            <div>
                <span>
                    Year: <span>{techData.year}</span>
                </span>
                <span>
                    Interior: <span>{techData.interior}</span>
                </span>
                <span>
                    EURO Class: <span>{techData.euroClass}</span>
                </span>
            </div>
            <div>
                <span className="TechnicalData-category">
                    Category: <span>{classified.category}</span>
                </span>
                <span className="TechnicalData-location">
                    Location:{" "}
                    <span>
                        {classified.location.street}{" "}
                        {classified.location.number}, {classified.location.zip},
                        {classified.location.city}
                    </span>
                </span>
            </div>
        </div>
    );
};

export default TechnicalData;
