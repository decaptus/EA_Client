import "./message.css";

export default function Message({ message, own }) {
  
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
            <img
              className="messageImg"
              src=""
              alt=""
            />
                
        <p className="messageText">{message.text}</p>
      </div>
    </div>
  );
}