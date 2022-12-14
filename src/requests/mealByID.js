import { useState, useEffect } from "react";
export function MealByID() {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
    fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });

            }
        )
}