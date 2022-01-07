export default function App() {
  let studentname = "ashish";
  let studentid = "026";

  return (
    <div className="Container-fluid ">
      <div className="Container bg-secondary">
        <div className="d-flex">
          <div className=" text-light fs-4">MyChatApp</div>
          <div className="bg-secondary text-light">
            by {studentname} {studentid}
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-6">
          <input type="text" placeholder="Lets Chat Here..."></input>
          <input type="button" value="send"></input>
        </div>
      </div>

      <div className="row">
        <div className="col-12 bg-light text-dark mt-2">Hii</div>
      </div>
      <div className="row justify-content-end">
        <div className="col-12 bg-light text-dark mt-2 justify-content-end">
          Hello,
        </div>
      </div>
      <div className="row">
        <div className="col-12 bg-light text-dark mt-2">WhatsApp</div>
      </div>
      <div className="row">
        <div className="col-12 bg-light text-dark mt-2">All good,</div>
      </div>
      <div className="row bg-light mt-2 ">
        <div className="col-12 text-dark justify-content-end">All the best</div>
      </div>
    </div>
  );
}
