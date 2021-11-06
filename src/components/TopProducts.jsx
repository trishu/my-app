import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { useDispatch } from "react-redux";
import { retriveAllProducts } from '../actions/product'
import LoadingScreen from './LoadingScreen'

const TopProducts = () => {
  let prodName = [];
  let prodViews = [];
  let dispatch = useDispatch();
  

  useEffect(async () => {
    const data = await dispatch(retriveAllProducts());
    if (data.length === 0) {
      return (<div><LoadingScreen /></div>)
    }
    prodName = data.map(product => product.productName);
    prodViews = data.map(product => product.productViews);
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: prodName,
        datasets: [
          {
            label: "# of Views",
            data: prodViews,
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange"
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1
          }
        ]
      }
    });
  }, []);
  return (
    <>
      <div className="chart-container" style={{ position: 'relative', height: '500px', width: '800px',margin:'25px'  }}>
        <canvas id="myChart" />
      </div>
    </>
  );
}

export default TopProducts;