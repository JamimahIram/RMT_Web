import { brands } from "../../../data/brands";
const Brands = () => {
  return (
    <>
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row justify-center">
            <div className="col text-center">
              <p className="text-lg text-dark-1">Trusted by the world’s best Universities</p>
            </div>
          </div>
          <div className="row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50">
            {brands.map((logo, i) => (
              <div key={i} className="col-lg-auto col-md-3 col-sm-4 col-6">
                <div className="d-flex justify-center items-center px-4">
                  <img
                    className="w-1/1"
                    src={logo && logo}
                    alt="clients image"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;