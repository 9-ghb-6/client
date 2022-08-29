function HistoryItem(data) {
    return ( 
        <h4>
            {data.itemDate}<small>{data.useDesc}</small>
        </h4>
     );
}

export default HistoryItem;