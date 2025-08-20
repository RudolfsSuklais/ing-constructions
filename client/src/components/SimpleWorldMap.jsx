// components/SimpleWorldMap.jsx
import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const SimpleWorldMap = ({
    partners,
    onPartnerSelect,
    selectedPartner,
    hoveredPartner,
    setHoveredPartner,
}) => {
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 130,
                center: [0, 30],
            }}
            style={{ width: "100%", height: "auto" }}>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#1a2226"
                            stroke="#e8f1e8"
                            strokeWidth={0.5}
                        />
                    ))
                }
            </Geographies>
            {partners.map((partner) => (
                <Marker
                    key={partner.id}
                    coordinates={[partner.location.lng, partner.location.lat]}
                    onClick={() => onPartnerSelect(partner)}
                    onMouseEnter={() => setHoveredPartner(partner.id)}
                    onMouseLeave={() => setHoveredPartner(null)}>
                    <circle
                        r={
                            selectedPartner && selectedPartner.id === partner.id
                                ? 6
                                : hoveredPartner === partner.id
                                ? 5
                                : 4
                        }
                        fill={categoryColors[partner.category]}
                        stroke="#0f1518"
                        strokeWidth={1}
                        style={{ cursor: "pointer" }}
                    />
                    {(hoveredPartner === partner.id ||
                        (selectedPartner &&
                            selectedPartner.id === partner.id)) && (
                        <text
                            textAnchor="middle"
                            y={-10}
                            style={{
                                fontFamily: "system-ui",
                                fill: "#FFFFFF",
                                fontSize: "10px",
                                paintOrder: "stroke",
                                stroke: "#1a2226",
                                strokeWidth: "3px",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }}>
                            {partner.name}
                        </text>
                    )}
                </Marker>
            ))}
        </ComposableMap>
    );
};

export default SimpleWorldMap;
