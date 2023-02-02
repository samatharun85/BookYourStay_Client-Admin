import useFetch from "../../hooks/useFetch.js";
import "./featured.css";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Hyderabad,Vijayawada,Tirupathi"
  );
  // console.log(data)
  return (
    <div className="featured">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.eroshotels.co.in/wp-content/uploads/2018/04/superior-room-home-page.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hyderabad</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/1163498940/photo/interior-of-a-modern-luxury-hotel-double-bed-bedroom.jpg?s=612x612&w=0&k=20&c=75KFjgY3RHrQq2yTV4boA4A89qMeccMQZotFKIMURS8="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Vijayawada</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.tridenthotels.com/img/mobile-foo-banner/bhubaneshwar.png"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Tirupathi</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
