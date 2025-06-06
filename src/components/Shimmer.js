const Shimmer = () =>{
    return(
        <div className="">
            <div className="searchHeader">
                <h1 className="text skeleton skeleton-text"></h1>
                <span className="search">
                    <button className="searchButton skeleton skeleton-button" />
                </span> 
            </div>
            <div className="categorieslist">
                {Array(6).fill("").map((e, index)=>(
                    <button key={index} className="categoriesCard skeleton-Cimg"/>
                ))}
            </div>
            <hr className="divider"></hr>
            <h1 className="text skeleton skeleton-text"></h1>
            <div className="restruant skeleton-restruant">
                {Array(5).fill("").map((e, index)=>(
                    <div key={index} className="restrauntlist card skeleton skeleton-card">
                    <img className="skeleton skeleton-Cimg"/>
                    <h1 className="skeleton skeleton-text"></h1>
                    <h2 className="skeleton skeleton-text"></h2>
                    <h3 className="skeleton skeleton-text"></h3>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Shimmer;