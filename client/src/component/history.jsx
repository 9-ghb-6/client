import { useState } from "react";
import { useEffect, useRef } from "react";
import Write from "./write";
import HistoryItem from "./historyitem";
function History({ datas,historyAPI }) {
    const monthRef = useRef();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const month = new Date().toISOString().slice(0, 7);
        monthRef.current.value = month;
        historyAPI.history(month).then(received => {
            if (received.result) {
                setItems(received.datas);
            }
        })
    },[])
    
    return (<div className="mt-2">
        <div>
            <div className="form-floating ">
                <input type="month" className="form-control" id="itemDate" ref={monthRef} />
                <label for="itemDate">꼬우면 카톡해라 baedon</label>
            </div>
            <button type="button" className="btn border-0"  
                    data-bs-toggle="modal" data-bs-target="#write">
                <i className="bi bi-pencil"></i>
            </button>
        </div>
        <div>
            {items.map(one => {
                return<HistoryItem data={one}/>
            })
            }
        </div>
        <div id="write" className="modal fade">
            <div className="modal-dialog">
                <div class="modal-content">
                    <div className="modal-body">
                        <Write />
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default History;