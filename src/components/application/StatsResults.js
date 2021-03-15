import React from "react";

function StatsResults({ body }) {

    return (
        <>
            <h1>Stats results</h1>
            <pre>{JSON.stringify(body, null, 3)}</pre>
        </>
    );

}

export default StatsResults;
