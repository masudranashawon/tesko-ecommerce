const LightDealsSection = () => {
  return (
    <section className="light-deals-section">
      {/* promotional header */}
      <div className="section-promo-header bg-[#FF4F4F]">
        <div className="container flex flex-col items-center justify-between gap-3 py-3 md:flex-row md:gap-0 md:py-5">
          {/* star icon */}
          <span>
            <svg
              width={56}
              height={56}
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
                fill="white"
              />
            </svg>
          </span>
          {/* promo title */}
          <h2 className="text-theme-light flex flex-col items-center gap-2 text-3xl font-semibold md:flex-row md:gap-5">
            <p>
              <span>
                <i className="fa-solid fa-bolt" />
              </span>
              Light deals
            </p>
            <p className="text-base font-medium">
              Limited Time Offer
              <span className="text-xs">
                <i className="fa-solid fa-chevron-right" />
              </span>
            </p>
          </h2>
          {/* star icon */}
          <span>
            <svg
              width={56}
              height={56}
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* light deals swiper carousel */}
      <div className="container">
        <div className="swiper lightDealsSwiper">
          <div className="swiper-wrapper">
            {/* slide 1 */}
            <div className="swiper-slide px-1 py-5">
              <a
                href="#"
                className="product-card eq group block w-full rounded-lg p-3 hover:shadow-lg"
              >
                {/* slide image */}
                <div className="card-image relative h-[16.5rem] overflow-hidden rounded-lg">
                  <img
                    src="./assests/images/light-deal-1.png"
                    alt="Model wearing a jacket"
                    className="eq h-full w-full object-cover group-hover:scale-125"
                  />
                  <span className="absolute bottom-9 left-1/2 block w-3/5 -translate-x-1/2 rounded-full bg-white px-4 py-3 text-center text-sm">
                    Almost Sold Out
                  </span>
                </div>
                {/* Slide Content */}
                <div className="card-content mt-2 space-y-1">
                  {/* price & sold info */}
                  <div className="price-sold-amount flex items-center gap-2">
                    <h2 className="text-primary text-2xl font-bold">
                      <span>
                        <i className="fa-solid fa-bolt text-[#ffa755]" />
                      </span>
                      <span className="align-middle text-xs text-[#ffa755]">
                        $
                      </span>
                      25.00
                    </h2>
                    <p className="text-base">4.5K+ Sold</p>
                  </div>
                  {/* time */}
                  <div className="time-progres flex flex-wrap items-center gap-2">
                    <div className="h-2 w-[60%] rounded-full bg-gray-200">
                      <div
                        className="progress bg-primary h-2 rounded-full"
                        style={{ width: "95%" }}
                      />
                    </div>
                    <span className="due-time flex-no-wrap inline-flex w-[35%] items-center gap-1 text-sm">
                      <i className="fa-regular fa-clock" /> 1:12:53.55
                    </span>
                  </div>
                  {/* rating */}
                  <div className="flex items-center gap-2">
                    <div className="rating-stars text-light-yellow text-xs">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <span className="text-primary text-sm">Final Hours</span>
                  </div>
                </div>
              </a>
            </div>
            {/* slide 2 */}
            <div className="swiper-slide px-1 py-5">
              <a
                href="#"
                className="product-card eq group block w-full rounded-lg p-3 hover:shadow-lg"
              >
                {/* slide image */}
                <div className="card-image relative h-[16.5rem] overflow-hidden rounded-lg">
                  <img
                    src="./assests/images/light-deal-2.png"
                    alt="Ladies Vanity Bag"
                    className="eq h-full w-full object-cover group-hover:scale-125"
                  />
                  <span className="absolute bottom-9 left-1/2 block w-3/5 -translate-x-1/2 rounded-full bg-white px-4 py-3 text-center text-sm">
                    Almost Sold Out
                  </span>
                </div>
                {/* Slide Content */}
                <div className="card-content mt-2 space-y-1">
                  {/* price & sold info */}
                  <div className="price-sold-amount flex items-center gap-2">
                    <h2 className="text-primary text-2xl font-bold">
                      <span>
                        <i className="fa-solid fa-bolt text-[#ffa755]" />
                      </span>
                      <span className="align-middle text-xs text-[#ffa755]">
                        $
                      </span>
                      40.00
                    </h2>
                    <p className="text-base">8.2K+ Sold</p>
                  </div>
                  {/* time */}
                  <div className="time-progres flex flex-wrap items-center gap-2">
                    <div className="h-2 w-[60%] rounded-full bg-gray-200">
                      <div
                        className="progress bg-primary h-2 rounded-full"
                        style={{ width: "95%" }}
                      />
                    </div>
                    <span className="due-time flex-no-wrap inline-flex w-[35%] items-center gap-1 text-sm">
                      <i className="fa-regular fa-clock" /> 0:45:53.55
                    </span>
                  </div>
                  {/* rating */}
                  <div className="flex items-center gap-2">
                    <div className="rating-stars text-light-yellow text-xs">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <span className="text-primary text-sm">Final Hours</span>
                  </div>
                </div>
              </a>
            </div>
            {/* slide 3 */}
            <div className="swiper-slide px-1 py-5">
              <a
                href="#"
                className="product-card eq group block w-full rounded-lg p-3 hover:shadow-lg"
              >
                {/* slide image */}
                <div className="card-image relative h-[16.5rem] overflow-hidden rounded-lg">
                  <img
                    src="./assests/images/light-deal-3.png"
                    alt="Exclusive shoe's for Boy's"
                    className="eq h-full w-full object-cover group-hover:scale-125"
                  />
                  <span className="absolute bottom-9 left-1/2 block w-3/5 -translate-x-1/2 rounded-full bg-white px-4 py-3 text-center text-sm">
                    Almost Sold Out
                  </span>
                </div>
                {/* Slide Content */}
                <div className="card-content mt-2 space-y-1">
                  {/* price & sold info */}
                  <div className="price-sold-amount flex items-center gap-2">
                    <h2 className="text-primary text-2xl font-bold">
                      <span>
                        <i className="fa-solid fa-bolt text-[#ffa755]" />
                      </span>
                      <span className="align-middle text-xs text-[#ffa755]">
                        $
                      </span>
                      30.00
                    </h2>
                    <p className="text-base">1.9K+ Sold</p>
                  </div>
                  {/* time */}
                  <div className="time-progres flex flex-wrap items-center gap-2">
                    <div className="h-2 w-[60%] rounded-full bg-gray-200">
                      <div
                        className="progress bg-primary h-2 rounded-full"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <span className="due-time flex-no-wrap inline-flex w-[35%] items-center gap-1 text-sm">
                      <i className="fa-regular fa-clock" /> 18:13:45.12
                    </span>
                  </div>
                  {/* rating */}
                  <div className="flex items-center gap-2">
                    <div className="rating-stars text-light-yellow text-xs">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star-half-stroke" />
                    </div>
                    <span className="text-primary text-sm">Final Hours</span>
                  </div>
                </div>
              </a>
            </div>
            {/* slide 4 */}
            <div className="swiper-slide px-1 py-5">
              <a
                href="#"
                className="product-card eq group block w-full rounded-lg p-3 hover:shadow-lg"
              >
                {/* slide image */}
                <div className="card-image relative h-[16.5rem] overflow-hidden rounded-lg">
                  <img
                    src="./assests/images/light-deal-4.png"
                    alt="A man wearing a Yellow T-Shirt & Black Short Pant"
                    className="eq h-full w-full object-cover group-hover:scale-125"
                  />
                  <span className="absolute bottom-9 left-1/2 block w-3/5 -translate-x-1/2 rounded-full bg-white px-4 py-3 text-center text-sm">
                    Almost Sold Out
                  </span>
                </div>
                {/* Slide Content */}
                <div className="card-content mt-2 space-y-1">
                  {/* price & sold info */}
                  <div className="price-sold-amount flex items-center gap-2">
                    <h2 className="text-primary text-2xl font-bold">
                      <span>
                        <i className="fa-solid fa-bolt text-[#ffa755]" />
                      </span>
                      <span className="align-middle text-xs text-[#ffa755]">
                        $
                      </span>
                      99.99
                    </h2>
                    <p className="text-base">0.5K+ Sold</p>
                  </div>
                  {/* time */}
                  <div className="time-progres flex flex-wrap items-center gap-2">
                    <div className="h-2 w-[60%] rounded-full bg-gray-200">
                      <div
                        className="progress bg-primary h-2 rounded-full"
                        style={{ width: "45%" }}
                      />
                    </div>
                    <span className="due-time flex-no-wrap inline-flex w-[35%] items-center gap-1 text-sm">
                      <i className="fa-regular fa-clock" /> 12:11:14.17
                    </span>
                  </div>
                  {/* rating */}
                  <div className="flex items-center gap-2">
                    <div className="rating-stars text-light-yellow text-xs">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <span className="text-primary text-sm">Final Hours</span>
                  </div>
                </div>
              </a>
            </div>
            {/* slide 5 */}
            <div className="swiper-slide px-1 py-5">
              <a
                href="#"
                className="product-card eq group block w-full rounded-lg p-3 hover:shadow-lg"
              >
                {/* slide image */}
                <div className="card-image relative h-[16.5rem] overflow-hidden rounded-lg">
                  <img
                    src="./assests/images/light-deal-5.png"
                    alt="Electronics Accessories By Apple"
                    className="eq h-full w-full object-cover group-hover:scale-125"
                  />
                  <span className="absolute bottom-9 left-1/2 block w-3/5 -translate-x-1/2 rounded-full bg-white px-4 py-3 text-center text-sm">
                    Almost Sold Out
                  </span>
                </div>
                {/* Slide Content */}
                <div className="card-content mt-2 space-y-1">
                  {/* price & sold info */}
                  <div className="price-sold-amount flex items-center gap-2">
                    <h2 className="text-primary text-2xl font-bold">
                      <span>
                        <i className="fa-solid fa-bolt text-[#ffa755]" />
                      </span>
                      <span className="align-middle text-xs text-[#ffa755]">
                        $
                      </span>
                      299.99
                    </h2>
                    <p className="text-base">10.5K+ Sold</p>
                  </div>
                  {/* time */}
                  <div className="time-progres flex flex-wrap items-center gap-2">
                    <div className="h-2 w-[60%] rounded-full bg-gray-200">
                      <div
                        className="progress bg-primary h-2 rounded-full"
                        style={{ width: "25%" }}
                      />
                    </div>
                    <span className="due-time flex-no-wrap inline-flex w-[35%] items-center gap-1 text-sm">
                      <i className="fa-regular fa-clock" /> 0:50:13.45
                    </span>
                  </div>
                  {/* rating */}
                  <div className="flex items-center gap-2">
                    <div className="rating-stars text-light-yellow text-xs">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <span className="text-primary text-sm">Final Hours</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightDealsSection;
