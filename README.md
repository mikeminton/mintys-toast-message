
# Minty's Toast Message (mintys-toast-message)

This repository contains a lightweight, customizable toast notification system built with JavaScript and CSS. It provides an easy way to integrate informative and interactive notifications into your web projects without the need for third-party plugins.

## Features

- Lightweight & Customisable: No dependencies, easily styled and configured.
- Supports Multiple Types: Includes success, warning, and error notifications.
- Auto-dismiss & Clickable: Toasts disappear after a set time or can be dismissed early by clicking.

## Getting Started

### Prerequisites

Ensure your project includes jQuery, as it is required for the toast notifications to function.

### Installation

Ensure your project includes jQuery, as it is required for the toast notifications to function.

- Include the CSS file:

  Add the following line in the <head> section of your HTML to include the necessary styles for the toast notifications.
  ```html
  <link rel="stylesheet" href="path/to/toast-style.css">
  ```

- Include the JavaScript:

  Ensure jQuery is included, then include the toast notification JavaScript file.
  ```html
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="path/to/toast-notification.js"></script>
  ```

- Font Awesome Icons:

  To utilize icons in the toast messages, include Font Awesome in your HTML <head>:
  ```html  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  ```

### Usage

To use the toast notification system, call the toastMessage function wherever you need to display a notification. Here are some examples:
  ```javascript  
  // Display a success message
  toastMessage('Operation successful!', 'success');
  
  // Display a warning message
  toastMessage('Please check your entries.', 'warning');
  
  // Display an error message
  toastMessage('Failed to load data.', 'error');
  
  ```

### Function Parameters

- text (string): The message you want to display.
- type (string): The type of notification ('success', 'warning', or 'error'). Default is 'warning'.



## Customisation
Modify the CSS file to change the appearance of the toast messages, such as background color, text color, and animation duration.

## Contributing
Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
Distributed under the Unlicence License.
