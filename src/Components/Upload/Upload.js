import React, { Component } from "react";
import styles from "./Upload.module.css";
import axios from "axios";
import Imagetiles from "../ImageComponents/Imagetiles";

class Upload extends Component {
  state = { file: null, response: null, images: [] };
  render() {
    const { images } = this.state;
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
        <br></br>
        <ul className={styles.images}>
          {images.map(image => {
            return (
              <li key={image.id}>
                <Imagetiles {...image} />
              </li>
            );
          })}
        </ul>
        {/* <div className={styles.image}>
          <img src={this.state.image} alt="shit" />
        </div> */}
      </>
    );
  }

  componentDidMount = () => {
    this.getAllImages();
  };

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
        this.setState({ response: res.data });
      })
      .catch(console.dir);
  };

  getAllImages = () => {
    axios({
      method: "GET",
      url: "https://api.imgur.com/3/account/me/images",
      headers: {
        Authorization: "Bearer fc0a9f7020eae6353ae08011ef2852caff0e0922"
      }
    })
      .then(res => {
        this.setState({ images: res.data.data });
      })
      .catch(console.log);
  };
}
export default Upload;
