import axios from "axios";
import React, { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { base_url } from "../utils/service";

const TemplateCreationModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleTemplateCreate = async () => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post(`${base_url}api/user/createfolders`, {
        name,
      });

      if (response.status >= 200 && response.status < 300) {
        console.log('Template created successfully:', response.data);
        Swal.fire({
          icon: 'success', // Make sure the icon is 'success' for successful operations
          title: 'Files created successfully',
          showConfirmButton: true, // Show the confirm button
          confirmButtonText: 'OK', 
        });

        onClose(); // Close the modal
      } else {
        console.error('Failed to create template:', response.data);
        Swal.fire({
          icon: 'error',
          title: 'Failed to create template',
          text: response.data.message || 'An unexpected error occurred.',
        });
      }
    } catch (error) {
      console.error('Error creating template:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error creating template',
        text: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <h2>Create Folder</h2>

      <input
        placeholder="Folder name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', margin: '20px auto', width: '80%', padding: '10px', fontSize: '16px' }}
      />

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleTemplateCreate} disabled={isLoading} 
        style={{ 
          backgroundColor: '#F99A1F',
          color: "white",
          padding: '10px 20px', // Increased padding for a wider button
          fontSize: '18px', // Larger font size for better visibility
          cursor: 'pointer', // Change cursor to indicate the button is clickable
          border: 'none', // Remove border for aesthetics
          borderRadius: '5px', // Soften the corners
          width: '50%', // Increase width
          maxWidth: '300px', // Set a max width to ensure it looks good on all screens
        }}>
          Create
        </button>
      </div>
    </Modal>
  );
};

// Optional: Custom styles for the Modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px', // Adjust as needed
    padding: '40px', // Added padding for aesthetics
  },
};

export default TemplateCreationModal;
