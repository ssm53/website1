import React from "react";

const SendUsInquiry = () => {
  return (
    <div className="pb-20" style={{ width: "90%", margin: "0 auto" }}>
      <form
        action="submit"
        style={{
          margin: "0 auto",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <div className="flex justify-between mb-4">
          <div style={{ width: "45%" }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                outline: "none",
              }}
            />
          </div>
          <div style={{ width: "45%" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                outline: "none",
              }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            placeholder="Message"
            style={{
              width: "100%",
              height: "8rem",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              outline: "none",
            }}
          />
        </div>
        <div className="flex justify-center pt-10">
          <button
            style={{
              width: "12rem",
              height: "50px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendUsInquiry;
