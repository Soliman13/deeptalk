import React from 'react';
import './Home.scss';

const Home = (props) => {
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [source, setSource] = React.useState("file");
    const [textValue, setTextValue] = React.useState("");
    const [questionValue, setQuestion] = React.useState("");
    const [reponse, setReponse] = React.useState("");

    const fileChanged = (e) => setSelectedFile(e.target.files[0]);

    const sourceChanged = (e) => setSource(e.currentTarget.value);

    const textChanged = (e) => setTextValue(e.currentTarget.value);

    const questionChanged = (e) => setQuestion(e.currentTarget.value);

    const askQuestion = (e) => {
        // todo generate reponse
        fetch('http://localhost:5000/')
            .then(response => {
                console.log(response.json())
            })
        setReponse("Generated response")
    };

    return (
        <div className="container-app">
            <h1 className="title">
                DeepTalk
            </h1>
            <h2>1. Select source</h2>
            <div className="container-step1">
                <div className="container-choices">
                    <div className="choice">
                        <input type="radio" name="source" value="file" defaultChecked onChange={sourceChanged}/>
                    </div>
                    <div className="choice">
                        <input type="radio" name="source" value="text" onChange={sourceChanged}/>
                    </div>
                </div>
                <div className="container-inputs">
                    <div className={"container-auto-width " + (source === "text" ? 'overlay' : '') }>
                        <div className="cell-board-input-1">
                            <input type="file" id="file" onChange={fileChanged}/>
                            <label htmlFor="file" className="btn-1 upload-btn">{selectedFile ? selectedFile.name : "Upload"}</label>
                        </div>
                    </div>
                    <div className={"cell-board-input-2 " + (source === "file" ? 'overlay' : '') }>
                        <textarea className="text-area" onChange={textChanged} value={textValue}></textarea>
                    </div>
                </div>
            </div>
            <h2>2. Ask anything !</h2>
            <div className="container-step2">
                <div className="row-question">
                    <div>
                        <label htmlFor="question">Question</label>
                        <input type="text" className="question-input" onChange={questionChanged} value={questionValue}/>
                    </div>
                    <button className="btn-go-question" onClick={askQuestion}>Go !</button>
                </div>
                <label htmlFor="reponse">Réponse</label>
                <input type="text" className="reponse-input" value={reponse} readOnly/>
            </div>
        </div>
    )
};

export default Home;
