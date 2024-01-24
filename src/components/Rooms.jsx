import { useEffect, useState } from "react";

const Rooms = () => {
  const [allData, setallData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setallData(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-lg font-bold my-12 underline">
        Our Rooms
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {allData.map((data) => (
          <div
            key={data.id}
            className="card card-compact  bg-base-100 shadow-xl"
          >
            <figure>
              <img src={data?.image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data?.house_name}</h2>
              <p>Room: {data?.room}</p>
              <p>Rent: {data?.rent}</p>
              <p>Location: {data?.location}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
