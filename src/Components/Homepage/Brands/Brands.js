import React from 'react';
import '../Brands/Brands.css'
const Brands = () => {
         const Brands=[{logo:"https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6.png"},{logo:"https://mpng.subpng.com/20180511/zie/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde3d3a5e8.2671715915260584678669.jpg"},{logo:"data:image/png;base64,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"},{logo:"data:image/png;base64,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"},{logo:"data:image/png;base64,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"}]

    return (
        <div className="justify-content-center BrandHeader px-5 pb-5">
            <h1  className="text-center BrandHeaderr" >We been<span className="text-warning"> Powered</span> by</h1>
            <div className="row px-5 justify-content-center  pt-4">
{Brands.map(br=>

<div className="col-md-3 text-center ">

                    

                    <img className="img-fluid p-2 logo" src={br.logo} alt="nai" />
                            </div>
                )}

            </div>
        </div>
    );
};

export default Brands;