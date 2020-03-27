export default function App() {
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
      fetch('http://192.168.1.192:19006/')
          .then(response => {
              console.log(response.json())
          })
      setReponse("Generated response")
  }
};