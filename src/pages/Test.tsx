import React from "react";

export default function Test() {
  return (
    <button
      onClick={async () => {
        try {
          const response = await fetch("http://localhost:8080/taro", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: "John" }),
          });
          const data = await response.json();
          console.log(data);
          return data;
        } catch (error) {
          console.log(error);
        }
      }}
    >
      test
    </button>
  );
}
