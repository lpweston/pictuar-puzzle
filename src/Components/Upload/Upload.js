import React, { Component } from "react";
import styles from "./Upload.module.css";
import axios from "axios";

class Upload extends Component {
  state = { file: null };
  render() {
    console.log(this.state.file);
    return (
      <>
        <h3 className={styles.uploadTitle}>Select Image!</h3>
        <form>
          <div className={styles.upload}>
            <input type="file" onChange={this.handleSelectFile} />
          </div>
          <div className={styles.uploadButton}>
            <button type="button" onClick={this.handleSumbitImage}>
              Upload!
            </button>
          </div>
        </form>
      </>
    );
  }
  handleSelectFile = event => {
    this.setState({ file: event.target.files[0] });
  };
  handleSumbitImage = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.file, this.state.file.name);
    axios({
      method: "POST",
      url: "https://api.imgur.com/3/image",
      data: formData,
      headers: {
        Authorization: "Bearer fc0a9f7020eae6353ae08011ef2852caff0e0922"
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(console.dir);
  };
}
export default Upload;
