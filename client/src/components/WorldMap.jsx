import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WorldMap = ({ partners }) => {
    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {partners.map((partner) => (
                <Marker
                    key={partner.id}
                    position={[partner.location.lat, partner.location.lng]}>
                    <Popup>
                        <b>{partner.name}</b>
                        <br />
                        {partner.location.city}, {partner.location.country}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default WorldMap;
