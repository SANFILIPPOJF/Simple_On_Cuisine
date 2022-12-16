export function MealByID(props) {

    fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${props.meals}`)
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