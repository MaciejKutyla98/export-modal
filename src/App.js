import React, {useState} from "react";
import Modal from "./components/Modal/Modal";
import ReportForm from "./components/ReportForm/ReportForm";
import './App.scss'

export default function App() {
    const [show, setShow] = useState(false);

    return (
        <div className="App" id="App">
            <button className='modal-button' onClick={() => setShow(true)}>Show Modal</button>
            <Modal title="Export Report" onClose={() => setShow(false)} show={show}>
                <ReportForm onClose={() => setShow(false)} show={show}/>
            </Modal>
        </div>
    );
}