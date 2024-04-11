# Image Filter App

This is a React app that allows users to upload an image and apply different filters to it using a slider.

## Overview

- Built with React, TypeScript, Vite, Redux Toolkit
- Implements image upload
- Applies CSS filters to image
- Has slider component to control filter values
- Developed using React hooks and Redux for state management

## Features

- Image Upload
  - Allow users to upload JPG/PNG images
- Filter Options
  - Set of adjustable CSS filter options
  - Options include brightness, contrast, saturation etc
  - Each option can be adjusted via slider

## Components

- App - Main app component
- UploadInput - File upload input
- Slider - Adjusts filter value

## State Management

- Redux Toolkit
  - `configureStore`, `createSlice` APIs
  - `file` slice for uploaded file metadata
- React-Redux
  - `useSelector` and `useDispatch` hooks

## Styling

- CSS Modules - Scoped CSS styles
- CSS Variables - Dynamic values for image filters

## Future Improvements

- Add more filter options
- Improve UI/UX
- Implement image cropping
- Add animations
- Write tests
