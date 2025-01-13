import React, { Component } from 'react';
import ReactModal from 'react-modal-resizable-draggable';
import '../SearchPage/SearchPage.css';

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      formData: {
        url: '',
        columnName: '',
        selectorClass: '',
        selectorType: 'image',
        serial: 0,
      },
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  }

  async submitForm() {
    const { formData } = this.state;
    console.log('Form data:', formData);
    try {
      const response = await fetch('https://your-api-endpoint.com/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Data submitted successfully!');
        this.closeModal(); // মডাল বন্ধ করুন
      } else {
        console.error('Failed to submit data:', response.status);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
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
            initHeight={420}
            minHeight={420}
            minWidth={500}
            onFocus={() => console.log('Modal is clicked')}
            className="my-modal-custom-class max-h-[420px] "
            isOpen={true}
          >
            <h3 className="text-xl font-bold mt-3">Form Modal</h3>
            <div className="flex flex-col p-4 mt-4 w-full">
              <label className="mb-2">URL:</label>
              <input
                type="text"
                name="url"
                value={this.state.formData.url}
                onChange={this.handleInputChange}
                className="border border-gray rounded p-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <div className="flex flex-col">
                <label className="mb-2">Column Name:</label>
                <input
                  type="text"
                  name="columnName"
                  value={this.state.formData.columnName}
                  onChange={this.handleInputChange}
                  className="border border-gray rounded p-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Selector Class:</label>
                <input
                  type="text"
                  name="selectorClass"
                  value={this.state.formData.selectorClass}
                  onChange={this.handleInputChange}
                  className="border border-gray rounded p-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Selector Type:</label>
                <select
                  name="selectorType"
                  value={this.state.formData.selectorType}
                  onChange={this.handleInputChange}
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
                  value={this.state.formData.serial}
                  onChange={this.handleInputChange}
                  className="border border-gray rounded p-2"
                />
              </div>
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
