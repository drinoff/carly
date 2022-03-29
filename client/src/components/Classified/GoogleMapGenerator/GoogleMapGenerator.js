const GoogleMapGenerator = ({ location }) => {
    return (
        <div className="mapouter">
            <div className="gmap_canvas">
                <iframe
                    title="google-map"
                    width={240}
                    height={230}
                    id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=${location.number}%20${location.street},%20${location.city}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                />
                <br />
                <style
                    dangerouslySetInnerHTML={{
                        __html: ".mapouter{position:relative;text-align:right;height:230px;width:240px;}",
                    }}
                />
                <a href="https://www.embedgooglemap.net">
                    how to add map in website
                </a>
                <style
                    dangerouslySetInnerHTML={{
                        __html: ".gmap_canvas {margin:0px;overflow:hidden;background:none!important;height:230px;width:240px;}",
                    }}
                />
            </div>
        </div>
    );
};
export default GoogleMapGenerator;
