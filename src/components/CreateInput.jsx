import React from "react";

function CreateInput() {
  return (
    <>
      <form className="">
        <input type="file" className="file-input w-full" />
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Enter price for one item (ETH)"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Minimum Bid</span>
          </label>
          <input
            type="number"
            placeholder="Enter minimum bid"
            className="input input-bordered w-full "
          />
        </div>
        <div className="grid grid-cols-2 gap-4 form-control w-full ">
          <div>
            <label className="label">
              <span className="label-text">Starting Date</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Expiration Date</span>
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <textarea
          className="textarea my-5"
          placeholder="Enter description"
        ></textarea>
      </form>
    </>
  );
}

export default CreateInput;
