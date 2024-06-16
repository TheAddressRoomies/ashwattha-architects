import React, { useEffect, useState } from "react";
import "./EditHomepage.css";
import { useNavigate } from "react-router-dom";
import { dashboardApi } from "../../../api/DashboardApi";
import { BACKEND_BASE_URL } from "../../../keys/keys";

const EditHomepage = () => {
    const [images, setImages] = useState([]);
    const [payload, setPayload] = useState([]);
    const [newFiles, setNewFiles] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        dashboardApi
            .fetchCarouselImages()
            .then((response) => {
                setImages((_)=> response.data.data);
                setPayload((_)=> response.data.data);
            })
            .catch((error) => {});
    }, []);


    const onImageChange = (e, index) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            const modifiedImages = [...images];
            const modifiedPayload = [...payload];
            const updatedFiles = { ...newFiles };

            modifiedPayload[index].isChanged = true;
            modifiedImages[index] = URL.createObjectURL(file);
            updatedFiles[index] = file;

            setImages(modifiedImages);
            setPayload(modifiedPayload);
            setNewFiles(updatedFiles);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        const updatedPayload = payload.map((item, index) => {
            if (item.isChanged) {
                return {
                    ...item,
                    imagePath: newFiles[index].name,
                    imageName: newFiles[index].name,
                };
            }
            return item;
        });

        formData.append('payload',
            new Blob([JSON.stringify(updatedPayload)], { type: "application/json" }),
            "");

            for (let i = 0; i < payload.length; i++) {
                if (newFiles[i]) {
                    formData.append('images', newFiles[i], newFiles[i].name);
                } else {
                    const oldImage = payload[i];
                    const oldImagePath = `${BACKEND_BASE_URL}/images/${oldImage.imageName}`;
                    const response = await fetch(oldImagePath);
                    const blob = await response.blob();
                    const file = new File([blob], oldImage.imageName, { type: blob.type });
                    formData.append('images', file, file.name);
                }
            }

        try {
            await dashboardApi.updateCarouselImages(formData);
            alert('Carousel images updated successfully!');
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Failed to update carousel images:', error);
        }
    };

    return (
        <div className="container-home">
            <h2>Edit Homepage Images</h2>
            <hr/>
            {payload.map((image, index) => (
                <div key={index} className="table-home-row">
                    <div className="table-home-cell">
                        <p>{image.imageType}</p>
                    </div>
                    <div className="table-home-cell">
                       {image.isChanged === undefined ?
                        <img src={BACKEND_BASE_URL + "/images/" + image.imageName} alt={`Preview ${index}`} />
                        :
                        <img src={images[index]} alt={`Preview ${index}`} />
                       } 
                    </div>
                    <div className="table-home-cell">
                        <input type="file" onChange={(e) => onImageChange(e, index)} />
                    </div>
                </div>
            ))}
            <button className="button-home" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default EditHomepage;
