import React from "react";
import Dropzone from "react-dropzone";

// for profile picture
class ImageUpload extends React.Component {

  onDrop = (accepted, rejected) => {
    if (Object.keys(rejected).length !== 0) {
      const message = "Please submit valid file type";
      this.setState({ warningMsg: message });
    } else {
      this.props.addFile(accepted);
      this.setState({ warningMsg: "" });
      console.log(accepted[0].preview);

      var blobPromise = new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.readAsDataURL(accepted[0]);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
      blobPromise.then(value => {
        // console.log(value);
      });
    }
  };

  render() {
    const { files } = this.props;
    const thumbsContainer = {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition: "center"
    };

    const imageAdd ={
      background: "#3897f0",
      color: "white",
      borderRadius: "20px",
      height: "20px",
      width: "20px",
      textAlign: "center",
      boxShadow: "0 19px 38px rgba(0,0,0,0.08), 0 15px 12px rgba(0,0,0,0.08)"
    }

    const thumbs = files.map(file => (
      <img style={thumbsContainer} src={file.preview} alt="profile" />
    ));

    console.log(thumbs);

    const render =
      Object.keys(files).length !== 0 ? (
        files.map(file => <aside>{thumbs}</aside>)
      ) : (
        <p style={imageAdd}>+</p>
      );

    return (
      <div>

        <Dropzone
          style={{
            background: "white",
            backgroundImage: "url(http://nickbinuya.com/images/logo-nu.png)",
            backgroundSize: "60px",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center",
            boxShadow: "0 19px 38px rgba(0,0,0,0.08), 0 15px 12px rgba(0,0,0,0.08)",
            cursor: "pointer",
            position: "relative",
            top: "40px",
            left: "10%"
          }}
          multiple={false}
          accept="image/*"
          onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}
        >
          {({ isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
            // for drag and drop warning statement
            if (isDragReject) return "Please submit a valid file";
            return render;
          }}
        </Dropzone>
      </div>
    );
  }
}

export default ImageUpload;
