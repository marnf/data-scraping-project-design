



import React, { Component } from "react";
import ReactModal from "react-modal-resizable-draggable";
import "../SearchPage/SearchPage.css";

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      formFields: [
        {
          id: Date.now(),
          url: "",
          columnName: "",
          selectorClass: "",
          selectorType: "image",
          serial: 0,
        },
      ],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addForm = this.addForm.bind(this);
    this.removeForm = this.removeForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleInputChange(event, id) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formFields: prevState.formFields.map((field) =>
        field.id === id ? { ...field, [name]: value } : field
      ),
    }));
  }

  addForm() {
    if (this.state.formFields.length >= 10) {
      alert("Maximum 10 forms allowed!");
      return;
    }
    this.setState((prevState) => ({
      formFields: [
        ...prevState.formFields,
        {
          id: Date.now(),
          url: "",
          columnName: "",
          selectorClass: "",
          selectorName: "",
          selectorType: "image",
          serial: 0,
        },
      ],
    }));
  }

  removeForm(id) {
    this.setState((prevState) => ({
      formFields: prevState.formFields.filter((field) => field.id !== id),
    }));
  }

  async submitForm() {
    const { formFields } = this.state;
    console.log("Form data:", formFields);
    try {
      const response = await fetch("https://your-api-endpoint.com/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFields),
      });
      if (response.ok) {
        console.log("Data submitted successfully!");
        this.closeModal();
      } else {
        console.error("Failed to submit data:", response.status);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }

  render() {
    return (
      <div className="SearchPage">
        <button
          onClick={this.openModal}
          className="transition ease-in-out bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Open Modal
        </button>
        {this.state.modalIsOpen && (
          <ReactModal
            initWidth={800}
            initHeight={600}
            minHeight={600}
            minWidth={500}
            onFocus={() => console.log("Modal is clicked")}
            className="   "
            isOpen={true}
          >
            <h3 className="text-xl font-bold mt-3">Form Modal</h3>
            <div className="p-4 mt-4 max-h-[450px] overflow-auto"> {/* Add max height and scrolling */}
              {this.state.formFields.map((field, index) => (
                <div
                  key={field.id}
                  className="border border-gray-300 p-4 rounded mb-2 relative"
                >
                  <h4 className="font-semibold mb-3">Form {index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="mb-2">URL:</label>
                      <input
                        type="text"
                        name="url"
                        value={field.url}
                        onChange={(e) => this.handleInputChange(e, field.id)}
                        className="border border-gray rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2">Column Name:</label>
                      <input
                        type="text"
                        name="columnName"
                        value={field.columnName}
                        onChange={(e) => this.handleInputChange(e, field.id)}
                        className="border border-gray rounded p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2">Selector Class:</label>
                      <input
                        type="text"
                        name="selectorClass"
                        value={field.selectorClass}
                        onChange={(e) => this.handleInputChange(e, field.id)}
                        className="border border-gray rounded p-2"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2">Selector Name:</label>
                      <input
                        type="text"
                        name="selectorName"
                        value={field.selectorName}
                        onChange={(e) => this.handleInputChange(e, field.id)}
                        className="border border-gray rounded p-2"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="mb-2">Selector Type:</label>
                      <select
                        name="selectorType"
                        value={field.selectorType}
                        onChange={(e) => this.handleInputChange(e, field.id)}
                        className="select border border-gray rounded p-2"
                      >
                        <option value="image">image</option>
                        <option value="href">href</option>
                        <option value="h">h</option>
                        <option value="html">html</option>
                        <option value="span">span</option>
                        <option value="strong">strong</option>
                        <option value="li">li</option>
                        <option value="div">div</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2">Serial:</label>
                      <input
                        type="number"
                        name="serial"
                        value={field.serial}
                        onChange={(e) => this.handleInputChange(e, field.id)}
                        className="border border-gray rounded p-2"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => this.removeForm(field.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={this.addForm}
                className="bg-blue-500 text-white px-4 py-2 rounded "
              >
                Add Data
              </button>
            </div>
            <div className="flex justify-end gap-3 mx-3">
              <button
                onClick={this.closeModal}
                className="transition ease-in-out delay-150 bg-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-100 py-3 px-5 rounded"
              >
                Close
              </button>
              <button
                onClick={this.submitForm}
                className="transition ease-in-out delay-150 bg-green-700 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-100 py-3 px-5 rounded"
              >
                Submit
              </button>
            </div>
          </ReactModal>

        )}
      </div>
    );
  }
}

export default SearchPage;

