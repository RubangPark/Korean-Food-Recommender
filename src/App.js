import React, { useState } from "react";
import FoodCard from "./components/FoodCard";

const foodData = [
  {
    name: "불고기",
    taste: "달콤한",
    country: ["미국", "영국"],
    allergy: [],
    description: "달콤한 간장 양념의 소고기 볶음"
  },
  {
    name: "김치찌개",
    taste: "매운",
    country: ["미국", "일본"],
    allergy: [],
    description: "매운 김치와 돼지고기를 넣은 찌개"
  },
  {
    name: "비빔밥",
    taste: "다양한",
    country: ["프랑스", "미국"],
    allergy: ["계란"],
    description: "여러 재료를 비벼 먹는 밥 요리"
  }
];

export default function App() {
  const [country, setCountry] = useState("");
  const [taste, setTaste] = useState("");
  const [allergy, setAllergy] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    const filtered = foodData.filter((food) => {
      const matchCountry = country ? food.country.includes(country) : true;
      const matchTaste = taste ? food.taste.includes(taste) : true;
      const noAllergy = allergy ? !food.allergy.includes(allergy) : true;
      return matchCountry && matchTaste && noAllergy;
    });
    setResult(filtered);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>외국인을 위한 한국 음식 추천</h1>
      <div style={{ marginBottom: "1rem" }}>
        <input placeholder="국가 (예: 미국)" onChange={(e) => setCountry(e.target.value)} />
        <input placeholder="맛 (예: 매운)" onChange={(e) => setTaste(e.target.value)} />
        <input placeholder="알레르기 (예: 계란)" onChange={(e) => setAllergy(e.target.value)} />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div>
        {result.map((food, idx) => (
          <FoodCard key={idx} food={food} />
        ))}
      </div>
    </div>
  );
}