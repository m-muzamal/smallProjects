import React, { useEffect, useState } from "react";
import "./api.css";

function Api() {
  const [data, setData] = useState([]);
  const [selectedPrize, setSelectedPrize] = useState(null);

  useEffect(() => {
    fetch("https://irfangul92.github.io/index.json")
      .then((res) => res.json())
      .then((data) => setData(data.nobelPrizes))
      .catch((err) => console.log(err));
  }, []);

  const handlePrizeClick = (data) => {
    setSelectedPrize(data);
  };

  (async () => {
    const response = await fetch("https://irfangul92.github.io/index.json")
    const item = response.json();
    console.log(item.nobelPrizes);
  })();

  return (
    <div className="container">
      <div className="content">
        <h1>Prizes</h1>
        {selectedPrize ? (
          <div>
            <h3>{selectedPrize.categoryFullName}</h3>
            <p><span>Year: </span>{selectedPrize.awardYear}</p>
            <p><span>Date Awarded: </span>{selectedPrize.dateAwarded}</p>
            <p><span>Category: </span>{selectedPrize.category}</p>
            <p><span>Name: </span>{selectedPrize.laureates[0].fullName}</p>
            <p><span>Prize Amount: </span>${selectedPrize.prizeAmount}</p>
            <p><span>Prize Amount Adjusted: </span>${selectedPrize.prizeAmountAdjusted}</p>
            <p><span>Laureates: </span>{selectedPrize.laureates[0].knownName}</p>
            <p><span>Motivation: </span>{selectedPrize.laureates[0].motivation}</p>
            <button onClick={() => setSelectedPrize(null)}>Go Back</button>
          </div>
        ) : (
          <ul>
            {data.map((data, index) => (
              <li key={index} onClick={() => handlePrizeClick(data)}>
                {data.laureates[0].knownName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Api;
