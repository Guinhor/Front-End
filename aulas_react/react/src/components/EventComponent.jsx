function EventComponent() {

    let count = 0;
    const countEvent = () => {
        console.log(count += 1);
    }

    return (
        <>
            <button onClick={countEvent}>Clique!</button>
        </>
    )
}

export default EventComponent